"use client";
import { confirmResetPassword, resetPassword } from "aws-amplify/auth";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function ForgotPassword() {
  const [stage, setStage] = useState(1); // 1 = request code, 2 = submit new password
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const sendCode = async (e) => {
    e?.preventDefault();
    try {
      await resetPassword({ username: email });
      setStage(2);
      setMsg("Check your email for the code");
    } catch (err) {
      setMsg(err?.message || String(err));
    }
  };

  const submitNewPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmResetPassword({
        username: email,
        newPassword,
        confirmationCode: code,
      });
      setMsg("Password updated — you can sign in now");
      setStage(1);
    } catch (err) {
      setMsg(err?.message || String(err));
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Reset password</h2>

        {stage === 1 && (
          <form onSubmit={sendCode} className="space-y-4">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
            <div className="flex justify-end">
              <Button type="submit">Send code</Button>
            </div>
          </form>
        )}

        {stage === 2 && (
          <form onSubmit={submitNewPassword} className="space-y-4">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code from email"
            />
            <Input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="New password"
            />
            <div className="flex justify-end">
              <Button type="submit">Change password</Button>
            </div>
          </form>
        )}

        {msg && <p className="text-sm mt-4 text-red-600">{msg}</p>}
      </div>
    </main>
  );
}
