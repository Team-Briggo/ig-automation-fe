import Link from "next/link";

const Header = () => {
  return (
    <header className="p-6 w-full border border-b">
      <div className="flex justify-between items-center w-full">
        <img
          src={"/logo.png"}
          alt="Card Preview"
          className="object-contain max-w-full h-8"
        />

        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/dashboard" className="text-black no-underline">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
