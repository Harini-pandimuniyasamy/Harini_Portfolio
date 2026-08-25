/**
 * Verified, instant local portfolio knowledge base for Harini P.
 * Guarantees 0ms immediate response for common recruiter and visitor queries.
 */
export function getInstantAnswer(question: string): string | null {
  const raw = question.trim();
  const q = raw.toLowerCase().replace(/[^\w\s]/gi, " ");
  const compact = q.replace(/\s+/g, " ").trim();

  // Greetings
  if (
    compact === "hi" ||
    compact === "hello" ||
    compact === "hey" ||
    compact.startsWith("hi ") ||
    compact.startsWith("hello ") ||
    compact.startsWith("hey ") ||
    compact.includes("good morning") ||
    compact.includes("good afternoon") ||
    compact.includes("good evening") ||
    compact.includes("how are you") ||
    compact.includes("who are you")
  ) {
    return "Hello! 👋 I’m Harini’s portfolio assistant. I can answer questions about Harini P—including her MCA education (9.33 CGPA), technical skills, projects ('Citizen Connect' & 'Direct Market Access for Farmers'), internships, resume, and contact details. How can I help you today?";
  }

  // Who is Harini / Bio / Profile
  if (
    compact === "who is harini" ||
    compact.includes("tell me about harini") ||
    compact.includes("about harini") ||
    compact.includes("who is she") ||
    compact.includes("introduce") ||
    compact.includes("profile") ||
    compact.includes("background") ||
    compact.includes("bio") ||
    compact === "about"
  ) {
    return `Harini P is a Full-Stack Web Developer and UI/UX Designer based in Trichy, Tamil Nadu:
• 🎓 Education: MCA (2025–2027) with 9.33 CGPA & BCA (2022–2025) with 8.81 CGPA from Holy Cross College (Autonomous), Trichy.
• 💻 Core Strengths: Full-stack web development, clean database architecture (MongoDB, MySQL), and user-centric prototyping in Figma.
• 🚀 Flagship Projects: "Citizen Connect" (Municipal Grievance Platform) and "Direct Market Access for Farmers" (Agri-Tech Platform).
• 💼 Availability: Actively open for software engineering roles, full-stack positions, and internships!`;
  }

  // Education / CGPA / Degrees
  if (
    compact.includes("education") ||
    compact.includes("college") ||
    compact.includes("cgpa") ||
    compact.includes("degree") ||
    compact.includes("mca") ||
    compact.includes("bca") ||
    compact.includes("school") ||
    compact.includes("percentage") ||
    compact.includes("marks") ||
    compact.includes("qualification") ||
    compact.includes("holy cross") ||
    compact.includes("hsc") ||
    compact.includes("sslc")
  ) {
    return `Harini's verified academic credentials:
🎓 Master of Computer Applications (MCA)
• Institution: Holy Cross College (Autonomous), Trichy
• Period: 2025 – 2027 | Score: 9.33 CGPA (Distinction)

🎓 Bachelor of Computer Applications (BCA)
• Institution: Holy Cross College (Autonomous), Trichy
• Period: 2022 – 2025 | Score: 8.81 CGPA

🏫 Higher Secondary Certificate (HSC)
• Institution: St. Antony’s Higher Secondary School, Trichy
• Period: 2021 – 2022 | Score: 93%

🏫 SSLC
• Institution: St. Antony’s Higher Secondary School, Trichy | Score: 88%`;
  }

  // Citizen Connect / Projects
  if (
    compact.includes("citizen connect") ||
    compact.includes("complaint") ||
    compact.includes("grievance")
  ) {
    return `🏢 "Citizen Connect" (Full-Stack Web Application / Main Project):
• Purpose: A civic grievance redressal and municipal engagement web platform connecting residents with local municipal authorities.
• Problem Solved: Eliminates slow, opaque traditional reporting by providing a transparent digital tracking system.
• Key Features:
  - User Registration & Secure Login Portal (JWT authentication)
  - Issue submission with photo/image proof upload
  - Real-time ticket lifecycle tracking (Submitted → In Review → In Progress → Resolved)
  - Dedicated Municipal Officer Admin Dashboard for grievance triage and status updates
• Technologies: JavaScript, MongoDB, Node.js/Express, HTML5/CSS3, Figma UI/UX Design.`;
  }

  // Direct Market Access For Farmers
  if (
    compact.includes("farmer") ||
    compact.includes("direct market") ||
    compact.includes("agri") ||
    compact.includes("market access")
  ) {
    return `🌾 "Direct Market Access For Farmers" (Major Agri-Tech Project):
• Purpose: An agri-commerce platform connecting rural farmers directly with retail consumers, cutting out middlemen to provide fair pricing.
• Features: Produce listing with transparent pricing, direct consumer-to-farmer communication, and intuitive design for rural users.
• Technologies: PHP, MySQL, JavaScript, HTML5, CSS3, UI/UX Design.`;
  }

  // General Projects
  if (
    compact.includes("project") ||
    compact.includes("portfolio projects") ||
    compact.includes("built") ||
    compact.includes("apps")
  ) {
    return `Harini has built several impactful web applications:
1. 🏢 "Citizen Connect" (Full-Stack Civic Grievance System):
   • Tech: JavaScript, MongoDB, Node.js, Express, HTML5/CSS3, Figma.
   • Features: User complaints with photo uploads, live ticket tracking, municipal officer dashboard, and JWT auth.

2. 🌾 "Direct Market Access For Farmers" (Agri-Tech Marketplace):
   • Tech: PHP, MySQL, JavaScript, HTML5/CSS3.
   • Features: Connects farmers directly with consumers for fair pricing and zero middleman fees.`;
  }

  // Skills
  if (
    compact.includes("skill") ||
    compact.includes("technolog") ||
    compact.includes("stack") ||
    compact.includes("programming") ||
    compact.includes("language") ||
    compact.includes("java") ||
    compact.includes("javascript") ||
    compact.includes("figma") ||
    compact.includes("database") ||
    compact.includes("mongodb") ||
    compact.includes("mysql") ||
    compact.includes("frontend") ||
    compact.includes("backend") ||
    compact.includes("ui ux")
  ) {
    return `Harini's verified technical skillset:
• 💻 Programming Languages: Java, JavaScript (ES6+), C, C#, PHP, HTML5, CSS3, SQL
• 🗄️ Databases: MongoDB (NoSQL Document Store), MySQL (Relational Database)
• 🎨 UI/UX & Design: Figma (Wireframing, High-Fidelity UI Prototyping, Component Design Systems)
• 📊 Analytics & Tools: Power BI (Visual Dashboards), VS Code, Visual Studio, Git & GitHub, Tally ERP`;
  }

  // Internships / Experience
  if (
    compact.includes("internship") ||
    compact.includes("experience") ||
    compact.includes("work") ||
    compact.includes("company") ||
    compact.includes("t4teq") ||
    compact.includes("hciict") ||
    compact.includes("iafc") ||
    compact.includes("esoft")
  ) {
    return `Harini has completed 5 technical industry internships:
1. 📊 T4TEQ: Data Analytics & Power BI Data Visualization
2. 🔌 HCIICT: Sensor Technology & Integrated Full Stack Workflows
3. 💻 HCIICT: Full Stack Web Development
4. ☕ IAFC: Core Java & OOP Software Design
5. 🗄️ esoft: PHP & MySQL Web Architecture`;
  }

  // Achievements / Certifications / Papers
  if (
    compact.includes("achievement") ||
    compact.includes("certificate") ||
    compact.includes("certification") ||
    compact.includes("paper") ||
    compact.includes("award") ||
    compact.includes("prize") ||
    compact.includes("accenture")
  ) {
    return `Harini's key achievements and certifications:
🏆 Technical Papers Presented:
• "AI-Based Image Recognition" (Computer Vision & Machine Learning)
• "Password Strength Analyzer" (Security Entropy Algorithms)

🏅 Academic Honors:
• 1st & 2nd Proficiency Prize in Computer Applications (Holy Cross College)
• 2nd Proficiency Prize in Tamil & English languages

📜 Certifications:
• Accenture (89% score)
• Swayam / NPTEL, ICTACADEMY, NoviTech, Wadhwani Foundation
• Tally ERP, Type Writing, Data Entry Operations`;
  }

  // GitHub
  if (compact.includes("github") || compact.includes("repo") || compact.includes("code")) {
    return `🔗 Harini's GitHub Profile:
https://github.com/Harini-pandimuniyasamy
Explore her repositories, including Citizen Connect, Direct Market Access for Farmers, and web development prototypes!`;
  }

  // LinkedIn
  if (compact.includes("linkedin")) {
    return `💼 Harini's LinkedIn Profile:
https://www.linkedin.com/in/harini-p-53b589417
Connect with Harini for software engineering roles, internships, and collaborations!`;
  }

  // Contact / Email / Phone / Location / Hire
  if (
    compact.includes("contact") ||
    compact.includes("email") ||
    compact.includes("phone") ||
    compact.includes("mobile") ||
    compact.includes("number") ||
    compact.includes("call") ||
    compact.includes("reach") ||
    compact.includes("hire") ||
    compact.includes("location") ||
    compact.includes("city") ||
    compact.includes("trichy")
  ) {
    return `📬 Contact Details for Harini P:
• 📧 Email: harinip7104@gmail.com
• 📱 Phone: +91 7418490158
• 📍 Location: Trichy, Tamil Nadu, India
• 💼 LinkedIn: https://www.linkedin.com/in/harini-p-53b589417
• 🐙 GitHub: https://github.com/Harini-pandimuniyasamy
• Availability: Actively available for software development opportunities, full-time positions, and internships.`;
  }

  // Resume / CV
  if (
    compact.includes("resume") ||
    compact.includes("cv") ||
    compact.includes("pdf") ||
    compact.includes("download")
  ) {
    return `📄 Harini's Resume:
Harini's ATS-friendly one-page A4 resume is ready to view and download with 100% reliability. Click the button below or in the navbar to download it directly!`;
  }

  return null;
}
