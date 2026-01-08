import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";     // ← Correct
import "react-pdf/dist/Page/TextLayer.css";           // ← Correct
import "./cvmodal.css";

// Use stable classic worker (avoids .mjs issues in many setups)
pdfjs.GlobalWorkerOptions.workerSrc = 
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CVModal = ({ isOpen, onClose, cvUrl = "/Majeed_Mehmood_Resume.pdf" }) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error("PDF load error:", err);
    setError("Failed to load CV. Please try downloading directly.");
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h3>Curriculum Vitae</h3>
          <button className="cv-modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="cv-modal-content">
          {error ? (
            <div className="cv-modal-error">
              <p>{error}</p>
              <a href={cvUrl} download="Majeed_Resume.pdf" className="download-fallback-btn">
                Download CV Instead
              </a>
            </div>
          ) : (
            <Document
              file={cvUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="cv-modal-loading">
                  <div className="loader"></div>
                  <p>Loading your CV...</p>
                </div>
              }
            >
              {numPages &&
                Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={Math.min(800, window.innerWidth - 80)}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                    className="cv-pdf-page"
                  />
                ))}
            </Document>
          )}
        </div>

        {/* Safety download button */}
        <div className="cv-modal-footer">
          <a href={cvUrl} download="Majeed_Mehmood_Resume.pdf" className="button button--primary">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;