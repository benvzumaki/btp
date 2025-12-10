import React from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import DocPdf, { Pdf } from "./DocPdf";

const DownloadPdf = () => {
  return (
    <PDFDownloadLink
      className="text-2xl bg-transparent border-2 border-my-black dark:border-white hover:border-my-primary dark:hover:border-my-primary hover:text-my-primary px-4 py-2 rounded-3xl transition-all duration-500 ease-out"
      document={<Pdf />}
      fileName="andri-resume.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading
          ? "Loading document..."
          : "Resume"
      }
    </PDFDownloadLink>
  );
};

export default DownloadPdf;
