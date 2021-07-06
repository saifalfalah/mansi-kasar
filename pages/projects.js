import Meta from "../components/Layout/Meta";
import ProjectList from "../components/ProjectView/AllProj";
import SideNav from "../components/ProjectView/SideNav";
const project = () => {
  return (
    // lg:pl-36 lg:pr-16 1xl:max-w-projectRoute
    <div className="p-4 lg:px-20 lg:mt-32 lg:mb-12">
      <Meta title="Mansi K. | Projects" desc="Mani K UI/UX Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="w-48 col-span-1 mb-10 lg:mb-0">
          <SideNav />
        </div>
        <div className="col-span-3">
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default project;
