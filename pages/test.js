import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import Image from "next/image";
const test = () => {
  return (
    <div className="">
      <Image
        src="/test.png"
        alt="Picture of the author"
        layout="responsive"
        width={1266}
        height={5500}
        quality={100}
      />
    </div>

    //  <div className="min-h-screen">
    //       {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
    //         <div style={{ height: "750px" }}>
    //           <Viewer fileUrl="/test.pdf" />
    //         </div>
    //       </Worker> */}

    //     </div>
  );
};

export default test;
