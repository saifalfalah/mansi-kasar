import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import CaseStudyCard from "../../../components/ProjectView/UiUxCaseStudy/CaseStudyCard";
import { uiuxCaseList } from "/data/uiuxCasestudies.data";
const uiuxCaseStudies = ({ data }) => {
  // console.log(data);
  return (
    <ProjectListLayout title="UI/UX Case Studies">
      <div className="flex flex-col items-center space-y-20 lg:items-stretch lg:flex-col lg:space-y-28">
        {data.map((items, index) => (
          <CaseStudyCard key={index} {...items} />
        ))}
      </div>
    </ProjectListLayout>
  );
};

export default uiuxCaseStudies;
export const getStaticProps = async (context) => {
  return {
    props: {
      data: uiuxCaseList,
    },
    revalidate: 10,
  };
};
