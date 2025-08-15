"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

// Dummy recent posts
const dummyPosts = [
  { id: 1, image: "/post1.jpg", caption: "Post 1" },
  { id: 2, image: "/post2.jpg", caption: "Post 2" },
  { id: 3, image: "/post3.jpg", caption: "Post 3" },
];

// ------------------ Step 1 ------------------
function Step1_SelectPost({ selectedPost, onSelect }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select a Post</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {dummyPosts.map((post) => (
          <div
            key={post.id}
            className={`border rounded-lg p-2 cursor-pointer ${
              selectedPost?.id === post.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => onSelect(post)}
          >
            <Image
              src={post.image}
              alt={post.caption}
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------ Step 2 ------------------
function Step2_ChooseAutomationType({ automationType, setAutomationType }) {
  const options = [
    { value: "dm", label: "Send a DM to commenters" },
    { value: "reply", label: "Reply to comments" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Choose Automation Type</h2>
      <div className="space-y-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              value={opt.value}
              checked={automationType === opt.value}
              onChange={(e) => setAutomationType(e.target.value)}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

// ------------------ Step 3 ------------------
function Step3_ConfigureReplies({ replySettings, setReplySettings }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Configure Replies</h2>

      <div className="mb-4">
        <label className="font-medium block mb-1">Reply Mode</label>
        <select
          value={replySettings.mode}
          onChange={(e) =>
            setReplySettings({ ...replySettings, mode: e.target.value })
          }
          className="border rounded p-2 w-full"
        >
          <option value="all">Reply to all comments</option>
          <option value="keywords">
            Reply to comments with specific keywords
          </option>
        </select>
      </div>

      {replySettings.mode === "keywords" && (
        <div className="mb-4">
          <label className="font-medium block mb-1">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={replySettings.keywords}
            onChange={(e) =>
              setReplySettings({ ...replySettings, keywords: e.target.value })
            }
            className="border rounded p-2 w-full"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="font-medium block mb-1">Reply Message</label>
        <textarea
          value={replySettings.message}
          onChange={(e) =>
            setReplySettings({ ...replySettings, message: e.target.value })
          }
          className="border rounded p-2 w-full"
          rows="3"
        />
      </div>
    </div>
  );
}

// ------------------ Step 4 ------------------
function Step4_ConfigureDMs({ dmSettings, setDmSettings }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Configure DMs</h2>

      <div className="mb-4">
        <label className="font-medium block mb-1">DM Mode</label>
        <select
          value={dmSettings.mode}
          onChange={(e) =>
            setDmSettings({ ...dmSettings, mode: e.target.value })
          }
          className="border rounded p-2 w-full"
        >
          <option value="all">DM all commenters</option>
          <option value="keywords">DM commenters with specific keywords</option>
        </select>
      </div>

      {dmSettings.mode === "keywords" && (
        <div className="mb-4">
          <label className="font-medium block mb-1">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={dmSettings.keywords}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, keywords: e.target.value })
            }
            className="border rounded p-2 w-full"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="font-medium block mb-1">DM Type</label>
        <select
          value={dmSettings.type}
          onChange={(e) =>
            setDmSettings({ ...dmSettings, type: e.target.value })
          }
          className="border rounded p-2 w-full"
        >
          <option value="text">Normal text message</option>
          <option value="media">Media + text message</option>
          <option value="carousel">Product + Carousel</option>
        </select>
      </div>

      {dmSettings.type === "text" && (
        <div className="mb-4">
          <label className="font-medium block mb-1">Message</label>
          <textarea
            value={dmSettings.message}
            onChange={(e) =>
              setDmSettings({ ...dmSettings, message: e.target.value })
            }
            className="border rounded p-2 w-full"
          />
        </div>
      )}

      {dmSettings.type === "media" && (
        <>
          <div className="mb-4">
            <label className="font-medium block mb-1">Message</label>
            <textarea
              value={dmSettings.message}
              onChange={(e) =>
                setDmSettings({ ...dmSettings, message: e.target.value })
              }
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium block mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setDmSettings({ ...dmSettings, image: e.target.files[0] })
              }
              className="border rounded p-2 w-full"
            />
          </div>
        </>
      )}

      {dmSettings.type === "carousel" && (
        <>
          <div className="mb-4">
            <label className="font-medium block mb-1">Card Title</label>
            <input
              type="text"
              value={dmSettings.cardTitle}
              onChange={(e) =>
                setDmSettings({ ...dmSettings, cardTitle: e.target.value })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="font-medium block mb-1">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setDmSettings({
                  ...dmSettings,
                  productImage: e.target.files[0],
                })
              }
              className="border rounded p-2 w-full"
            />
          </div>

          {[0, 1, 2].map((i) => (
            <div key={i} className="mb-4">
              <label className="font-medium block mb-1">
                Button {i + 1} Label
              </label>
              <input
                type="text"
                value={dmSettings.buttons[i]?.label || ""}
                onChange={(e) => {
                  const updated = [...dmSettings.buttons];
                  updated[i] = { ...updated[i], label: e.target.value };
                  setDmSettings({ ...dmSettings, buttons: updated });
                }}
                className="border rounded p-2 w-full"
              />
              <label className="font-medium block mb-1 mt-2">
                Button {i + 1} URL
              </label>
              <input
                type="text"
                value={dmSettings.buttons[i]?.url || ""}
                onChange={(e) => {
                  const updated = [...dmSettings.buttons];
                  updated[i] = { ...updated[i], url: e.target.value };
                  setDmSettings({ ...dmSettings, buttons: updated });
                }}
                className="border rounded p-2 w-full"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ------------------ Main Automation Page ------------------
export default function AutomationPage() {
  const [step, setStep] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [automationType, setAutomationType] = useState("");
  const [replySettings, setReplySettings] = useState({
    mode: "all",
    keywords: "",
    message: "",
  });
  const [dmSettings, setDmSettings] = useState({
    mode: "all",
    keywords: "",
    type: "text",
    message: "",
    image: null,
    cardTitle: "",
    productImage: null,
    buttons: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {step === 1 && (
        <Step1_SelectPost
          selectedPost={selectedPost}
          onSelect={setSelectedPost}
        />
      )}
      {step === 2 && (
        <Step2_ChooseAutomationType
          automationType={automationType}
          setAutomationType={setAutomationType}
        />
      )}
      {step === 3 &&
        (automationType === "reply" || automationType === "both") && (
          <Step3_ConfigureReplies
            replySettings={replySettings}
            setReplySettings={setReplySettings}
          />
        )}
      {step === 3 && automationType === "dm" && (
        <Step4_ConfigureDMs
          dmSettings={dmSettings}
          setDmSettings={setDmSettings}
        />
      )}
      {step === 4 && automationType === "both" && (
        <Step4_ConfigureDMs
          dmSettings={dmSettings}
          setDmSettings={setDmSettings}
        />
      )}

      <div className="mt-6 flex gap-4">
        {step > 1 && <Button onClick={prevStep}>Back</Button>}
        {step < 4 && <Button onClick={nextStep}>Next</Button>}
        {step === 4 && (
          <Button onClick={() => alert("Automation Saved!")}>Save</Button>
        )}
      </div>
    </div>
  );
}
