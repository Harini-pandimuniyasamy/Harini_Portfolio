/**
 * Verified, instant local portfolio knowledge base for Harini P.
 * Guarantees 0ms immediate response for common recruiter/visitor queries.
 */
export function getInstantAnswer(question: string): string | null {
  const q = question.toLowerCase().trim();

  // Greetings
  if (
    q === "hi" ||
    q === "hello" ||
    q === "hey" ||
    q.startsWith("hi ") ||
    q.startsWith("hello ") ||
    q.startsWith("hey ") ||
    q.includes("good morning") ||
    q.includes("good afternoon") ||
    q.includes("good evening")
  ) {
    return "Hello! 👋 I’m Harini’s portfolio assistant. I can answer questions about Harini P—including her MCA education (9.33 CGPA), technical skills, projects ('Citizen Connect' & 'Direct Market Access for Farmers'), internships, resume, and contact details. How can I help you today?";
  }

  // Who is Harini / Bio / Profile
  if (
    q === "who is harini?" ||
    q === "who is harini" ||
    q.includes("tell me about harini") ||
    q.includes("introduce") ||
    q.includes("profile") ||
    q.includes("background") ||
    q.includes("bio") ||
    q === "about"
  ) {
    return `Harini P is a Full-Stack Web Developer and UI/UX Designer based in Trichy, Tamil Nadu:
• 🎓 Education: MCA (2025–2027) with 9.33 CGPA & BCA (2022–2025) with 8.81 CGPA from Holy Cross College (Autonomous), Trichy.
• 💻 Core Strengths: Full-stack web development, clean database design (MongoDB, MySQL), and user-centric prototyping in Figma.
• 🚀 Flagship Projects: "Citizen Connect" (Municipal Grievance Platform) and "Direct Market Access for Farmers" (Agri-Tech Platform).
• 💼 Availability: Actively open for software engineering roles, full-stack positions, and internships!`;
  }

  // Skills
  if (
    q === "what are her skills?" ||
    q === "what are her skills" ||
    q.includes("skill") ||
    q.includes("technolog") ||
    q.includes("stack") ||
    q.includes("programming")
  ) {
    return `Harini's verified technical skillset:
• 💻 Programming Languages: Java, JavaScript (ES6+), C, C#, PHP, HTML5, CSS3, SQL
• 🗄️ Databases: MongoDB (NoSQL Document Store), MySQL (Relational Database)
• 🎨 UI/UX & Design: Figma (Wireframing, High-Fidelity UI Prototyping, Component Design Systems)
• 📊 Analytics & Tools: Power BI (Visual Dashboards), VS Code, Visual Studio, Git & GitHub, Tally ERP`;
  }

  // Citizen Connect
  if (
    q === "tell me about citizen connect" ||
    q.includes("citizen connect") ||
    q.includes("complaint") ||
    q.includes("grievance")
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

  // Education
  if (
    q === "what is her education?" ||
    q === "what is her education" ||
    q.includes("education") ||
    q.includes("college") ||
    q.includes("cgpa") ||
    q.includes("degree") ||
    q.includes("mca") ||
    q.includes("bca")
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

  // GitHub
  if (q === "show me her github" || q.includes("github")) {
    return `🔗 Harini's GitHub Profile:
https://github.com/Harini-pandimuniyasamy
Check out her repositories, including Citizen Connect, Direct Market Access for Farmers, and web development prototypes!`;
  }

  // Contact
  if (
    q === "how can i contact harini?" ||
    q === "how can i contact harini" ||
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("reach") ||
    q.includes("hire")
  ) {
    return `📬 Contact Details for Harini P:
• 📧 Email: harinip7104@gmail.com
• 📱 Phone: +91 7418490158
• 📍 Location: Trichy, Tamil Nadu, India
• 💼 LinkedIn: https://www.linkedin.com/in/harini-p-53b589417
• 🐙 GitHub: https://github.com/Harini-pandimuniyasamy
• Availability: Actively available for software development opportunities, full-time positions, and internships.`;
  }

  // Direct Market Access For Farmers
  if (q.includes("farmer") || q.includes("direct market") || q.includes("agri")) {
    return `🌾 "Direct Market Access For Farmers" (Major Agri-Tech Project):
• Purpose: An agri-commerce platform connecting rural farmers directly with retail consumers, cutting out middlemen to provide fair pricing.
• Features: Produce listing with transparent pricing, direct consumer-to-farmer communication, and intuitive design for rural users.
• Technologies: PHP, MySQL, JavaScript, HTML5, CSS3, UI/UX Design.`;
  }

  // Internships
  if (q.includes("internship") || q.includes("experience")) {
    return `Harini has completed 5 industry internships:
1. 📊 T4TEQ: Data Analytics & Power BI Data Visualization
2. 🔌 HCIICT: Sensor Technology & Integrated Full Stack Workflows
3. 💻 HCIICT: Full Stack Web Development
4. ☕ IAFC: Core Java & OOP Software Design
5. 🗄️ esoft: PHP & MySQL Web Architecture`;
  }

  // Resume
  if (q.includes("resume") || q.includes("cv") || q.includes("pdf")) {
    return `📄 Harini's Resume:
Harini's ATS-friendly one-page A4 resume is ready to view and download with 100% reliability. Click the button below or in the navbar to download it directly!`;
  }

  return null;
}
