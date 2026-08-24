import { Project, SkillItem, EducationItem, InternshipItem, AchievementItem } from "../types";
import farmersMarketImg from "../assets/images/farmers_market_1787584276643.jpg";

export const PERSONAL_INFO = {
  name: "HARINI P",
  shortName: "Harini",
  initials: "HP",
  title: "Full-Stack Developer & UI/UX Designer",
  typingRoles: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "MCA Student (CGPA: 9.33)",
    "Web Developer"
  ],
  bio: 'Driven MCA student with a 9.33 CGPA. Passionate about leveraging technology to solve real-world problems. Creator of the impactful "Citizen Connect" and "Direct Market Access for Farmers" projects. Dedicated to crafting clean, efficient, and user-centric applications.',
  email: "harinip7104@gmail.com",
  phone: "7418490158",
  location: "Trichy, India",
  dob: "October 7, 2004",
  languages: ["Tamil", "English"],
  github: "https://github.com/Harini-pandimuniyasamy",
  linkedin: "https://www.linkedin.com/in/harini-p-53b589417",
  resumeUrl: "/assets/resume.pdf",
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUP8JqUHSeVP6nWg36FwIf377gfoeWL_NmFsf5VqtERcpNGbi0kd8AitfwJtH7f9g5J6LfASpZ5HIQVevKVT_-4mCi-N-IWwyDOxD14b8D-fVw34Eg4ESkuLvwHclGLV9FKV6K3CBMIFIDlT6VN82ED8XASv8NXEZ01Refkckd7B_d_GSC0Ze_i_r1CGlzzPhR_fUEa4OyflZaHCO798fzrixldhO-RMQ1OMi6a_2XXn0I5OilErAk0pDsUCigyd1S698PlLobAg5w",
  availabilityStatus: "Available for Opportunities",
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master of Computer Applications",
    institution: "Holy Cross College",
    period: "2025 - 2027",
    score: "9.33 CGPA",
    scoreType: "CGPA",
    scoreLabel: "9.33 CGPA",
    description: "Achieved excellent academic performance while working on impactful projects like Direct Market Access for Farmers and Citizen Connect.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Holy Cross College",
    period: "2022 - 2025",
    score: "8.81 CGPA",
    scoreType: "CGPA",
    scoreLabel: "8.81 CGPA",
    description: "Built a strong foundation in programming, algorithms, database systems, and software development principles.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "St. Antony's Higher Secondary School, Trichy",
    period: "2021 - 2022",
    score: "93%",
    scoreType: "Percentage",
    scoreLabel: "93%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. Antony's Higher Secondary School, Trichy",
    period: "2019 - 2020",
    score: "88%",
    scoreType: "Percentage",
    scoreLabel: "88%",
  },
];

export const SKILLS_LIST: SkillItem[] = [
  // Programming
  {
    name: "JavaScript",
    category: "Programming",
    usage: "Used for client-side interactivity, asynchronous AJAX/Fetch calls, event workflows, and full-stack application logic.",
    projectRelation: "Citizen Connect & Web Applications",
    iconClass: "fab fa-js-square",
  },
  {
    name: "Java",
    category: "Programming",
    usage: "Applied for Object-Oriented Programming (OOP), algorithmic design, and during IAFC Core Java internship.",
    projectRelation: "IAFC Internship & Academic Coursework",
    iconClass: "fab fa-java",
  },
  {
    name: "C",
    category: "Programming",
    usage: "Used for structured programming fundamentals, control structures, and memory concepts.",
    projectRelation: "Computer Applications Core",
    iconClass: "fas fa-code",
  },
  {
    name: "C#",
    category: "Programming",
    usage: "Used in Visual Studio for desktop application programming and software development exercises.",
    projectRelation: "Visual Studio Lab Applications",
    iconClass: "fas fa-laptop-code",
  },
  {
    name: "HTML",
    category: "Programming",
    usage: "Used for accessible semantic markup, responsive structures, and form architectures across all web projects.",
    projectRelation: "Citizen Connect & Farmers Market Platform",
    iconClass: "fab fa-html5",
  },
  {
    name: "CSS",
    category: "Programming",
    usage: "Used for modern responsive layouts, custom animations, flexbox/grid architectures, and glassmorphic UI.",
    projectRelation: "All Web Projects & UI Prototyping",
    iconClass: "fab fa-css3-alt",
  },
  {
    name: "PHP",
    category: "Programming",
    usage: "Used in the server-side backend of 'Direct Market Access for Farmers' and during esoft internship.",
    projectRelation: "Direct Market Access for Farmers & esoft",
    iconClass: "fab fa-php",
  },
  {
    name: "SQL",
    category: "Programming",
    usage: "Used for schema creation, relational data modeling, indexing, queries, and data integrity operations.",
    projectRelation: "Database Management & MySQL Projects",
    iconClass: "fas fa-database",
  },

  // Domain Expertise
  {
    name: "Full Stack Web Development",
    category: "Domain Expertise",
    usage: "End-to-end development of responsive web applications covering front-end interfaces, backend services, and databases.",
    projectRelation: "Citizen Connect & HCIICT Internships",
    iconClass: "fas fa-layer-group",
  },
  {
    name: "Database Management",
    category: "Domain Expertise",
    usage: "Designing structured relational (MySQL) and document-based (MongoDB) data stores with proper indexing and security.",
    projectRelation: "MongoDB in Citizen Connect & MySQL",
    iconClass: "fas fa-database",
  },
  {
    name: "UI/UX Design",
    category: "Domain Expertise",
    usage: "Creating intuitive user experiences, wireframes, component design systems, and responsive interactive prototypes.",
    projectRelation: "Figma Design & Application Interfaces",
    iconClass: "fas fa-bezier-curve",
  },

  // Tools & Platforms
  {
    name: "Figma",
    category: "Tools & Platforms",
    usage: "Used for UI/UX design, wireframing, high-fidelity prototypes, and component library design.",
    projectRelation: "Citizen Connect Prototyping & Portfolio UI",
    iconClass: "fab fa-figma",
  },
  {
    name: "MongoDB",
    category: "Tools & Platforms",
    usage: "NoSQL document database used as the primary storage for Citizen Connect user accounts, complaints, and logs.",
    projectRelation: "Citizen Connect Database",
    iconClass: "fas fa-leaf",
  },
  {
    name: "MySQL",
    category: "Tools & Platforms",
    usage: "Relational database used for structured tabular data in 'Direct Market Access for Farmers' and esoft internship.",
    projectRelation: "Direct Market Access for Farmers",
    iconClass: "fas fa-table",
  },
  {
    name: "Power BI",
    category: "Tools & Platforms",
    usage: "Used during T4TEQ internship for data modeling, interactive dashboards, and business KPI visualization.",
    projectRelation: "T4TEQ Data Analytics Internship",
    iconClass: "fas fa-chart-pie",
  },
  {
    name: "Visual Studio",
    category: "Tools & Platforms",
    usage: "Used for C# application development, debugging, and solution build environments.",
    projectRelation: "Application Development",
    iconClass: "fas fa-code-branch",
  },
  {
    name: "Tally ERP",
    category: "Tools & Platforms",
    usage: "Certified knowledge in commercial ledger management, billing entries, and financial data recordkeeping.",
    projectRelation: "Tally Certification",
    iconClass: "fas fa-file-invoice-dollar",
  },
  {
    name: "MS Word",
    category: "Tools & Platforms",
    usage: "Technical documentation, academic project reports, research paper presentation drafts, and resumes.",
    projectRelation: "Project Documentation & Reports",
    iconClass: "fas fa-file-word",
  },
  {
    name: "MS PowerPoint",
    category: "Tools & Platforms",
    usage: "Creating professional presentation decks for paper presentations (AI Image Recognition, Password Analyzer).",
    projectRelation: "Technical Paper Presentations",
    iconClass: "fas fa-file-powerpoint",
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "citizen-connect",
    name: "Citizen Connect",
    category: "Full-Stack Web Application (Main Project)",
    badge: "Main Project",
    tagline: "A Citizen Grievance Redressal and Municipal Engagement Platform",
    description: "Citizen Connect is a full-stack citizen complaint management platform designed to bridge the gap between local authorities and residents, streamlining community issue reporting, complaint image upload, real-time tracking, and administrative resolution.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdsyhLQRYmlzrDK2G3vrLLTJfUYMBeyo4TcIhwD--YPVo4jyCXlpXgSNEaufaOMlZfgEdiRF2mqX6yMvvWScC7Gle3YCeHni6Sxyjsu9PVf0Tdgig9arJzaYLesDGefGxdXCLY4ADDmkY0LlgIWOaJpWBVz65dz-_z0gjDTeoEv-g4P5fpnVb8sdH-Rjaqt0pyjVbwdWjXCgswf9YH3gcxIpDoPDU--eN26BmvckGPG_S3w5Hf0yw",
    tags: ["Full Stack", "Web Development", "MongoDB", "Figma UI/UX"],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MongoDB",
      "UI/UX Design",
      "Figma"
    ],
    problem: "Citizens frequently encounter infrastructural or civic problems (such as road damage, sanitation issues, lighting failures) but struggle with outdated, slow, and non-transparent reporting mechanisms that leave complaints unmonitored.",
    solution: "Citizen Connect delivers a streamlined web application where citizens can register, submit issues with visual photo evidence, track grievance progress through live status indicators, while municipal officers manage and resolve tickets through an administrative portal.",
    features: [
      "User Registration & Secure Login Portal",
      "Complaint Submission with Multimedia Image/Proof Upload",
      "Real-time Ticket Tracking (Submitted → In Review → In Progress → Resolved)",
      "Dedicated Admin Dashboard for Municipal Officers",
      "Grievance Categorization, Filter by Department & Priority",
      "Status Update Notification Logs",
      "Analytical Reports & Civic Metrics Overview"
    ],
    role: "Full-Stack Developer & UI/UX Designer – Conducted user flow research, drafted wireframes and interactive prototypes in Figma, implemented database models with MongoDB schemas, and built the responsive user dashboard.",
    outcome: "Successfully engineered an end-to-end municipal grievance platform that significantly improves transparency and community responsiveness.",
    githubUrl: "https://github.com/Harini-pandimuniyasamy",
  },
  {
    id: "farmers-market",
    name: "Direct Market Access For Farmers",
    category: "Agri-Tech Web Platform (Major Project)",
    badge: "Major Project",
    tagline: "Empowering Rural Farmers with Direct Consumer Market Linkages",
    description: "A comprehensive platform designed to empower farmers by connecting them directly with consumers and markets. This solution eliminates intermediaries, ensuring better profit margins for farmers while providing consumers with fresh produce. Built with user-centric design principles to accommodate varying levels of digital literacy among users in rural areas.",
    image: farmersMarketImg,
    tags: ["Web Platform", "Developer", "PHP/MYSQL", "Rural UX"],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "UI/UX Design"],
    problem: "Agricultural producers often rely on long chains of middlemen and brokers who take substantial cuts, resulting in low farmer realization prices despite high retail consumer costs.",
    solution: "A direct digital marketplace where local farmers can easily list their harvested produce, set transparent prices, and connect directly with local consumers and retailers.",
    features: [
      "Farmer Produce Listings & Inventory Management",
      "Consumer Marketplace Browsing & Direct Communication",
      "Simplified, High-Contrast UI Tailored for Rural Digital Literacy",
      "Transparent Pricing & Order Inquiries",
      "Category Filtering (Vegetables, Fruits, Grains)"
    ],
    role: "Lead Developer – Designed the relational database architecture in MySQL, built the server-side PHP data handling, and styled accessible responsive front-end views.",
    outcome: "Demonstrated a viable digital marketplace prototype that fosters fair farmer pricing and community trade.",
    githubUrl: "https://github.com/Harini-pandimuniyasamy",
  },
];

export const INTERNSHIPS_LIST: InternshipItem[] = [
  {
    company: "T4TEQ",
    domain: "Data Analytics, Data Visualization",
    icon: "fas fa-chart-bar",
    description: "Conducted data exploration, structured metric datasets, and created dynamic KPI visualization reports with Power BI.",
  },
  {
    company: "HCIICT",
    domain: "Sensor Technology, Full Stack",
    icon: "fas fa-microchip",
    description: "Hands-on experience in sensor-integrated interface hardware-software workflows and web dashboard architecture.",
  },
  {
    company: "HCIICT",
    domain: "Full Stack Web Development",
    icon: "fas fa-laptop-code",
    description: "Engineered responsive client-server web components, API integrations, and database interactions.",
  },
  {
    company: "IAFC",
    domain: "Core Java",
    icon: "fab fa-java",
    description: "Mastered Object-Oriented programming, classes, inheritance, exception handling, and collections in Java.",
  },
  {
    company: "esoft",
    domain: "PHP/MYSQL",
    icon: "fab fa-php",
    description: "Developed server-side web scripting modules, query optimization, and relational database management in MySQL.",
  },
];

export const CERTIFICATIONS_LIST: string[] = [
  "Domestic Data Entry Operator",
  "Type Writing",
  "Tally",
  "Swayam/NPTEL courses",
  "NoviTech",
  "Wadhwani",
  "ICTACADEMY",
  "Accenture (89%)",
  "Workshops/seminars",
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: "AI-Based Image Recognition",
    type: "Paper presentation",
    description: "Presented research paper analyzing image classification models, feature extractors, and neural network techniques.",
    icon: "fas fa-brain",
  },
  {
    title: "Password Strength Analyzer",
    type: "Paper presentation",
    description: "Authored and presented technical analysis on password entropy calculations and user authentication security.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Proficiency Prizes",
    type: "Academic Honors",
    description: "Secured 2nd prize in Tamil & English languages, and 1st / 2nd in Computer Applications coursework.",
    icon: "fas fa-medal",
  },
];
