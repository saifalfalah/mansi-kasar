import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import CaseStudyCard from "../../../components/ProjectView/UiUxCaseStudy/CaseStudyCard";

const uiuxCaseStudies = () => {
  return (
    <ProjectListLayout title="UI/UX Case Studies">
      <div className="flex flex-col items-center space-y-20 lg:items-stretch lg:flex-col lg:space-y-28">
        <CaseStudyCard />
        <CaseStudyCard />
        <CaseStudyCard />
      </div>
    </ProjectListLayout>
  );
};

export default uiuxCaseStudies;
