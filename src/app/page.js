import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Salt & Pepper App</h1>
        <p className="text-lg text-muted mb-6">
          Classic UI, minimal Amplify v6 auth demo.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auth/register" className="px-4 py-2 rounded-md border">
            Get started
          </Link>
          <Link href="/auth/login" className="px-4 py-2 rounded-md border">
            Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
