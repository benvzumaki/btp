import dynamic from "next/dynamic";
const DocPdfWithNoSrr = dynamic(() => import("../../components/DocPdf"), {
  ssr: false,
});

const ResumeDokument = () => {
  return <DocPdfWithNoSrr />;
};

export default ResumeDokument;
