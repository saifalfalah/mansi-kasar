import Card from "../Reusable Comp/Card";

const AllProj = () => {
  const projectData = [
    {
      title: "Test1",
      caseLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      liveLink: "https://www.behance.net/mansikasar",
      imgSrc: "/assets/recent-projects/1.jpg",
    },
    {
      title: "Test2",
      caseLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      liveLink: "https://www.behance.net/mansikasar",
      imgSrc: "/assets/recent-projects/2.jpg",
    },
    {
      title: "Test3",
      caseLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      liveLink: "https://www.behance.net/mansikasar",
      imgSrc: "/assets/recent-projects/3.jpg",
    },
    {
      title: "Test4",
      caseLink: "https://www.linkedin.com/in/mansi-kasar-363b19184/",
      liveLink: "https://www.behance.net/mansikasar",
      imgSrc: "/assets/recent-projects/4.jpg",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7 md:gap-x-2 lg:gap-x-3 xl:gap-x-1 ">
        {projectData.map((proj, index) => (
          <Card
            key={index}
            title={proj.title}
            caseLink={proj.caseLink}
            liveLink={proj.liveLink}
            imgSrc={proj.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProj;
