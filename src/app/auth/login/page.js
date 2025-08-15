"use client";
import { signIn } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const resp = await signIn({ username: email, password });
      router.push("/dashboard");
    } catch (error) {
      setErr(error?.message || String(error));
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          {err && <p className="text-sm text-red-600">{err}</p>}
          <div className="flex items-center justify-between">
            <a className="text-sm" href="/auth/forgot-password">
              Forgot password?
            </a>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
