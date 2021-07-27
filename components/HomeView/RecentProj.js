import Link from "next/link";
import Card from "../Reusable Comp/Card";

const RecentProj = () => {
  const projectData = [
    {
      title: "noQ",
      caseLink: "/projects/uiux-casestudies/0",
      liveLink:
        "https://www.behance.net/gallery/124166733/Case-Study-noQ-Virtual-Slot-booking-avoid-crowd",
      imgSrc: "/assets/all-projects/uixCaseStudy/1.png",
    },
    {
      title: "proj.co",
      caseLink: "/projects/uiux-casestudies/1",
      liveLink:
        "https://www.behance.net/gallery/123553665/Case-Study-Project-Collaboration-Website",
      imgSrc: "/assets/all-projects/uixCaseStudy/2.png",
    },
    {
      title: "Art Venture",
      caseLink: "/projects/uiux-designs/0",
      liveLink:
        "https://www.behance.net/gallery/123976803/ART-VENTURE-Unique-art-collection-%28UIUX%29",
      imgSrc: "/assets/all-projects/uiuxDesign/1.png",
    },
    {
      title: "College Fynd",
      caseLink: "/projects/uiux-designs/1",
      liveLink:
        "https://www.behance.net/gallery/123945887/CollegeFynd-Discover-your-perfect-college-and-course",
      imgSrc: "/assets/all-projects/uiuxDesign/2.png",
    },
  ];
  return (
    <div className="p-4 mt-16 mb-10 lg:mt-32 text-navItems">
      <div className="flex items-center mb-10 lg:h-16 lg:mb-16">
        <h1 className="text-4xl font-semibold font-poppins lg:text-5xl ">
          Recent Projects
        </h1>
        <button className="flex items-center px-4 py-2 ml-auto space-x-2 text-white rounded-lg bg-brand">
          <Link href="/projects" passHref>
            <span className="text-sm font-bold lg:text-base">View More</span>
          </Link>
        </button>
      </div>
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

export default RecentProj;
