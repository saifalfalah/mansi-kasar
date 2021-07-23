import SideNav from "../ProjectView/SideNav";
import Meta from "./Meta";

const ProjectLayout = (props) => {
  return (
    <div className="p-4 xl:pl-36 xl:pr-16 lg:mt-32 lg:mb-12">
      <Meta title={props.title} />
      <div className="grid grid-cols-1 md:grid-cols-4 ">
        <div className="w-48 col-span-1 mb-10 lg:mb-0">
          <SideNav />
        </div>
        <div className="col-span-3">{props.children}</div>
      </div>
    </div>
  );
};

export default ProjectLayout;
