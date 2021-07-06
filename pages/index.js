import HeroSection from "../components/HomeView/HeroComp";
import RecentProj from "../components/HomeView/RecentProj";
import IconsComp from "../components/HomeView/SkillsComp";
import Meta from "../components/Layout/Meta";
const Home = () => {
  return (
    <div className=" lg:pl-36 lg:pr-16">
      <Meta title="Mansi K. | Home" desc="Mani K UI/UX Portfolio" />
      <HeroSection />
      <IconsComp />
      <RecentProj />
    </div>
  );
};

export default Home;
