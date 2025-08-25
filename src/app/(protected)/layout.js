"use client";

import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const user = await getCurrentUser();
        if (!user) {
          router.replace("/auth/login");
          return;
        }
      } catch {
        router.replace("/auth/login");
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-6 py-4 w-full">
        <FiArrowLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}
