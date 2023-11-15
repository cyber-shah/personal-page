import React from "react";
import pdfFile from './PranchalShah_Resume.pdf';

const Resume = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <object
        data={pdfFile}
        type="application/pdf"
        style={{ width: '100%', maxWidth: '1200px', height: '100%' }}
      >
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it:
          <a href={pdfFile}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
};

export default Resume;