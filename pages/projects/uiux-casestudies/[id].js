// import { uiuxCaseList } from "../../../components/data/uiuxCasestudies.data";
import { uiuxCaseList } from "/data/uiuxCasestudies.data";
import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
export const getStaticProps = async ({ params }) => {
  //put the uiuxcaselist as caseLists and filter out the id and makse sure its the parsm.id
  const caseLists = uiuxCaseList.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      //return the id which is the first index(0)
      singleCase: caseLists[0],
    },
  };
};
export const getStaticPaths = async () => {
  const paths = uiuxCaseList.map((singleCase) => ({
    params: { id: singleCase.id.toString() },
  }));
  return { paths, fallback: false };
};

const CaseStudy = ({ singleCase }) => {
  return (
    <ProjectListLayout>
      <h1>{singleCase.id}</h1>
      <h1>{singleCase.title}</h1>
      <h1>{singleCase.summary}</h1>
    </ProjectListLayout>
  );
};

export default CaseStudy;
