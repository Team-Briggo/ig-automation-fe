"use client";
import { signUp } from "aws-amplify/auth"; // v6 functional import
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await signUp({
        input: {
          username: email,
          password,
          options: { userAttributes: { email } }, // email attribute
        },
      });
      // redirect to confirm code page
      router.push(`/auth/confirm?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setError(err?.message || String(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex justify-end">
            <Button type="submit" disabled={busy}>
              {busy ? "Creating..." : "Create account"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
