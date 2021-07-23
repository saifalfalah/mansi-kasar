import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="h-auto px-20 pt-20 pb-10 text-white bg-black lg:h-80 text lg:pt-24 lg:pr-52 lg: lg:pl-48">
        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-9 ">
          <div className="flex flex-col">
            <h1 className="mb-3 text-sm font-bold text-white font-cardo ">
              Mansi K.
            </h1>
            <div className="text-xs font-normal lg:text-sm font-roboto ">
              <p className="mb-1 ">© 2010 — 2020</p>
              <p className="">Privacy — Terms</p>
            </div>
          </div>
          <div className="flex flex-col font-roboto">
            <h1 className="mb-3 text-sm font-bold ">Latest Blog Post</h1>
            <div className="text-xs font-normal lg:text-sm ">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex flex-col font-roboto">
            <h1 className="mb-3 text-sm font-bold">Socials</h1>
            <Link href="/">
              <a className="mb-1 text-xs font-normal lg:text-sm">Instagram</a>
            </Link>
            <Link href="/">
              <a className="mb-1 text-xs font-normal lg:text-sm">Behance</a>
            </Link>
            <Link href="/">
              <a className="mb-1 text-xs font-normal lg:text-sm">LinkedIn</a>
            </Link>
            <Link href="/">
              <a className="text-xs font-normal lg:text-sm">Youtube</a>
            </Link>
          </div>
          <div className="">
            <h1 className="mb-3 text-sm font-bold font-roboto">Contact</h1>
            <button className="w-20 p-3 font-bold text-black bg-white rounded-md text-xss font-poppins">
              Mail me
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
