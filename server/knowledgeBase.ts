export interface HariniProfile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  dob: string;
  languages: string[];
  github: string;
  linkedin: string;
  education: Array<{
    degree: string;
    institution: string;
    cgpaOrPercentage: string;
    period: string;
    highlights?: string;
  }>;
  skills: {
    programming: string[];
    fullstack: string[];
    databases: string[];
    tools: string[];
    uiux: string[];
  };
  skillUsages: Record<string, string>;
  projects: Array<{
    name: string;
    type: string;
    tagline: string;
    description: string;
    problem: string;
    solution: string;
    features: string[];
    technologies: string[];
    role: string;
    outcome: string;
    github?: string;
    liveDemo?: string;
  }>;
  internships: Array<{
    company: string;
    domain: string;
    details: string;
  }>;
  certifications: string[];
  achievements: Array<{
    title: string;
    category: string;
    details: string;
  }>;
}

export const HARINI_DATA: HariniProfile = {
  name: "Harini P",
  title: "Full-Stack Developer & UI/UX Designer",
  email: "harinip7104@gmail.com",
  phone: "7418490158",
  location: "Trichy, Tamil Nadu, India",
  dob: "October 7, 2004",
  languages: ["Tamil", "English"],
  github: "https://github.com/Harini-pandimuniyasamy",
  linkedin: "https://www.linkedin.com/in/harini-p-53b589417",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Holy Cross College (Autonomous), Trichy",
      cgpaOrPercentage: "CGPA: 9.33",
      period: "2025 - 2027",
      highlights: "Achieved outstanding academic performance with a 9.33 CGPA while spearheading development on community-impact applications."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Holy Cross College (Autonomous), Trichy",
      cgpaOrPercentage: "CGPA: 8.81",
      period: "2022 - 2025",
      highlights: "Built a solid academic foundation in core computer science, database design, software engineering principles, and programming."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Antony’s Higher Secondary School, Trichy",
      cgpaOrPercentage: "Percentage: 93%",
      period: "2021 - 2022",
      highlights: "Graduated with distinction scoring 93% in higher secondary examinations."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Antony’s Higher Secondary School, Trichy",
      cgpaOrPercentage: "Percentage: 88%",
      period: "2019 - 2020",
      highlights: "Completed secondary education with top honors."
    }
  ],
  skills: {
    programming: ["Java", "JavaScript", "C", "C#", "PHP", "HTML", "CSS", "SQL"],
    fullstack: ["Full Stack Web Development", "MVC Architecture"],
    databases: ["MongoDB", "MySQL", "Database Management"],
    tools: ["Figma", "Power BI", "Visual Studio", "VS Code", "Tally ERP", "MS Word", "MS PowerPoint"],
    uiux: ["Figma UI/UX Prototyping", "User Research", "Wireframing", "Responsive Web Design"]
  },
  skillUsages: {
    "MongoDB": "Used as the primary NoSQL document database in Citizen Connect for storing user accounts, grievance tickets, and resolution logs.",
    "JavaScript": "Used extensively for client-side interactivity, DOM manipulation, asynchronous fetch calls, and full-stack logic.",
    "Figma": "Used for UI/UX design, creating wireframes, interactive user journey prototypes, and design systems for web apps.",
    "HTML": "Used for semantic structure and accessible markup across all web projects and interfaces.",
    "CSS": "Used for responsive layouts, glassmorphic styling, custom CSS grid/flexbox, animations, and modern UI design.",
    "PHP": "Used in the backend architecture of 'Direct Market Access for Farmers' and during esoft internship.",
    "MySQL": "Used as the relational database engine for 'Direct Market Access for Farmers' and database management coursework.",
    "Java": "Used for Object-Oriented Programming (OOP) concepts, data structures, and during the IAFC Core Java internship.",
    "C": "Used for core programming fundamentals, memory management, and structured algorithms.",
    "C#": "Used in desktop and application development coursework in Visual Studio.",
    "SQL": "Used for writing relational queries, schema definition, indexing, and data manipulation.",
    "Power BI": "Used during T4TEQ internship for data analytics, dynamic chart generation, and KPI dashboards.",
    "Tally ERP": "Certified expertise in accounting software workflows and business ledger management."
  },
  projects: [
    {
      name: "Citizen Connect",
      type: "Full-Stack Web Application (Main Project)",
      tagline: "A Citizen Complaint Management and Municipal Engagement Platform",
      description: "Citizen Connect is a full-stack citizen complaint management platform designed to bridge the gap between local authorities and residents, streamlining community issue reporting, image uploads, resolution tracking, and administrative governance.",
      problem: "Traditional municipal grievance redressal systems suffer from slow response times, lack of real-time progress transparency, and inadequate tracking channels for citizens.",
      solution: "Citizen Connect provides a modern, transparent digital platform where citizens can submit complaints with photo evidence, monitor status in real-time, and administrators can filter, prioritize, and resolve grievances through a dedicated dashboard.",
      features: [
        "User registration and secure login portal",
        "Complaint submission with photo/image proof upload",
        "Real-time ticket tracking with status milestones (Pending, In Review, Resolved)",
        "Comprehensive Admin Dashboard for municipal officers",
        "Complaint category filtering, search, and priority management",
        "Automated status updates and communication logs",
        "Analytical reporting module for resolution efficiency insights"
      ],
      technologies: ["JavaScript", "MongoDB", "HTML5", "CSS3", "Figma", "UI/UX Design"],
      role: "Full-Stack Developer & UI/UX Designer – Designed wireframes in Figma, developed database models in MongoDB, and crafted the responsive frontend interface.",
      outcome: "Delivered a fully functional citizen portal that streamlines grievance lifecycle management and improves citizen-authority communication.",
      github: "https://github.com/Harini-pandimuniyasamy"
    },
    {
      name: "Direct Market Access For Farmers",
      type: "Agri-Tech Web Platform (Major Project)",
      tagline: "Empowering Rural Farmers with Direct Consumer Market Linkages",
      description: "A comprehensive agri-commerce platform designed to empower agricultural producers by connecting them directly with consumers and local markets. This solution eliminates intermediaries, ensuring fair pricing and higher profit margins for farmers while offering fresh produce to consumers.",
      problem: "Middlemen in agricultural supply chains extract high profit margins, leaving small-scale farmers with reduced earnings while consumers pay inflated retail prices.",
      solution: "A direct peer-to-peer web marketplace enabling farmers to list harvested produce with transparent pricing, and consumers to buy directly from local cultivators.",
      features: [
        "Produce listing and inventory management",
        "Direct buyer-to-farmer communication channels",
        "Simplified user-centric interfaces tailored for rural users with varying digital literacy",
        "Transparent price discovery and order management",
        "Location-based farmer discovery"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "UI/UX Design"],
      role: "Lead Developer – Designed the database schema, built the server-side PHP endpoints, and implemented an intuitive responsive user experience.",
      outcome: "Successfully demonstrated a functional agri-market prototype aimed at reducing rural economic disparity through direct digital trade."
    }
  ],
  internships: [
    { company: "T4TEQ", domain: "Data Analytics, Data Visualization", details: "Conducted data exploration, visual analytics, and reporting dashboards using Power BI and analytical tools." },
    { company: "HCIICT", domain: "Sensor Technology, Full Stack", details: "Gained hands-on experience in sensor-integrated interface prototypes and full-stack software development." },
    { company: "HCIICT", domain: "Full Stack Web Development", details: "Developed responsive web modules, backend endpoints, and integrated client-server workflows." },
    { company: "IAFC", domain: "Core Java", details: "Practiced object-oriented programming concepts, collections framework, and algorithmic problem-solving in Java." },
    { company: "esoft", domain: "PHP/MYSQL", details: "Built server-side web modules and implemented relational database queries in PHP and MySQL." }
  ],
  certifications: [
    "Domestic Data Entry Operator",
    "Type Writing",
    "Tally",
    "Swayam / NPTEL courses",
    "NoviTech Certification",
    "Wadhwani Foundation Certification",
    "ICTACADEMY Certification",
    "Accenture (89% score)",
    "Technical Workshops & Seminars"
  ],
  achievements: [
    { title: "AI-Based Image Recognition", category: "Paper Presentation", details: "Presented a technical paper exploring computer vision algorithms and deep learning image classification paradigms." },
    { title: "Password Strength Analyzer", category: "Paper Presentation", details: "Authored and presented research on cryptographic entropy, password strength algorithms, and cybersecurity hygiene." },
    { title: "Academic Proficiency Prizes", category: "Academic Honors", details: "Awarded 1st / 2nd Proficiency Prize in Computer Applications, and 2nd in Tamil & English languages." }
  ]
};

export function getFallbackAnswer(question: string): string {
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
    q.includes("good evening") ||
    q.includes("how are you")
  ) {
    return `Hello! 👋 I'm Harini's personal AI portfolio assistant. I can answer any questions you have about Harini P—including her background, MCA education (9.33 CGPA), technical skills, projects ("Citizen Connect" and "Direct Market Access for Farmers"), internships, resume, and contact details. How can I help you today?`;
  }

  // Who is Harini / Bio / Summary / About
  if (
    q.includes("about") ||
    q.includes("who is") ||
    q.includes("tell me about harini") ||
    q.includes("introduce") ||
    q.includes("profile") ||
    q.includes("background") ||
    q.includes("summary") ||
    q.includes("bio")
  ) {
    return `Harini P is a passionate, high-achieving Full-Stack Developer and UI/UX Designer based in Trichy, Tamil Nadu.
• Current Status: Pursuing her Master of Computer Applications (MCA) at Holy Cross College (Autonomous), Trichy (2025–2027) with an outstanding 9.33 CGPA.
• Core Strengths: Full-stack web development, clean database design (MongoDB, MySQL), and user-centric prototyping in Figma.
• Key Creations: Creator of "Citizen Connect" (Municipal Grievance Platform) and "Direct Market Access for Farmers" (Agri-Tech Platform).
• Availability: Actively seeking software engineering roles, internships, and collaborative opportunities.`;
  }

  // Why hire Harini / Strengths / Uniqueness
  if (
    q.includes("why hire") ||
    q.includes("why should we hire") ||
    q.includes("strength") ||
    q.includes("why choose") ||
    q.includes("qualities") ||
    q.includes("stand out")
  ) {
    return `Top reasons to hire Harini P:
1. Exceptional Academic Excellence: Consistent top-tier performer with a 9.33 CGPA in MCA, 8.81 CGPA in BCA, and 93% in HSC.
2. Real-World Practical Engineering: Built end-to-end applications solving civic grievances ("Citizen Connect") and rural agricultural fair trade ("Direct Market Access for Farmers").
3. Full-Stack & UI/UX Dual Mastery: Bridges the gap between aesthetic, accessible interface design in Figma and reliable database/backend logic in JavaScript, Java, PHP, and SQL.
4. Continuous Learner & Multi-Certified: Proven track record with Accenture (89%), Swayam/NPTEL, and industry internships across Power BI, sensor systems, Java, and web development.
5. Strong Communication & Work Ethic: Fluent in Tamil and English, with proven presentation skills in technical symposiums.`;
  }

  // Education / College / Marks / CGPA
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("school") ||
    q.includes("cgpa") ||
    q.includes("mca") ||
    q.includes("bca") ||
    q.includes("degree") ||
    q.includes("grade") ||
    q.includes("mark") ||
    q.includes("holy cross") ||
    q.includes("st antony") ||
    q.includes("study") ||
    q.includes("studied")
  ) {
    return `Harini's verified educational credentials:
🎓 Master of Computer Applications (MCA)
• Institution: Holy Cross College (Autonomous), Trichy
• Period: 2025 – 2027 | Score: 9.33 CGPA (Distinction)

🎓 Bachelor of Computer Applications (BCA)
• Institution: Holy Cross College (Autonomous), Trichy
• Period: 2022 – 2025 | Score: 8.81 CGPA

🏫 Higher Secondary Certificate (HSC)
• Institution: St. Antony’s Higher Secondary School, Trichy
• Period: 2021 – 2022 | Score: 93%

🏫 Secondary School Leaving Certificate (SSLC)
• Institution: St. Antony’s Higher Secondary School, Trichy
• Score: 88%`;
  }

  // Projects Overview & Specifics
  if (
    q.includes("citizen connect") ||
    q.includes("complaint") ||
    q.includes("grievance") ||
    q.includes("municipal")
  ) {
    return `🏢 "Citizen Connect" (Full-Stack Web Application / Main Project):
• Purpose: A civic grievance redressal and municipal engagement web platform connecting residents with local municipal authorities.
• Problem Solved: Eliminates slow, opaque traditional reporting by providing a transparent digital tracking system.
• Key Features:
  - User Registration & Secure Login Portal
  - Issue submission with photo/image proof upload
  - Real-time ticket lifecycle tracking (Submitted → In Review → In Progress → Resolved)
  - Dedicated Municipal Officer Admin Dashboard for grievance triage and status updates
  - Category, priority, and department filtering with analytical metrics
• Technologies: JavaScript, MongoDB, HTML5, CSS3, Figma UI/UX Design.
• Harini's Role: Designed wireframes & interactive prototypes in Figma, developed database models in MongoDB, and built responsive user dashboards.`;
  }

  if (
    q.includes("farmer") ||
    q.includes("direct market") ||
    q.includes("agri") ||
    q.includes("produce")
  ) {
    return `🌾 "Direct Market Access For Farmers" (Agri-Tech Web Platform / Major Project):
• Purpose: A direct-to-consumer digital marketplace that eliminates intermediaries and brokers, allowing rural farmers to sell fresh produce directly to consumers.
• Problem Solved: Middlemen capture high margins, depressing farmer earnings while inflating consumer prices.
• Key Features:
  - Produce inventory listings and live pricing
  - Direct consumer-to-farmer communication and order inquiries
  - High-contrast, intuitive UI tailored specifically for rural digital literacy
  - Category filtering for vegetables, fruits, and grains
• Technologies: PHP, MySQL, JavaScript, HTML5, CSS3, UI/UX Design.
• Harini's Role: Lead Developer – Designed relational MySQL database schema, implemented backend PHP data handlers, and crafted responsive user views.`;
  }

  if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
    return `Harini has engineered two flagship platforms:
1. 🏢 "Citizen Connect" (Main Project): A full-stack citizen complaint management portal built with JavaScript, MongoDB, HTML5/CSS3, and Figma UI/UX design.
2. 🌾 "Direct Market Access For Farmers" (Major Project): An agri-tech digital marketplace built with PHP, MySQL, JavaScript, and HTML/CSS connecting farmers directly with retail consumers.

You can inspect the full architectural breakdowns and features in the "Featured Projects" section!`;
  }

  // Skills & Technologies
  if (
    q.includes("skill") ||
    q.includes("technolog") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("programming") ||
    q.includes("language") ||
    q.includes("tool")
  ) {
    return `Harini's technical skill set:
• Programming Languages: Java (Core OOP), JavaScript (ES6+), C, C#, PHP, HTML5, CSS3, SQL.
• Domain Expertise: Full-Stack Web Development, MVC Architecture, Database Design.
• Databases: MongoDB (NoSQL Document Store), MySQL (Relational Database Management).
• UI/UX & Prototyping: Figma (Wireframing, High-Fidelity UI Prototyping, Design Systems, User Research).
• Analytics & Tools: Power BI (Data Visualization), Visual Studio, VS Code, Tally ERP, MS Office Suite.`;
  }

  // Specific Skills
  if (q.includes("java")) {
    return `Harini has strong foundations in Java (Core OOP, data structures, algorithm design, and exception handling), deepened during her internship with IAFC.`;
  }
  if (q.includes("javascript") || q.includes("js")) {
    return `Harini uses modern JavaScript (ES6+) for dynamic DOM manipulation, asynchronous client-server communication, event handling, and interactive web applications.`;
  }
  if (q.includes("mongodb") || q.includes("nosql")) {
    return `Harini uses MongoDB as a NoSQL document database, implementing structured collections, schema models, and data persistence in "Citizen Connect".`;
  }
  if (q.includes("php") || q.includes("mysql") || q.includes("sql")) {
    return `Harini is proficient in PHP and MySQL relational databases, utilized in her major project "Direct Market Access for Farmers" and her internship with esoft.`;
  }
  if (q.includes("figma") || q.includes("ui") || q.includes("ux") || q.includes("design")) {
    return `Harini is skilled in UI/UX Design using Figma. She designs user journey maps, wireframes, accessible interactive prototypes, and design systems for web applications.`;
  }
  if (q.includes("power bi") || q.includes("analytics") || q.includes("data")) {
    return `Harini completed an analytics internship at T4TEQ where she used Power BI for data transformation, KPI modeling, and dynamic visual dashboard creation.`;
  }

  // Internships & Experience
  if (
    q.includes("internship") ||
    q.includes("experience") ||
    q.includes("practical") ||
    q.includes("company") ||
    q.includes("companies")
  ) {
    return `Harini has completed 5 industry internships:
1. 📊 T4TEQ: Data Analytics & Power BI Data Visualization
2. 🔌 HCIICT: Sensor Technology & Integrated Full Stack Workflows
3. 💻 HCIICT: Full Stack Web Development
4. ☕ IAFC: Core Java & Object-Oriented Software Design
5. 🗄️ esoft: PHP & MySQL Web Architecture`;
  }

  // Certifications & Achievements
  if (
    q.includes("certification") ||
    q.includes("certificate") ||
    q.includes("achievement") ||
    q.includes("prize") ||
    q.includes("paper") ||
    q.includes("award") ||
    q.includes("honor")
  ) {
    return `Harini's notable achievements and certifications:
🏆 Technical Paper Presentations:
• "AI-Based Image Recognition" (Computer Vision & Deep Learning)
• "Password Strength Analyzer" (Cybersecurity & Entropy Calculations)

🎖️ Academic Honors:
• 1st / 2nd Proficiency Prize in Computer Applications
• 2nd Proficiency Prize in Tamil & English Languages

📜 Certifications:
• Accenture (89% score)
• Swayam / NPTEL Online Certification
• ICTACADEMY & NoviTech Certifications
• Wadhwani Foundation Certificate
• Tally ERP Accounting Certification
• Type Writing & Domestic Data Entry Operator`;
  }

  // Contact / Location / Availability / Hire
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("reach") ||
    q.includes("hire") ||
    q.includes("available") ||
    q.includes("location") ||
    q.includes("address") ||
    q.includes("trichy") ||
    q.includes("relocate")
  ) {
    return `📬 Contact Details for Harini P:
• Email: harinip7104@gmail.com
• Phone: +91 7418490158
• Location: Trichy, Tamil Nadu, India
• Availability: Actively available for Full-Time Roles, Software Developer Positions, and Internships. Open to on-site, hybrid, and remote opportunities!
• You can also send a direct message via the "Let's Connect" form below or connect on LinkedIn and GitHub.`;
  }

  // Resume / CV
  if (
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("download") ||
    q.includes("pdf")
  ) {
    return `📄 Harini's Resume:
• You can view her interactive ATS-friendly A4 resume directly on the portfolio by clicking "Resume" or "Download CV" in the top navigation bar.
• Direct PDF URL: /assets/resume.pdf
• Features: Full academic history (9.33 CGPA), skills breakdown, project summaries, and certifications formatted with Times New Roman and 1.5 line spacing.`;
  }

  // Personal Info (DOB, Languages, Hobbies)
  if (q.includes("language") || q.includes("speak") || q.includes("tamil") || q.includes("english")) {
    return `Harini is fluent in English and Tamil (Native), possessing strong written and verbal communication skills.`;
  }
  if (q.includes("dob") || q.includes("birth") || q.includes("age")) {
    return `Harini P was born on October 7, 2004, and is currently pursuing her MCA in Trichy, Tamil Nadu.`;
  }
  if (q.includes("hobby") || q.includes("hobbies") || q.includes("interest") || q.includes("free time")) {
    return `In her free time, Harini enjoys exploring emerging web technologies, prototyping intuitive UI interfaces in Figma, researching AI/ML developments, and participating in tech paper presentations.`;
  }
  if (q.includes("career") || q.includes("goal") || q.includes("aim") || q.includes("future") || q.includes("aspiration")) {
    return `Harini's career objective is to join a progressive technology team as a Software Engineer / Full-Stack Developer where she can build scalable, high-impact digital solutions, contribute to clean architecture, and continue expanding her skills in modern web ecosystems.`;
  }
  if (q.includes("github")) {
    return `Harini's GitHub profile: https://github.com/Harini-pandimuniyasamy`;
  }
  if (q.includes("linkedin")) {
    return `Harini's LinkedIn profile: https://www.linkedin.com/in/harini-p-53b589417`;
  }

  // Default helpful response
  return `I’m Harini’s portfolio assistant! I can answer any questions you have about Harini P:
• Her Education (MCA 9.33 CGPA, BCA 8.81 CGPA)
• Her Skills (JavaScript, Java, PHP, MySQL, MongoDB, HTML/CSS, Figma, Power BI)
• Her Projects ("Citizen Connect" & "Direct Market Access for Farmers")
• Her 5 Internships (T4TEQ, HCIICT, IAFC, esoft)
• Her Certifications, Paper Presentations & Proficiency Prizes
• How to contact her (harinip7104@gmail.com / +91 7418490158) or download her resume.

What would you like to know?`;
}
