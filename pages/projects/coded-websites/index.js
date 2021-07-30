import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import WebsitesCard from "../../../components/ProjectView/CodedWebsites/WebsitesCard";
import { codedWebsiteList } from "../../../components/data/codedWebsite.data";
const codedWebsites = ({ data }) => {
  // console.log(data);
  return (
    <ProjectListLayout title="M K.|Coded Websites">
      <div className="flex flex-col items-center space-y-20 lg:min-h-screen lg:items-stretch lg:flex-col lg:space-y-28">
        {data.map((items, index) => (
          <WebsitesCard key={index} {...items} />
        ))}
      </div>
    </ProjectListLayout>
  );
};

export default codedWebsites;

export const getStaticProps = async (context) => {
  return {
    props: {
      data: codedWebsiteList,
    },
  };
};
