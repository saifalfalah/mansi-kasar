import Link from "next/link";
const Footer = () => {
  return (
    <>
      {/* <footer className="h-auto px-20 pt-20 pb-10 text-white bg-black lg:items-center lg:h-80 text lg:pt-24 lg:px-24 lg: "> */}
      <footer className="flex items-center justify-center h-auto py-10 text-white bg-black ">
        {/* main grid */}
        <div className="grid grid-cols-1 gap-6 lg:gap-72 lg:grid-cols-3 ">
          <div className="flex flex-col">
            <h1 className="mb-3 text-sm font-bold text-white font-cardo ">
              Mansi K.
            </h1>
            <div className="text-xs font-normal lg:text-sm font-roboto ">
              <p className="">UI/UX Designer</p>
            </div>
            <div className="mt-4">
              <Link href="https://drive.google.com/file/d/14HPvVyy-DY3KS4Fd3KUORTcAVOgYuqjF/view?usp=sharing">
                <a className="px-5 py-4 font-bold text-black bg-white rounded-md w-28 text-xss font-poppins">
                  Download Resume
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col font-roboto">
            <h1 className="mb-3 text-sm font-bold">Socials</h1>
            <Link href="https://www.instagram.com/man.si.my.art/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mb-1 text-xs font-normal lg:text-sm"
              >
                Instagram
              </a>
            </Link>
            <Link href="https://www.behance.net/mansikasar">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mb-1 text-xs font-normal lg:text-sm"
              >
                Behance
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mb-1 text-xs font-normal lg:text-sm"
              >
                LinkedIn
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-normal lg:text-sm"
              >
                Youtube
              </a>
            </Link>
            <Link href="https://medium.com/@mansikasar">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-normal lg:text-sm"
              >
                Blog
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 text-sm font-bold font-roboto">Contact</h1>
            <Link href="mailto:mansikasar5@gmail.com">
              <a className="px-5 py-4 font-bold text-black bg-white rounded-md w-28 text-xss font-poppins">
                Mail me
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
