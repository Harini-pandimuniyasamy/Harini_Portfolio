import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface DeployedPortfolioBannerProps {
  customUrl?: string;
}

export const DeployedPortfolioBanner: React.FC<DeployedPortfolioBannerProps> = ({
  customUrl,
}) => {
  const [deployedUrl, setDeployedUrl] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (customUrl) {
      setDeployedUrl(customUrl);
    } else if (typeof window !== "undefined") {
      setDeployedUrl(window.location.origin);
    }
  }, [customUrl]);

  const handleCopy = () => {
    if (!deployedUrl) return;
    navigator.clipboard.writeText(deployedUrl);
    setCopied(true);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#B99AFF", "#34d399", "#d4bbff"],
      });
    } catch (e) {
      // Non-critical
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (!deployedUrl) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Harini P - Portfolio",
          text: "Check out Harini P's Portfolio - Full-Stack Developer & UI/UX Designer",
          url: deployedUrl,
        });
      } catch (err) {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div
      id="deployed-portfolio-section"
      className="w-[95%] max-w-6xl mx-auto mt-16 md:mt-24 relative z-10 px-4 md:px-8"
    >
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-[#B99AFF]/30 bg-gradient-to-r from-[#1c182d]/90 via-[#261f3d]/80 to-[#1c182d]/90 relative overflow-hidden shadow-[0_8px_32px_rgba(185,154,255,0.15)]">
        {/* Glow Accent */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#B99AFF]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left: Info */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Deployed Web Application
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-2.5">
              <i className="fas fa-globe text-[#B99AFF]"></i>
              Deployed Portfolio Link
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
              Access the live, production-ready portfolio directly in your browser. Share this link with recruiters, collaborators, and hiring managers.
            </p>

            {/* URL Display Pill */}
            {deployedUrl && (
              <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-[#d4bbff] font-mono max-w-full truncate">
                <i className="fas fa-link text-[10px] text-gray-400"></i>
                <span className="truncate">{deployedUrl}</span>
              </div>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* Open Deployed Link */}
            <a
              id="open-deployed-portfolio-btn"
              href={deployedUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B99AFF] to-[#d4bbff] text-[#090711] font-bold text-xs md:text-sm flex items-center gap-2 hover:shadow-[0_0_20px_rgba(185,154,255,0.7)] transition-all transform hover:-translate-y-0.5 btn-pulse"
            >
              <i className="fas fa-external-link-alt"></i>
              <span>Open Live Portfolio</span>
            </a>

            {/* Copy Link Button */}
            <button
              id="copy-deployed-link-btn"
              onClick={handleCopy}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs md:text-sm flex items-center gap-2 transition-all"
              title="Copy portfolio link to clipboard"
            >
              {copied ? (
                <>
                  <i className="fas fa-check text-emerald-400"></i>
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <i className="fas fa-copy"></i>
                  <span>Copy Link</span>
                </>
              )}
            </button>

            {/* Share Button */}
            <button
              id="share-portfolio-btn"
              onClick={handleShare}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#B99AFF]/20 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center text-sm transition-all"
              title="Share portfolio"
            >
              <i className="fas fa-share-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
