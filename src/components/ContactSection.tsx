import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyBodySuccess, setCopyBodySuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [gmailWebUrl, setGmailWebUrl] = useState("");
  const [outlookWebUrl, setOutlookWebUrl] = useState("");
  const [formattedBodyText, setFormattedBodyText] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  const handleCopyFormattedBody = () => {
    if (!formattedBodyText) return;
    navigator.clipboard.writeText(formattedBodyText);
    setCopyBodySuccess(true);
    setTimeout(() => setCopyBodySuccess(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg(null);
  };

  const constructEmailData = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    const bodyContent = `Hello Harini,

I am contacting you through your portfolio.

Name:
${name}

My Email:
${email}

Message:
${message}

Thank you.`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(bodyContent);

    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodedSubject}&body=${encodedBody}`;
    const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=${encodedSubject}&body=${encodedBody}`;

    return { name, email, subject, message, bodyContent, mailto, gmail, outlook };
  };

  const handleSubmit = (e: React.FormEvent, preferGmail: boolean = false) => {
    if (e) e.preventDefault();
    setErrorMsg(null);

    // Validation
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!subject) {
      setErrorMsg("Please enter a subject.");
      return;
    }
    if (!message) {
      setErrorMsg("Please enter your message.");
      return;
    }

    setLoading(true);

    const emailData = constructEmailData();

    setMailtoUrl(emailData.mailto);
    setGmailWebUrl(emailData.gmail);
    setOutlookWebUrl(emailData.outlook);
    setFormattedBodyText(emailData.bodyContent);
    setSubmittedName(name);

    // Trigger email client or Gmail web
    try {
      if (preferGmail) {
        window.open(emailData.gmail, "_blank", "noopener,noreferrer");
      } else {
        // Create an invisible anchor to bypass strict iframe blockers
        const mailLink = document.createElement("a");
        mailLink.href = emailData.mailto;
        mailLink.target = "_blank";
        mailLink.rel = "noopener noreferrer";
        document.body.appendChild(mailLink);
        mailLink.click();
        document.body.removeChild(mailLink);
      }
    } catch (err) {
      console.warn("Direct trigger notice:", err);
    }

    setSubmitted(true);
    setLoading(false);

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    });

    // Confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#B99AFF", "#d4bbff", "#7C4DFF", "#10B981"],
      });
    } catch (e) {
      // Non-critical
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    });
    setSubmittedName("");
    setMailtoUrl("");
    setGmailWebUrl("");
    setOutlookWebUrl("");
    setFormattedBodyText("");
    setSubmitted(false);
    setErrorMsg(null);
  };

  return (
    <section
      id="contact"
      className="w-[95%] max-w-6xl mx-auto mt-24 md:mt-32 mb-20 relative z-10 px-4 md:px-8"
    >
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B99AFF]/10 border border-[#B99AFF]/30 text-xs md:text-sm font-semibold tracking-wider text-[#d4bbff] mb-3 uppercase">
          <i className="fas fa-paper-plane text-[#B99AFF]"></i>
          Get In Touch
        </div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider section-heading text-white">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mt-3">
          Interested in hiring, collaborating, or discussing project ideas? Send a message directly to my email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Contact Info Column (Left 5 Cols) */}
        <div className="lg:col-span-5 glass-panel p-7 md:p-8 rounded-3xl flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.availabilityStatus}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Get in Touch Directly
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              I am actively seeking software developer roles, full-stack opportunities, and UI/UX design collaborations. All messages reach my primary inbox at <strong className="text-white">harinip7104@gmail.com</strong>.
            </p>

            <div className="space-y-5 text-sm">
              {/* Primary Email with 1-Click Copy */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-[#B99AFF]/30 hover:border-[#B99AFF]/60 transition-all">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/20 border border-[#B99AFF]/40 flex items-center justify-center text-[#B99AFF] shrink-0 text-base shadow-sm">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">
                    Direct Email (Primary)
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-[#d4bbff] hover:text-white font-semibold text-sm truncate"
                      title="Send email to Harini"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="text-gray-300 hover:text-white text-xs bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg border border-white/15 transition-all flex items-center gap-1 shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copySuccess ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <i className="fas fa-check text-[10px]"></i> Copied!
                        </span>
                      ) : (
                        <>
                          <i className="far fa-copy text-[10px]"></i>
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/15 border border-[#B99AFF]/30 flex items-center justify-center text-[#B99AFF] shrink-0 text-base">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">
                    Phone
                  </p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white hover:text-[#d4bbff] font-semibold transition-colors"
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#B99AFF]/15 border border-[#B99AFF]/30 flex items-center justify-center text-[#B99AFF] shrink-0 text-base">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-xs uppercase font-semibold text-gray-400 mb-3">
              Connect on Social Platforms
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#B99AFF] hover:text-[#090711] border border-white/10 text-xs font-semibold flex items-center gap-2 text-gray-300 transition-all shadow-sm"
              >
                <i className="fab fa-github text-sm"></i> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#0077b5] hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-2 text-gray-300 transition-all shadow-sm"
              >
                <i className="fab fa-linkedin-in text-sm"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column (Right 7 Cols) */}
        <div className="lg:col-span-7 glass-card p-7 md:p-9 rounded-3xl border border-white/10">
          {!submitted ? (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-5">
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Full Name <span className="text-[#B99AFF]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B99AFF] focus:ring-1 focus:ring-[#B99AFF] transition-all text-sm"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Email Address <span className="text-[#B99AFF]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B99AFF] focus:ring-1 focus:ring-[#B99AFF] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Subject <span className="text-[#B99AFF]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Collaboration Proposal"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B99AFF] focus:ring-1 focus:ring-[#B99AFF] transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Message <span className="text-[#B99AFF]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry, project proposal, or job opportunity..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#B99AFF] focus:ring-1 focus:ring-[#B99AFF] transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <i className="fas fa-exclamation-circle"></i>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Dual Action Buttons (Primary & Gmail Direct) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Send via Default Mail / Mailto */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#B99AFF] to-[#d4bbff] text-[#1c182d] py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(185,154,255,0.6)] transition-all duration-300 cursor-pointer disabled:opacity-50 transform hover:-translate-y-0.5"
                >
                  <i className="fas fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>

                {/* Open in Gmail Direct Web Compose */}
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={loading}
                  className="w-full bg-white/10 hover:bg-white/20 border border-white/15 text-white py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  title="Compose directly in Gmail (browser webmail)"
                >
                  <i className="fab fa-google text-red-400"></i>
                  <span>Open in Gmail</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center">
                <i className="fas fa-shield-alt mr-1 text-[#B99AFF]"></i>
                Direct to <strong className="text-gray-300">harinip7104@gmail.com</strong>. Opens your pre-filled email composer ready to send.
              </p>
            </form>
          ) : (
            /* Ready / Opened State */
            <div className="text-center py-6 px-3 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-emerald-500/10">
                <i className="fas fa-envelope-open-text"></i>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1.5">
                Email Application Ready
              </h3>

              <p className="text-white text-base font-semibold mb-2">
                Thank you for reaching out, {submittedName || "there"}!
              </p>

              <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
                Your email draft has been prepared for <strong className="text-[#d4bbff]">harinip7104@gmail.com</strong>. Please review the pre-filled message in your chosen email app and click <strong className="text-emerald-400">Send</strong>.
              </p>

              {/* Action Buttons Hub */}
              <div className="space-y-3 max-w-md mx-auto mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Gmail Web */}
                  {gmailWebUrl && (
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-2xl bg-[#B99AFF] text-[#1c182d] font-bold text-xs hover:bg-[#d4bbff] transition-all flex items-center justify-center gap-2 shadow-md transform hover:-translate-y-0.5"
                    >
                      <i className="fab fa-google text-red-600"></i>
                      <span>Open in Gmail (Web)</span>
                    </a>
                  )}

                  {/* Default Mail App */}
                  {mailtoUrl && (
                    <a
                      href={mailtoUrl}
                      className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-desktop"></i>
                      <span>Default Mail App</span>
                    </a>
                  )}
                </div>

                {/* Outlook Web & Copy Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outlookWebUrl && (
                    <a
                      href={outlookWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <i className="fab fa-microsoft text-blue-400"></i>
                      <span>Outlook Web</span>
                    </a>
                  )}

                  <button
                    onClick={handleCopyFormattedBody}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    {copyBodySuccess ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <i className="fas fa-check"></i> Text Copied!
                      </span>
                    ) : (
                      <>
                        <i className="far fa-copy"></i>
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Reset Form */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white font-semibold text-xs border border-white/10 transition-all inline-flex items-center gap-2"
                >
                  <i className="fas fa-redo text-[10px]"></i>
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
