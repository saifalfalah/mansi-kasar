import Image from "next/image";
import Link from "next/link";

// import ui from "..."
const Roles = () => {
  const roleItems = [
    {
      imgSrc: "/assets/about-icons/ui.svg",
      imgAlt: "UI Logo",
      name: "UI/UX Designer",
    },
    {
      imgSrc: "/assets/about-icons/webDev.svg",

      imgAlt: "Computer Icon",
      name: "Web Developer",
    },
    {
      imgSrc: "/assets/about-icons/webDesigner.svg",
      imgAlt: "Apps Logo",
      name: "Web & App Designer",
    },
  ];

  return (
    <div className="flex flex-col justify-between max-w-xs md:max-w-md font-poppins text-heroH">
      <h1 className="mb-8 text-3xl font-semibold lg:mb-10 lg:text-5xl">
        Roles <br /> I&apos;ve worked as
      </h1>
      <ul className="lg:space-y-12">
        {roleItems.map((item, index) => (
          <li key={index} className="flex items-center lg:space-x-8 ">
            <div className="relative w-16 h-16">
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                layout="fill"
                objectFit="cover" // contain
                className=""
              />
            </div>
            <h1 className="text-xl font-normal lg:text-2xl"> {item.name}</h1>
          </li>
        ))}
      </ul>
      <Link href="/projects" passHref>
        <button className="flex items-center justify-between p-8 mt-4 text-white bg-black lg:mt-0 rounded-2xl">
          <h1 className="text-4xl font-semibold w-60">
            Want to see my projects?
          </h1>
          <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 24.009L46 24.009"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.75 2L46 24.0093L26.75 46.0186"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Roles;
