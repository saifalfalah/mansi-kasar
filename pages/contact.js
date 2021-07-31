import Meta from "../components/Layout/Meta";
import {
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import Link from "next/link";
const contact = () => {
  return (
    <div className="p-8 lg:p-4 ">
      <Meta title="Mansi K. | About" desc="Mani K UI/UX Portfolio" />
      <div className="flex flex-col items-center mb-6 lg:mb-11 font-poppins">
        <div className="flex flex-col items-center ">
          <h1 className="mb-4 text-3xl font-semibold lg:mb-10 text-heroH lg:text-5xl">
            Contact <span className="text-brand">Me</span>
          </h1>
          <p className="text-xl text-center text-heroP lg:max-w-5xl lg:text-2xl ">
            Feel free to reach out to me.
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <svg
            className="mt-16 mb-7"
            width="1"
            height="209"
            viewBox="0 0 1 209"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="209"
              x2="0.499991"
              y2="2.18557e-08"
              stroke="black"
            />
          </svg>
          <div className="flex flex-col justify-between h-72">
            <Link href="mailto:mansikasar5@gmail.com">
              <a target="_blank" rel="noopener noreferrer">
                <FaRegEnvelope className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184/">
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.behance.net/mansikasar">
              <a target="_blank" rel="noopener noreferrer">
                <FaBehance className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
              <a target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/man.si.my.art/">
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-heroH" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
