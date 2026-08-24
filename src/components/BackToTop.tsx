import React, { useState, useEffect } from "react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-5 left-5 z-40 w-11 h-11 rounded-full glass-panel border border-[#B99AFF]/40 text-[#B99AFF] hover:bg-[#B99AFF] hover:text-[#090711] flex items-center justify-center shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      title="Back to Top"
    >
      <i className="fas fa-chevron-up text-sm"></i>
    </button>
  );
};
