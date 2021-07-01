import HeroSection from "../components/HomePage/heroSection";
import IconsComp from "../components/HomePage/IconsComp";
import Meta from "../components/Layout/Meta";
const index = () => {
  return (
    <div className="h-screen lg:pl-40 lg:pr-16">
      <Meta title="Mansi K. | Home" desc="Mani K UI/UX Portfolio" />
      <HeroSection />
      <IconsComp />
    </div>
  );
};

export default index;
