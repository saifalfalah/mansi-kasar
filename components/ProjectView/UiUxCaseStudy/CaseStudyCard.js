import Image from "next/image";
import Link from "next/link";
const CaseStudyCard = (props) => {
  return (
    <div className="flex flex-col justify-between max-w-4xl font-poppins lg:flex-row ">
      <div className="order-2 max-w-xs space-y-5 lg:order-none ">
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {props.title}
        </h1>
        <p className=" lg:text-lg text-expSec">{props.summary}</p>
        <Link
          href={`/projects/uiux-casestudies/[id]`}
          as={`/projects/uiux-casestudies/${props.id}`}
          passHref
        >
          <button className="px-4 py-3 text-white bg-brand rounded-3xl ">
            Read Case Study
          </button>
        </Link>
      </div>
      <div className="order-1 h-auto max-w-md lg:order-none">
        <Image
          src={props.thumbnailSrc}
          alt={props.title}
          width="464"
          height="236"
          className="rounded-3xl"
          quality="100"
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;
