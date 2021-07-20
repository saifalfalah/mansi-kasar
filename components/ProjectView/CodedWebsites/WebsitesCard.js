import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const WebsitesCard = (props) => {
  return (
    <div className="flex flex-col justify-between max-w-4xl font-poppins lg:flex-row">
      <div className="max-w-sm max-h-56">
        <Image
          src={props.thumbnailSrc}
          width="464"
          height="236"
          alt={props.title}
          className="rounded-3xl"
        />
      </div>
      <div className="max-w-sm space-y-3 lg:ml-9 xl:ml-0">
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
