import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import DesignCard from "../../../components/ProjectView/UiUxDesign/DesignCard";
import { uiuxDesignList } from "../../../data/uiuxDesign.data";
const uiuxDesigns = ({ data }) => {
  return (
    <ProjectListLayout title="UI/UX Case Studies">
      <div className="flex flex-col items-center space-y-20 lg:items-stretch lg:flex-col lg:space-y-28">
        {data.map((items, index) => (
          <DesignCard key={index} {...items} />
        ))}
      </div>
    </ProjectListLayout>
  );
};

export default uiuxDesigns;
export const getStaticProps = async (context) => {
  return {
    props: {
      data: uiuxDesignList,
    },
    revalidate: 10,
  };
};
