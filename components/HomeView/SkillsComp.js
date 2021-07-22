import Image from "next/image";
const IconsComp = () => {
  return (
    <div className="flex flex-col mx-auto mt-16 md:mt-32">
      <h1 className="mx-auto font-medium font-poppins lg:text-lg">My Skills</h1>
      <div className="flex flex-wrap justify-center max-w-xs gap-5 mx-auto md:max-w-xl md:gap-8 lg:max-w-3xl mt-7 lg:mt-9">
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/ai.png"
            alt="Adobe Ai Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/ps.png"
            alt="Adobe Ps Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/figma.png"
            alt="Figma Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/xd.png"
            alt="Adobe XD Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/html.png"
            alt="Html Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/css.png"
            alt="Css Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/angular.png"
            alt="Angular Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-10 h-10 lg:w-14 lg:h-14">
          <Image
            src="/assets/skills-icons/node.png"
            alt="Node Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IconsComp;
