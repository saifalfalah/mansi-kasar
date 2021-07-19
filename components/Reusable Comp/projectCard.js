// card comp without view case study and live preview
import Image from "next/image";
import Link from "next/link";
const projectCard = (props) => {
  return (
    <div className="flex flex-col space-y-3 max-w-card font-poppins">
      <div className="">
        <Link href={props.projLink} passHref>
          <a>
            <Image
              src={props.imgSrc}
              width="540"
              height="489"
              alt="Picture of dog"
              className="rounded-3xl"
            />
          </a>
        </Link>
      </div>
      <h1 className="text-lg font-semibold text-card md:text-2xl ">
        {props.title}
      </h1>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <p className="font-medium">
            <Link href={props.projLink}>
              <a>View Project</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
