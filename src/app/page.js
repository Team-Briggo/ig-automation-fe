import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-salt">
      <HeroSection />
      {/* <section className="max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Salt & Pepper App</h1>
        <p className="mb-6 text-lg text-muted">
          Classic UI, minimal Amplify v6 auth demo.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/auth/register" className="px-4 py-2 rounded-md border">
            Get started
          </Link>
          <Link href="/auth/login" className="px-4 py-2 rounded-md border">
            Sign in
          </Link>
        </div>
      </section> */}
    </main>
  );
}
