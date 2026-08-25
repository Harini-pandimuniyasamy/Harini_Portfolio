import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { getFallbackAnswer } from "./knowledgeBase.js";

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Concise, highly accurate system prompt for Harini AI
const ACCURATE_SYSTEM_INSTRUCTION = `You are "Harini AI", the official portfolio assistant for Harini P.
Provide fast, direct, factually 100% accurate, and concise answers based on Harini's verified credentials:

PROFILE:
- Name: Harini P
- Title: Full-Stack Developer & UI/UX Designer
- Location: Trichy, Tamil Nadu, India
- Email: harinip7104@gmail.com | Phone: +91 7418490158
- GitHub: https://github.com/Harini-pandimuniyasamy
- LinkedIn: https://www.linkedin.com/in/harini-p-53b589417

EDUCATION:
- MCA (Master of Computer Applications): Holy Cross College (Autonomous), Trichy | 2025–2027 | CGPA: 9.33
- BCA (Bachelor of Computer Applications): Holy Cross College (Autonomous), Trichy | 2022–2025 | CGPA: 8.81
- HSC: St. Antony's Higher Secondary School, Trichy | 2021–2022 | 93%
- SSLC: St. Antony's Higher Secondary School, Trichy | 88%

PROJECTS:
1. Citizen Connect (Main Project): Full-stack citizen complaint & municipal governance platform. Features: user authentication, complaint submission with image proof, real-time ticket tracking, municipal officer admin dashboard, status updates, reports. Tech: JavaScript, MongoDB, Node.js/Express, HTML5/CSS3, Figma UI/UX.
2. Direct Market Access For Farmers (Major Project): Agri-tech web marketplace connecting rural farmers directly with consumers to eliminate middlemen. Tech: PHP, MySQL, JavaScript, HTML5/CSS3.

TECHNICAL SKILLS:
- Languages & Core: Java, JavaScript (ES6+), C, C#, PHP, HTML5, CSS3, SQL
- Databases: MongoDB (NoSQL), MySQL (Relational)
- Design & Analytics: Figma (Prototyping, Wireframing, UI/UX Systems), Power BI
- Architecture: Full-Stack Web Development, REST APIs, MVC Architecture, JWT Auth, Git/GitHub

INTERNSHIPS:
- T4TEQ (Data Analytics & Power BI)
- HCIICT (Sensor Technology & Full Stack)
- HCIICT (Full Stack Web Development)
- IAFC (Core Java & OOP)
- esoft (PHP & MySQL Web Architecture)

ACHIEVEMENTS & CERTIFICATIONS:
- Technical Papers: "AI-Based Image Recognition", "Password Strength Analyzer"
- Academic Honors: 1st/2nd Proficiency Prize in Computer Applications, 2nd Prize in Tamil & English
- Certifications: Accenture (89%), Swayam/NPTEL, ICTACADEMY, NoviTech, Wadhwani Foundation, Tally ERP

GUIDELINES:
1. Respond immediately, concisely, and factually without fluff or filler words.
2. Use bullet points or short sentences for fast readability.
3. If asked about contact or resume, provide Harini's verified email (harinip7104@gmail.com) and phone (+91 7418490158).`;

export async function askHariniAI(
  message: string,
  history: Array<{ role: "user" | "model"; text: string }> = []
): Promise<string> {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please enter a question about Harini's background, skills, or projects.";
  }

  // Fast check: If query matches known questions with 100% exact facts, get immediate instant response
  const fastAnswer = getFallbackAnswer(trimmed);
  const qLower = trimmed.toLowerCase();
  const isExactTopic =
    qLower.includes("cgpa") ||
    qLower.includes("phone") ||
    qLower.includes("email") ||
    qLower.includes("github") ||
    qLower.includes("linkedin") ||
    qLower === "who is harini?" ||
    qLower === "who is harini" ||
    qLower === "what are her skills?" ||
    qLower === "what are her skills" ||
    qLower === "tell me about citizen connect" ||
    qLower === "what is her education?" ||
    qLower === "what is her education" ||
    qLower === "how can i contact harini?" ||
    qLower === "how can i contact harini";

  if (isExactTopic && fastAnswer) {
    return fastAnswer;
  }

  const ai = getAiClient();
  if (!ai) {
    return fastAnswer;
  }

  try {
    const contents: any[] = [];
    if (history && history.length > 0) {
      const recent = history.slice(-2);
      for (const h of recent) {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: trimmed }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        systemInstruction: ACCURATE_SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 300,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    });

    const answer = response.text;
    if (answer && answer.trim()) {
      return answer.trim();
    }
    return fastAnswer;
  } catch (error) {
    console.error("Gemini API call failed, using accurate fallback:", error);
    return fastAnswer;
  }
}

export async function* streamHariniAI(
  message: string,
  history: Array<{ role: "user" | "model"; text: string }> = []
): AsyncGenerator<string, void, unknown> {
  const trimmed = message.trim();
  if (!trimmed) {
    yield "Please enter a question about Harini's background, skills, or projects.";
    return;
  }

  const fastAnswer = getFallbackAnswer(trimmed);
  const qLower = trimmed.toLowerCase();
  const isExactTopic =
    qLower.includes("phone") ||
    qLower.includes("email") ||
    qLower.includes("github") ||
    qLower.includes("linkedin") ||
    qLower === "who is harini?" ||
    qLower === "who is harini" ||
    qLower === "what are her skills?" ||
    qLower === "what are her skills" ||
    qLower === "tell me about citizen connect" ||
    qLower === "what is her education?" ||
    qLower === "what is her education" ||
    qLower === "how can i contact harini?" ||
    qLower === "how can i contact harini";

  const ai = getAiClient();
  if (!ai || isExactTopic) {
    // Ultra-fast tokenized streaming from verified knowledge base (near 0ms start latency)
    const words = fastAnswer.split(" ");
    for (let i = 0; i < words.length; i++) {
      yield (i === 0 ? "" : " ") + words[i];
      // Micro-pause (6ms) for natural, fluid real-time reading feel
      await new Promise((r) => setTimeout(r, 6));
    }
    return;
  }

  try {
    const contents: any[] = [];
    if (history && history.length > 0) {
      const recent = history.slice(-2);
      for (const h of recent) {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: trimmed }],
    });

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        systemInstruction: ACCURATE_SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 300,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
      },
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini streaming error, falling back:", error);
    const words = fastAnswer.split(" ");
    for (let i = 0; i < words.length; i++) {
      yield (i === 0 ? "" : " ") + words[i];
      await new Promise((r) => setTimeout(r, 6));
    }
  }
}

