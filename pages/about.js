import AboutMe from "../components/AboutView/AboutMe";
import ExperienceGrid from "../components/AboutView/ExperienceGrid";
import Roles from "../components/AboutView/Roles";
import Skillset from "../components/AboutView/Skillset";
import Meta from "../components/Layout/Meta";

const about = () => {
  return (
    <div className="p-8 lg:p-4 ">
      <Meta title="Mansi K. | About" desc="Mani K UI/UX Portfolio" />
      <AboutMe />
      <ExperienceGrid />
      <div className="grid gap-20 mx-auto mt-20 lg:mt-40 lg:gap-40 grid-col-1 lg:grid-cols-2 lg:max-w-6xl md:max-w-5xl lg:mb-10">
        <Skillset />
        <Roles />
      </div>
    </div>
  );
};

export default about;
