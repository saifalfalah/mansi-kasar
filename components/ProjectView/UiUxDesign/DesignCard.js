import Image from "next/image";
import Link from "next/link";

const DesignCard = (props) => {
  return (
    <div className="flex flex-col justify-between max-w-4xl font-poppins lg:flex-row ">
      <div className={`max-w-xs space-y-5 ` + props.textCont}>
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {props.title}
        </h1>
        <p className=" lg:text-lg text-expSec">{props.summary}</p>
        <Link
          href={`/projects/uiux-designs/[id]`}
          as={`/projects/uiux-designs/${props.id}`}
          passHref
        >
          <button className="px-4 py-3 text-white bg-brand rounded-3xl ">
            View Design
          </button>
        </Link>
      </div>
      <div className={`max-w-md  max-h-60` + props.imgCont}>
        <Image
          src={props.thumbnailSrc}
          width="464"
          height="236"
          alt={props.title}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default DesignCard;
