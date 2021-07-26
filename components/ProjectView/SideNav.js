import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

const SideNav = () => {
  const sideNavItems = [
    {
      name: "UI/UX Case Stuides",
      path: "/projects/uiux-casestudies",
    },
    {
      name: "UI/UX Designs",
      path: "/projects/uiux-designs",
    },
    {
      name: "Coded websites",
      path: "/projects/coded-websites",
    },
    {
      name: "Logo & Graphic Design ",
      path: "/projects/logo-graphic-design",
    },
  ];
  const router = useRouter();
  return (
    <div className="w-48 font-poppins text-heroH">
      <div className="hidden mb-6 text-xl font-normal tracking-wider uppercase lg:block ">
        <h1 className="">Mansi</h1>
        <h1 className="">Kasar.</h1>
      </div>
      <ul className="items-center hidden space-x-4 lg:flex mb-28">
        <li className="">
          <Link href="https://www.behance.net/mansikasar">
            <a target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-lg text-black" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184/">
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg text-black" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/man.si.my.art/">
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg text-black" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
            <a target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-lg text-heroH" />
            </a>
          </Link>
        </li>
      </ul>
      <div>
        <Link href="/projects">
          <a
            className={`${
              router.pathname === "/projects" ? "text-brand" : "text-heroH "
            }`}
          >
            <h1 className="mb-6 font-bold popp">Projects</h1>
          </a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
        {sideNavItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <a
              className={`${
                router.pathname.startsWith(item.path)
                  ? "text-brand"
                  : "text-heroH "
              }`}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
