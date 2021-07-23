import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Image from "next/image";
import { uiuxDesignList } from "../../../components/data/uiuxDesign.data";

export const getStaticProps = async ({ params }) => {
  //put the uiuxDesignList as caseLists and filter out the id and makse sure its the parsm.id
  const designLists = uiuxDesignList.filter(
    (p) => p.id.toString() === params.id
  );

  return {
    props: {
      //return the id which is the first index(0)
      singleDesign: designLists[0],
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

const Design = ({ singleDesign }) => {
  console.log(singleDesign.title);
  return (
    <ProjectListLayout>
      <h1 className="text-xl font-medium text-exp lg:text-3xl">
        {singleDesign.title}
      </h1>
      <Image
        src={singleDesign.contentSrc}
        alt="Picture of the author"
        layout="responsive"
        width={1266}
        height={5500}
        quality={100}
      />
      <div className=" aspect-w-16 aspect-h-16 md:aspect-h-14 lg:aspect-h-9">
        <iframe
          className="absolute inset-0 w-full h-full overflow-hidden"
          src={singleDesign.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </ProjectListLayout>
  );
};

export default Design;
