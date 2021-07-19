import Meta from "../../components/Layout/Meta";
import ProjectLayout from "../../components/Layout/ProjectLayout";
import ProjectList from "../../components/ProjectView/AllProj";
import SideNav from "../../components/ProjectView/SideNav";
const project = () => {
  return (
    // lg:pl-36 lg:pr-16 1xl:max-w-projectRoute
    <ProjectLayout title="Mansi K. | Projects">
      <ProjectList />
    </ProjectLayout>
  );
};

export default project;
