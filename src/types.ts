export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  problem: string;
  solution: string;
  features: string[];
  role: string;
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  category: "Programming" | "Domain Expertise" | "Tools & Platforms";
  usage: string;
  projectRelation?: string;
  proficiency?: string;
  iconClass?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  scoreLabel: string;
  description?: string;
}

export interface InternshipItem {
  company: string;
  domain: string;
  icon: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  type: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}
