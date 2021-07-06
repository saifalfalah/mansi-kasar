import Image from "next/image";
const IconsComp = () => {
  return (
    <div className="w-full h-auto mt-16 space-y-2 md:mt-32">
      <h1 className="font-medium text-center font-poppins lg:text-lg ">
        My Skills
      </h1>
      <div className="flex flex-wrap justify-center ">
        <Image
          src="/assets/skills-icons/ai.png"
          width="59"
          height="59"
          alt="Adobe Ai Logo"
        />

        <Image
          src="/assets/skills-icons/ps.png"
          width="59"
          height="57"
          alt="Adobe PS Logo"
        />
        <Image
          src="/assets/skills-icons/figma.png"
          width="59"
          height="57"
          alt="Figma Logo"
        />
        <Image
          src="/assets/skills-icons/xd.png"
          width="59"
          height="57"
          alt="Adobe XD Logo"
        />
        <Image
          src="/assets/skills-icons/html.png"
          width="59"
          height="57"
          alt="HTML Logo"
        />
        <Image
          src="/assets/skills-icons/css.png"
          width="59"
          height="57"
          alt="CSS Logo"
        />
        <Image
          src="/assets/skills-icons/angular.png"
          width="59"
          height="57"
          alt="Angular Logo"
        />
        <Image
          src="/assets/skills-icons/node.png"
          width="59"
          height="57"
          alt="Node Logo"
        />
      </div>
    </div>
  );
};

export default IconsComp;
