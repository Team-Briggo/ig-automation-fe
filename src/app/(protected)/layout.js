"use client";

import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/SideNav";
import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

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
      }
    })();
  }, [router]);

  return (
    <div className={`flex w-full min-h-screen`}>
      <div className="flex relative flex-col w-full text-gray-900 bg-gray-50 md:flex-row dark:bg-gray-950 dark:text-gray-100">
        <Sidebar open={open} setOpen={setOpen} />
        <div
          className={`w-full overflow-auto px-8 py-4 right-0 mx-0 mt-0 mb-0 md:my-2 z-0 fixed rounded-b-2xl bottom-[68px] md:bottom-[unset] rounded-t-none md:rounded-2xl  h-[calc(100dvh-58px)] md:h-[calc(100dvh-20px)] box-border bg-[#F1F1F1] border border-line-dark! ${
            open ? "md:w-[calc(100vw-272px)]" : "md:w-[calc(100vw-75px)]"
          }`}
        >
          {children}
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
