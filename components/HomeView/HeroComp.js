import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
const heroSection = () => {
  return (
    <div className="flex flex-col p-4 lg:flex-row lg:p-0">
      {/* left */}
      <div className="px-4 pt-2 font-poppins lg:pt-0 lg:w-2/6">
        <p className="mt-4 mb-4 text-xl font-medium lg:text-2xl text-heroP lg:pt-20">
          Hey!
        </p>
        <h1 className="mb-4 text-4xl font-semibold space lg:text-5xl text-heroH ">
          I&#39;m <span className="text-brand">Mansi Kasar</span>, an UI/UX
          Designer.
        </h1>
        <p className="mb-4 text-base font-normal text-heroH lg:mb-32 lg:text-lg">
          UI/UX Designer based in Mumbai, India.
        </p>
        <div className="flex mb-4 space-x-6">
          <button className="flex items-center px-4 py-2 space-x-2 text-white rounded-lg bg-brand">
            <FaRegEnvelope className="text-xl" />

            <span className="text-sm font-bold lg:text-base">Mail Me</span>
          </button>
          <button className="flex items-center px-4 py-2 space-x-2 border rounded-lg text-heroH border-brandOutline">
            <FiDownload className="text-xl" />
            <span className="text-sm font-bold lg:text-base ">Download CV</span>
          </button>
        </div>
      </div>
      {/* middle */}
      <div className="order-first px-4 pt-2 lg:order-none lg:mt-11 lg:w-3/6">
        <div className="w-full">
          <Image
            src="/assets/heroImg.png"
            width="583"
            height="554.46px"
            alt="Picture of Mansi"
          />
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:ml-auto lg:w-1/6">
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
        <div className="lg:flex lg:flex-col lg:h-72 lg:justify-between">
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
  );
};

export default heroSection;
