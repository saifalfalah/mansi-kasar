import Image from "next/image";
import Link from "next/link";

const DesignCard = (props) => {
  return (
    <div className="flex flex-col justify-between max-w-4xl lg:gap-3 xl:gap-0 font-poppins lg:flex-row ">
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
          alt={props.title}
          width={720}
          height={576}
          className="rounded-3xl"
          quality="100"

          // width="464"
          // height="236"

          // className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default DesignCard;
