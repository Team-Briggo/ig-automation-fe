"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { linkInstagramAccountAPI } from "@/lib/apiHandler";
import { useUser } from "@/contexts/UserContext";

export default function InstagramConnect() {
  const searchParams = useSearchParams();
  const { user, fetchAndSetUser } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const code = searchParams.get("code");

  const connectInstagram = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI}&scope=instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish,instagram_business_manage_insights
&response_type=code`;
    window.location.href = authUrl;
  };

  useEffect(() => {
    if (code) {
      setLoading(true);
      (async () => {
        const res = await fetch("/api/instagram/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        if (res.ok) {
          const data = await res.json();
          console.log("Instagram Connected:", data);
          await linkInstagramAccountAPI({
            code,
            userId: user.id,
          });

          await fetchAndSetUser(user.id);

          router.replace("/dashboard");
        } else {
          console.error("Failed to connect Instagram");
        }
        setLoading(false);
      })();
    }
  }, [code, router]);

  if (loading) {
    return <p>Connecting Instagram...</p>;
  }

  return (
    <Button
      className="flex gap-2 justify-center items-center w-full text-white bg-pink-500 hover:bg-pink-600"
      onClick={connectInstagram}
    >
      <FaInstagram className="text-lg" /> Connect Instagram
    </Button>
  );
}
