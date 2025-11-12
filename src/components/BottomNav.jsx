import { useUser } from "@/contexts/UserContext";
import { getMediaUrl } from "@/utils/getMediaUrl";
import {
  ChevronDown,
  ChevronsRight,
  Home,
  LogOut,
  Workflow,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const pathname = usePathname();

  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    if (pathname !== "") setSelected(pathname);
  }, [pathname]);

  return (
    <nav
      className={`block fixed bottom-0 p-2 w-full bg-transparent transition-all duration-300 ease-in-out md:hidden shrink-0`}
    >
      {/* <TitleSection /> */}

      <div className="flex gap-2 justify-around w-full">
        <Option
          Icon={Home}
          title="/dashboard"
          displayTitle="Dashboard"
          selected={selected}
          setSelected={setSelected}
        />
        <Option
          Icon={Workflow}
          title="/dashboard/automation"
          displayTitle="Automation"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </nav>
  );
};

const Option = ({
  Icon,
  title,
  displayTitle,
  selected,
  setSelected,
  notifs,
}) => {
  const router = useRouter();
  const isSelected = selected === title;

  return (
    <button
      onClick={() => {
        setSelected(title);
        router.push(title);
      }}
      className={`relative flex flex-col h-full w-max items-center rounded-md transition-all duration-200 p-2 ${
        isSelected
          ? "shadow-sm bg-gray-200/50 text-pepper"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900"
      }`}
    >
      <div className="grid place-content-center w-12 h-full">
        <Icon className="w-4 h-4" />
      </div>

      <span className={`text-sm font-medium transition-opacity duration-200`}>
        {displayTitle}
      </span>

      {notifs && (
        <span className="flex absolute right-3 justify-center items-center w-5 h-5 text-xs font-medium text-white bg-blue-500 rounded-full dark:bg-blue-600">
          {notifs}
        </span>
      )}
    </button>
  );
};

const TitleSection = () => {
  const { user, logout } = useUser();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative pb-4 mb-6 border-b border-gray-200 dark:border-gray-800">
      <div
        className="flex justify-between items-center p-2 rounded-md transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
        onClick={() => setOpenModal(!openModal)}
      >
        <div className="flex gap-3 items-center">
          <img
            src={getMediaUrl(user?.instagramDetails?.profilePictureUrl)}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {user?.instagramDetails?.username}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {user?.plan || "Free"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      </div>
      {openModal && (
        <div className="flex absolute right-0 bottom-0 left-0 top-20 z-50 flex-col flex-1 gap-2 p-4 h-full bg-gray-100 rounded-md max-w-52">
          <button
            onClick={logout}
            className="flex gap-2 items-center px-4 py-2 w-full text-sm text-white rounded-md bg-pepper"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
