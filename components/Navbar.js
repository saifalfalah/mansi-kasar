import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center">
        <Link href="/">
          <a href="" className="">
            <h1 className="logo">Mansi K.</h1>
          </a>
        </Link>
        <button>
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
      </nav>
    </>
  );
};

export default Navbar;
