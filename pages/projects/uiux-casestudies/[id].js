// import { uiuxCaseList } from "../../../components/data/uiuxCasestudies.data";
import { uiuxCaseList } from "../../../components/data/uiuxCasestudies.data";

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
      <h1 className="text-xl font-medium text-exp lg:text-3xl">
        {singleCase.title}
      </h1>
      <Image
        src={singleCase.contentSrc}
        alt="Picture of the author"
        layout="responsive"
        width={200}
        height={200}
        quality={100}
      />
    </ProjectListLayout>
  );
};

export default CaseStudy;
