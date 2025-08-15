import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const REQUIRED_FIELDS = ["id", "text"];

export async function POST(req) {
  try {
    const { comments } = await req.json();
    if (!Array.isArray(comments)) {
      return NextResponse.json(
        { error: "comments must be an array" },
        { status: 400 }
      );
    }

    // Keep only the fields the model needs
    const compact = comments
      .filter((c) => c && REQUIRED_FIELDS.every((k) => k in c))
      .map((c) => ({ id: String(c.id), text: String(c.text || "") }));

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      // Ask for strict JSON back; if SDK supports it, we’ll use the schema below
      // Older SDKs ignore responseSchema and still return text JSON we can parse.
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            results: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  labels: {
                    type: "object",
                    properties: {
                      vulgarity: { type: "boolean" },
                      nudity_sexual: { type: "boolean" },
                      scam_spam: { type: "boolean" },
                      violence: { type: "boolean" },
                      hate_speech: { type: "boolean" },
                      self_harm: { type: "boolean" },
                      harassment_bullying: { type: "boolean" },
                      other: { type: "boolean" },
                    },
                    required: [
                      "vulgarity",
                      "nudity_sexual",
                      "scam_spam",
                      "violence",
                      "hate_speech",
                      "self_harm",
                      "harassment_bullying",
                      "other",
                    ],
                  },
                  severity: {
                    type: "string",
                    enum: ["none", "low", "medium", "high", "critical"],
                  },
                  language: { type: "string" },
                  rationale: { type: "string" },
                },
                required: ["id", "labels", "severity", "language"],
              },
            },
          },
          required: ["results"],
        },
      },
    });

    const system = `
You are a strict, multilingual content safety classifier. 
Label each comment across these categories (true/false):
- vulgarity/profanity
- nudity/sexual
- scam/spam (phishing, promotions, impersonation, suspicious links)
- violence
- hate-speech (protected classes, slurs)
- self-harm
- harassment/bullying
- other (if harmful but not above)

Return a JSON object exactly matching the given schema. 
For "severity" choose one of: none, low, medium, high, critical.
Also include detected language (BCP-47 if known, else ISO 639-1, else "und").
Keep "rationale" concise (<= 140 chars).`;

    const user = `Classify these comments:\n${JSON.stringify(
      compact,
      null,
      2
    )}`;

    const resp = await model.generateContent([
      { role: "user", parts: [{ text: system + "\n\n" + user }] },
    ]);
    const raw =
      resp.response?.text?.() ||
      resp.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "{}";

    let json;
    try {
      json = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch {
      // Fallback: try to extract JSON block
      const match = String(raw).match(/\{[\s\S]*\}/);
      json = match ? JSON.parse(match[0]) : { results: [] };
    }

    // Defensive: map back to original IDs, fill defaults
    const defaults = {
      labels: {
        vulgarity: false,
        nudity_sexual: false,
        scam_spam: false,
        violence: false,
        hate_speech: false,
        self_harm: false,
        harassment_bullying: false,
        other: false,
      },
      severity: "none",
      language: "und",
      rationale: "",
    };

    const byId = Object.fromEntries(compact.map((c) => [c.id, true]));
    const results = (json.results || [])
      .filter((r) => r && r.id && byId[r.id])
      .map((r) => ({
        id: String(r.id),
        labels: { ...defaults.labels, ...(r.labels || {}) },
        severity: ["none", "low", "medium", "high", "critical"].includes(
          r.severity
        )
          ? r.severity
          : "none",
        language: r.language || "und",
        rationale: r.rationale || "",
      }));

    return NextResponse.json({ results });
  } catch (err) {
    console.error("Moderation error:", err);
    return NextResponse.json({ error: "Moderation failed" }, { status: 500 });
  }
}
