import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const WebsitesCard = (props) => {
  return (
    <div className="flex flex-col justify-between max-w-4xl mb-20 lg:gap-3 xl:gap-0 font-poppins lg:flex-row ">
      <div className={`max-w-md  max-h-60` + props.imgCont}>
        <Image
          src={props.thumbnailSrc}
          alt={props.title}
          // width="464"
          // height="236"
          // className="rounded-3xl"
          width={720}
          height={576}
          className="rounded-3xl"
          quality="100"
        />
      </div>
      <div className={`max-w-xs space-y-5 `}>
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {props.title}
        </h1>
        <p className=" lg:text-lg text-expSec">{props.summary}</p>
        <div className="flex flex-col justify-center space-y-3 ">
          <Link href={props.viewLink} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 px-4 py-3 text-center text-white bg-brand rounded-3xl "
            >
              View
            </a>
          </Link>
          <Link href={props.viewLink} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-3 bg-white shadow-xl w-52 text-exp rounded-3xl "
            >
              <FaGithub className="mr-3 text-xl" />
              Code on Github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebsitesCard;
