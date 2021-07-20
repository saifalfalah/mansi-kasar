// import { uiuxCaseList } from "../../../components/data/uiuxCasestudies.data";
import { uiuxDesignList } from "../../../data/uiuxDesign.data";
import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Image from "next/image";
export const getStaticProps = async ({ params }) => {
  //put the uiuxcaselist as caseLists and filter out the id and makse sure its the parsm.id
  const caseLists = uiuxDesignList.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      //return the id which is the first index(0)
      singleDesign: caseLists[0],
    },
    revalidate: 10,
  };
};
export const getStaticPaths = async () => {
  const paths = uiuxDesignList.map((singleDesign) => ({
    params: { id: singleDesign.id.toString() },
  }));
  return { paths, fallback: false };
};

const CaseStudy = ({ singleDesign }) => {
  return (
    <ProjectListLayout>
      <h1 className="text-xl font-medium text-exp lg:text-3xl">
        {singleDesign.title}
      </h1>
      <Image
        src={singleDesign.contentSrc}
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
