import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  // states for open/closed mobile nav
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // router for active navitem
  const router = useRouter();

  return (
    <>
      {/* mobile first */}
      <nav className="flex flex-wrap items-center lg:px-20 lg:pt-16">
        <Link href="/">
          <a className="items-center p-2 mr-4">
            <h1 className="text-xl font-bold text-navItems font-badScript font-cursive">
              Mansi K.
            </h1>
          </a>
        </Link>
        <button className="p-2 ml-auto lg:hidden " onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* wider size screens */}
        {/* ternary operator to show or hide menu */}
        <div
          className={`${open ? "" : "hidden"}
         w-full lg:flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex flex-col items-start w-full lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            {/* <div className={router.pathname == "/" ? "text-brand" : ""}> */}
            <Link href="/">
              <a className="items-center w-full p-2 mr-4 font-medium rounded font-poppins text-navItems lg:w-auto ">
                Home
              </a>
            </Link>
            {/* </div> */}
            <Link href="/">
              <a className="items-center justify-center w-full p-2 mr-4 font-medium rounded font-poppins text-navItems lg:w-auto">
                About
              </a>
            </Link>
            <Link href="/projects">
              <a className="items-center justify-center w-full p-2 mr-4 font-medium rounded font-poppins text-navItems lg:w-auto">
                Project
              </a>
            </Link>
            <Link href="/">
              <a className="items-center justify-center w-full p-2 mr-4 font-medium rounded font-poppins text-navItems lg:w-auto">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
