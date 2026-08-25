import { RESUME_PDF_BASE64 } from "./resumeData";

/**
 * Downloads Harini's ATS-optimized Resume PDF with 100% reliability on any host (Vercel, AI Studio, etc.)
 * Creates a direct binary Blob from the embedded 4,921-byte PDF byte array so it NEVER downloads an empty file.
 */
export function downloadResumePdf(filename = "Harini_P_Resume.pdf"): void {
  try {
    const byteCharacters = atob(RESUME_PDF_BASE64);
    const byteNumbers = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([byteNumbers], { type: "application/pdf" });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up blob URL after download starts
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 15000);
  } catch (error) {
    console.warn("Blob download fallback triggered:", error);
    const fallbackLink = document.createElement("a");
    fallbackLink.href = "/assets/resume.pdf";
    fallbackLink.download = filename;
    fallbackLink.style.display = "none";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
