import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const WebsitesCard = (props) => {
  return (
    <div className="flex flex-col justify-between font-poppins lg:flex-row ">
      <div className="max-w-sm max-h-56">
        <Image
          src={props.thumbnailSrc}
          width="464"
          height="236"
          alt={props.title}
          className="rounded-3xl"
        />
      </div>
      <div className="max-w-xs space-y-3 ">
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {props.title}
        </h1>
        <p className=" lg:text-lg text-expSec">{props.summary}</p>
        <Link href={props.viewLink} passHref>
          <button className="px-4 py-3 text-white bg-brand rounded-3xl ">
            View
          </button>
        </Link>
        <Link href={props.viewLink} passHref>
          <button className="px-4 py-3 bg-white text-exp rounded-3xl ">
            <FaGithub />
            Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WebsitesCard;
