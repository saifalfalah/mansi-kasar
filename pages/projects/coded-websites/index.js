import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import { codedWebsiteList } from "/data/codedWebsite.data";
const codedWebsites = ({ data }) => {
  console.log(data);
  return <ProjectListLayout title="M K.|Coded Websites"></ProjectListLayout>;
};

export default codedWebsites;

export const getStaticProps = async (context) => {
  return {
    props: {
      data: codedWebsiteList,
    },
  };
};
