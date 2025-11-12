// "use client";

// import SideNav from "@/components/SideNav";
// import { getCurrentUser } from "aws-amplify/auth";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FiArrowLeft } from "react-icons/fi";

// export default function ProtectedLayout({ children }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       try {
//         const user = await getCurrentUser();
//         if (!user) {
//           router.replace("/auth/login");
//           return;
//         }
//       } catch {
//         router.replace("/auth/login");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [router]);

//   return (
//     <div className="flex h-full">
//       <SideNav />
//       {/* <div className="px-6 py-4 w-full">
//         <FiArrowLeft
//           className="w-6 h-6 cursor-pointer"
//           onClick={() => router.back()}
//         />
//       </div> */}
//       {children}
//     </div>
//   );
// }

"use client";

import Sidebar from "@/components/SideNav";

export default function ProtectedLayout({ children }) {
  return (
    <div className={`flex w-full min-h-screen`}>
      <div className="flex w-full text-gray-900 bg-gray-50 dark:bg-gray-950 dark:text-gray-100">
        <Sidebar />
        <div className="overflow-auto px-8 py-4 right-0 mx-0 mt-0 mb-0 md:my-2 z-0 fixed rounded-b-2xl bottom-[78px] md:bottom-[unset] rounded-t-none md:rounded-2xl w-full md:w-[calc(100vw-272px)] h-[calc(100dvh-58px)] md:h-[calc(100dvh-20px)] box-border bg-[#F1F1F1] border border-line-dark!">
          {children}
        </div>
      </div>
    </div>
  );
}
