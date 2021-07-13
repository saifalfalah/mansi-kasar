import AboutMe from "../components/AboutView/AboutMe";
import Roles from "../components/AboutView/Roles";
import Skillset from "../components/AboutView/Skillset";
import Meta from "../components/Layout/Meta";

const about = () => {
  return (
    <div className="p-8 ">
      <Meta title="Mansi K. | About" desc="Mani K UI/UX Portfolio" />
      <AboutMe />
      <div className="grid gap-20 mx-auto lg:gap-40 grid-col-1 lg:grid-cols-2 lg:max-w-6xl md:max-w-5xl lg:mb-10">
        <Skillset />
        <Roles />
      </div>
    </div>
  );
};

export default about;
