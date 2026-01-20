// "use client";

// import BottomNav from "@/components/BottomNav";
// import Sidebar from "@/components/SideNav";
// import { useUser } from "@/contexts/UserContext";
// import { getMediaUrl } from "@/utils/getMediaUrl";
// import { getCurrentUser } from "aws-amplify/auth";
// import { LogOut } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const protectedRoutes = {
//   "/dashboard": "Dashboard",
//   "/dashboard/automation": "Automation",
//   "/dashboard/automation/create": "Automation",
// };

// const TitleSection = () => {
//   const { user, logout } = useUser();
//   const [openModal, setOpenModal] = useState(false);

//   return (
//     <div className="block md:hidden">
//       <div
//         className="flex justify-between items-center rounded-md transition-colors cursor-pointer hover:bg-gray-50"
//         onClick={() => setOpenModal(!openModal)}
//       >
//         <div className="flex gap-3 items-center">
//           <img
//             src={getMediaUrl(user?.instagramDetails?.profilePictureUrl)}
//             alt=""
//             className="w-10 h-10 rounded-lg"
//           />
//         </div>
//       </div>
//       {openModal && (
//         <div className="flex absolute bottom-0 right-6 top-20 z-50 flex-col flex-1 gap-2 p-4 bg-gray-300 rounded-md h-max left-30 max-w-52">
//           <button
//             onClick={logout}
//             className="flex gap-2 items-center px-4 py-2 w-full text-sm text-white rounded-md bg-pepper"
//           >
//             <LogOut className="w-4 h-4" /> Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default function ProtectedLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [open, setOpen] = useState(true);

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
//       }
//     })();
//   }, [router]);

//   return (
//     <div className={`flex w-full min-h-screen`}>
//       <div className="flex relative flex-col w-full text-gray-900 bg-gray-50 md:flex-row dark:bg-gray-950 dark:text-gray-100">
//         <Sidebar open={open} setOpen={setOpen} />
//         <div
//           className={`w-full overflow-auto p-4 right-0 mx-0 mt-0 mb-0 md:my-2 z-0 fixed rounded-b-2xl bottom-[68px] md:bottom-[unset] rounded-t-none md:rounded-2xl  h-[calc(100dvh-58px)] md:h-[calc(100dvh-20px)] box-border bg-[#F1F1F1] border border-line-dark! ${
//             open ? "md:w-[calc(100vw-272px)]" : "md:w-[calc(100vw-75px)]"
//           }`}
//         >
//           <div className="flex gap-4 justify-between items-center py-2 mb-2 border-b border-line-dark">
//             {protectedRoutes[pathname]}
//             <TitleSection />
//           </div>
//           {children}
//         </div>
//         <BottomNav />
//       </div>
//     </div>
//   );
// }
