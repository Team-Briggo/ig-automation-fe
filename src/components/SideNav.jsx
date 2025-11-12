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
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(pathname);

  return (
    <nav
      className={`sticky top-0 h-screen shrink-0 border-r transition-all duration-300 ease-in-out ${
        open ? "w-64" : "w-20"
      } bg-salt p-2 shadow-sm`}
    >
      <TitleSection open={open} />

      <div className="mb-8 space-y-1">
        <Option
          Icon={Home}
          title="/dashboard"
          displayTitle="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={Workflow}
          title="/dashboard/automation"
          displayTitle="Automation"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </nav>
  );
};

const Option = ({
  Icon,
  title,
  displayTitle,
  selected,
  setSelected,
  open,
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
      className={`relative flex h-11 w-full items-center rounded-md transition-all duration-200 ${
        isSelected
          ? "text-blue-700 bg-blue-50 border-l-2 border-blue-500 shadow-sm dark:bg-blue-900/50 dark:text-blue-300"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
      }`}
    >
      <div className="grid place-content-center w-12 h-full">
        <Icon className="w-4 h-4" />
      </div>

      {open && (
        <span
          className={`text-sm font-medium transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {displayTitle}
        </span>
      )}

      {notifs && open && (
        <span className="flex absolute right-3 justify-center items-center w-5 h-5 text-xs font-medium text-white bg-blue-500 rounded-full dark:bg-blue-600">
          {notifs}
        </span>
      )}
    </button>
  );
};

const TitleSection = ({ open }) => {
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
          {open && (
            <div
              className={`transition-opacity duration-200 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
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
          )}
        </div>
        {open && (
          <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        )}
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

const ToggleClose = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="absolute right-0 bottom-0 left-0 border-t border-gray-200 transition-colors dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      <div className="flex items-center p-3">
        <div className="grid place-content-center size-10">
          <ChevronsRight
            className={`h-4 w-4 transition-transform duration-300 text-gray-500 dark:text-gray-400 ${
              open ? "rotate-180" : ""}`}
          />
        </div>
        {open && (
          <span
            className={`text-sm font-medium text-gray-600 dark:text-gray-300 transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Hide
          </span>
        )}
      </div>
    </button>
  );
};

export default Sidebar;
