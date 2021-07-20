import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import DesignCard from "../../../components/ProjectView/UiUxDesign/DesignCard";
import { uiuxDesignList } from "/data/uiuxDesign.data";
const uiuxDesigns = ({ dataDesign }) => {
  // console.log(data);
  return (
    <ProjectListLayout title="UI/UX Case Studies">
      <div className="flex flex-col items-center space-y-20 lg:items-stretch lg:flex-col lg:space-y-28">
        {dataDesign.map((items, index) => (
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
      dataDesign: uiuxDesignList,
    },
    revalidate: 10,
  };
};
