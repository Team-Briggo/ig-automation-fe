import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 px-6 mt-auto space-y-10 border-gray-300 border-none sm:px-12 bg-pepper">
      <div className="flex flex-wrap gap-10 sm:flex-nowrap">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-lg font-semibold text-salt">
            Commit to Collaboration
          </p>
          <p className="text-xs sm:text-sm text-salt">
            At Briggo, we believe that meaningful growth happens when brands and
            creators come together with shared purpose. Collaboration is more
            than just working together—it’s about building trust, unlocking
            creativity, and creating stories that resonate. That’s why
            collaboration isn’t just a part of what we do, it’s the heart of our
            mission.
          </p>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p className="text-lg font-semibold text-salt">About Briggo</p>
          <p className="text-xs sm:text-sm text-salt">
            Founded in 2025, Briggo is created to redefine how brands and
            creators work together. We provide a trusted platform where brands
            can discover the right voices to represent them, while creators gain
            opportunities to showcase their talent, grow their audience, and
            earn fairly for their craft
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-between items-center w-full sm:flex-row">
        <div className="flex gap-3 items-center text-sm text-salt">
          <Link href="/privacy">Privacy</Link>
          <span className="text-sm text-salt/50">|</span>
          <Link href="/tnc">Terms</Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="https://www.instagram.com/briggo.in/">
            <FaInstagram size={24} className="cursor-pointer text-salt" />
          </Link>
          <Link href="https://www.youtube.com/@BriggoSocial">
            <FaYoutube size={24} className="cursor-pointer text-salt" />
          </Link>
          <Link
            href="mailto:briggo.social@gmail.com"
            className="cursor-pointer text-salt"
          >
            <BiLogoGmail size={24} />
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center flex justify-between items-center flex-col gap-4">
        <img
          src={"/lightLogo.png"}
          alt="Card Preview"
          className="object-contain max-w-full h-16 sm:h-48"
        />
        <div className="flex gap-2 items-center">
          <p className="m-0 text-sm text-salt">© 2025 Briggo</p>
          <span className="text-sm text-salt/50">|</span>
          <p className="m-0 text-sm text-salt">#MadeInIndia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
