import Card from "../Reusable Comp/projectCard";

const AllProj = () => {
  const projectData = [
    {
      title: "Coded Websites",
      projLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      imgSrc: "/assets/all-projects/1.png",
    },
    {
      title: "UI/UX Case Studies",
      projLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      imgSrc: "/assets/all-projects/2.png",
    },
    {
      title: "UI/UX Designs",
      projLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      imgSrc: "/assets/all-projects/3.png",
    },
    {
      title: "Logo & Graphic Desgin",
      projLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      imgSrc: "/assets/all-projects/4.png",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7 md:gap-x-2 lg:gap-x-6 ">
        {projectData.map((proj, index) => (
          <Card
            key={index}
            title={proj.title}
            projLink={proj.projLink}
            imgSrc={proj.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProj;
