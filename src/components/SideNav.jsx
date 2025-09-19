import Link from "next/link";

const SideNav = () => {
  return (
    <div className="flex fixed left-4 flex-col gap-3 p-2 px-6 h-96 rounded-lg shadow-sm bg-salt max-w-40 top-[25%] border border-pepper/5">
      <img
        src={"/logo.png"}
        alt="Card Preview"
        className="object-contain max-w-full h-8"
      />
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/dashboard" className="text-black no-underline">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
