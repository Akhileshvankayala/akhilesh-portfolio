import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfViewerProps {
  file: string;
  name: string;
}

export function PdfViewer({ file, name }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden bg-white/5">
      {inView ? (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="max-w-full max-h-full flex justify-center items-center"
          loading={<div className="text-white">Loading PDF...</div>}
        >
          <Page 
            pageNumber={1} 
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="max-w-full max-h-full"
            width={300} // Set a fixed width to ensure it fits in the carousel nicely on mobile
          />
        </Document>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
}
