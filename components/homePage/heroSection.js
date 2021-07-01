import Image from "next/image";
import Link from "next/link";
const heroSection = () => {
  return (
    <div className="flex flex-col p-4 lg:flex-row lg:p-0">
      {/* left */}
      <div className="px-4 pt-2 font-poppins lg:pt-0 lg:w-2/6">
        <p className="mt-4 mb-4 text-xl font-medium lg:text-2xl text-heroP lg:pt-20">
          Hey!
        </p>
        <h1 className="mb-4 text-4xl font-semibold space lg:text-5xl text-heroH ">
          I'm <span className="text-brand">Mansi Kasar</span>, an UI/UX
          Designer.
        </h1>
        <p className="mb-4 text-base font-normal text-heroH lg:mb-32 lg:text-lg">
          UI/UX Designer based in Mumbai, India.
        </p>
        <div className="flex mb-4 space-x-6">
          <button className="flex items-center px-4 py-2 space-x-2 text-white rounded-lg bg-brand">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.598 2L9.345 7.12C9.52813 7.28306 9.76479 7.37316 10.01 7.37316C10.2552 7.37316 10.4919 7.28306 10.675 7.12L16.423 2H3.598ZM18 3.273L12.006 8.614C11.4565 9.10374 10.7461 9.37436 10.01 9.37436C9.27392 9.37436 8.56352 9.10374 8.014 8.614L2 3.254V12H18V3.273ZM2 0H18C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0V0Z"
                fill="white"
              />
            </svg>

            <span className="text-sm font-bold lg:text-base">Mail Me</span>
          </button>
          <button className="flex items-center px-4 py-2 space-x-2 text-black border rounded-lg border-brandOutline">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 20H0V18H14V20ZM7 16L1 10L2.41 8.59L6 12.17V0H8V12.17L11.59 8.59L13 10L7 16Z"
                fill="#2F2F2F"
              />
            </svg>

            <span className="text-sm font-bold lg:text-base">Download CV</span>
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
              <Image
                src="/assets/contact-icons/linkedin.png"
                width="28"
                height="28"
                alt="linkedin logo"
              />
            </a>
          </Link>
          <Link href="https://www.behance.net/mansikasar">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/contact-icons/behance.png"
                width="28"
                height="28"
                alt="linkedin logo"
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/contact-icons/youtube.png"
                width="28"
                height="28"
                alt="linkedin logo"
              />
            </a>
          </Link>
          <Link href="https://l">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/contact-icons/ig.png"
                width="28"
                height="28"
                alt="linkedin logo"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
