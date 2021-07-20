// import { uiuxCaseList } from "../../../components/data/uiuxCasestudies.data";
import { uiuxCaseList } from "/data/uiuxCasestudies.data";
import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Image from "next/image";
export const getStaticProps = async ({ params }) => {
  //put the uiuxcaselist as caseLists and filter out the id and makse sure its the parsm.id
  const caseLists = uiuxCaseList.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      //return the id which is the first index(0)
      singleCase: caseLists[0],
    },
    revalidate: 10,
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
      <Image
        src="/test.png"
        alt="Picture of the author"
        layout="responsive"
        width={1266}
        height={5500}
        quality={100}
      />
    </ProjectListLayout>
  );
};

export default CaseStudy;
