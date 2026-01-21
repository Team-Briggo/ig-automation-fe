import { MapIcon } from "lucide-react";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const contactMethods = [
    {
      icon: <MdEmail />,
      title: "Email",
      desc: "We appreciate your interest in Briggo and look forward to assisting you!",
      link: {
        name: "Mail us at",
        href: "mailto:support@briggo.in",
      },
    },

    {
      icon: <MapIcon />,

      title: "Address",
      desc: "Near Canal Road, Magob, Surat, Gujarat, Pin: 395010",
    },
  ];

  return (
    <section className="py-4">
      <div className="gap-12 px-4 mx-auto max-w-screen-xl text-gray-600 md:px-8 lg:flex">
        <div className="max-w-md">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Contact Us
          </h3>
          <p className="mt-3">
            We’re here to help and answer any question you might have, We look
            forward to hearing from you .
          </p>
        </div>
        <div>
          <ul className="gap-y-6 gap-x-12 items-center mt-12 md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="py-6 space-y-3 border-t md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <div className="flex justify-center items-center w-12 h-12 text-gray-700 rounded-full border">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-gray-800 xl:text-xl">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                {!!item.link && (
                  <a
                    href={item.link.href}
                    className="flex gap-1 items-center text-sm font-medium text-indigo-600 duration-150 hover:text-indigo-400"
                  >
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
