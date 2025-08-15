"use client";
import { confirmSignUp, resendSignUp } from "aws-amplify/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function ConfirmPage() {
  const params = useSearchParams();
  const emailFromUrl = params?.get("email") || "";
  const [email, setEmail] = useState(emailFromUrl);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleConfirm = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      router.push("/auth/login");
    } catch (err) {
      setMsg(err?.message || String(err));
    } finally {
      setBusy(false);
    }
  };

  const handleResend = async () => {
    try {
      await resendSignUp({ username: email });
      setMsg("Code resent — check your email");
    } catch (err) {
      setMsg(err?.message || String(err));
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Confirm your account</h2>
        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Confirmation code</label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} />
          </div>
          {msg && <p className="text-sm text-red-600">{msg}</p>}
          <div className="flex gap-2 justify-end">
            <Button type="button" onClick={handleResend}>
              Resend
            </Button>
            <Button type="submit" disabled={busy}>
              {busy ? "Verifying..." : "Verify"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
