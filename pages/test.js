import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

const test = () => {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl="/test.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default test;
