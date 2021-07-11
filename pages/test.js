import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

const test = () => {
  return (
    <div className="p-4 lg:px-20 lg:mt-32 lg:mb-12">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl="/test.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default test;
