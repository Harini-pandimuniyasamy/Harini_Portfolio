import { GoogleGenAI } from "@google/genai";
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

// Compact, high-precision system instruction for low latency & high accuracy
const COMPACT_SYSTEM_INSTRUCTION = `You are "Harini AI", the official, friendly and concise portfolio assistant for HARINI P.
Answer questions accurately based ONLY on the verified information below.

PERSONAL & CONTACT:
- Name: HARINI P
- Email: harinip7104@gmail.com
- Phone: 7418490158
- GitHub: https://github.com/Harini-pandimuniyasamy
- LinkedIn: https://www.linkedin.com/in/harini-p-53b589417

EDUCATION:
- MCA (Master of Computer Applications): Holy Cross College (Autonomous), Trichy | 2025-2027 | CGPA: 9.33
- BCA (Bachelor of Computer Applications): Holy Cross College (Autonomous), Trichy | 2022-2025 | CGPA: 8.81
- HSC: St. Antony’s Higher Secondary School, Trichy | 93%

SKILLS & PREFERRED INTERESTS:
- Preferred Interests: UI/UX Design (Figma wireframing, component design systems, prototyping), Frontend Development (modern JavaScript/TypeScript, responsive Tailwind CSS, dynamic state), Full Stack Development (end-to-end architectures, MongoDB/MySQL databases, RESTful flows).
- Technical Skills: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, Git, GitHub, UI/UX Design, Figma, PHP, MySQL, Power BI.

MAIN PROJECT:
- Citizen Connect: A full-stack citizen complaint management platform bridging communication between local authorities and residents.
  Features: User registration, login, complaint submission, complaint image upload, complaint tracking, admin dashboard, complaint management, status updates, reports, JWT authentication, MongoDB database.
  Technologies: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, REST APIs, JWT, Git, GitHub.

OTHER PROJECTS:
- Direct Market Access For Farmers: An agri-tech web platform created with PHP, MySQL, JavaScript, HTML/CSS connecting rural farmers directly with consumers to eliminate middlemen.

INTERNSHIPS:
- T4TEQ (Data Analytics & Power BI), HCIICT (Full Stack Web & Sensors), IAFC (Core Java), esoft (PHP/MySQL).

RULES & TONE:
1. Tone: Professional, friendly, natural, concise, and helpful.
2. Provide direct, scannable answers. Do NOT write unnecessary long paragraphs unless asked.
3. If information is not available, explicitly say: "I don't have that information about Harini yet."
4. Never invent work experience, salary, unlisted awards, or unprovided skills.`;

export async function askHariniAI(
  message: string,
  history: Array<{ role: "user" | "model"; text: string }> = []
): Promise<string> {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please enter a question about Harini's background, skills, or projects.";
  }

  const ai = getAiClient();
  if (!ai) {
    return getFallbackAnswer(trimmed);
  }

  try {
    const contents: any[] = [];
    if (history && history.length > 0) {
      const recent = history.slice(-3);
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
      model: "gemini-3.5-flash-lite",
      contents: contents,
      config: {
        systemInstruction: COMPACT_SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 250,
      },
    });

    const answer = response.text;
    if (answer && answer.trim()) {
      return answer.trim();
    }
    return getFallbackAnswer(trimmed);
  } catch (error) {
    console.error("Gemini API call failed, using fallback:", error);
    return getFallbackAnswer(trimmed);
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

  const ai = getAiClient();
  if (!ai) {
    // Fast word-by-word streaming simulation for deterministic fallback
    const fallback = getFallbackAnswer(trimmed);
    const words = fallback.split(" ");
    for (let i = 0; i < words.length; i++) {
      yield (i === 0 ? "" : " ") + words[i];
      await new Promise((r) => setTimeout(r, 12));
    }
    return;
  }

  try {
    const contents: any[] = [];
    if (history && history.length > 0) {
      const recent = history.slice(-3);
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
      model: "gemini-3.5-flash-lite",
      contents: contents,
      config: {
        systemInstruction: COMPACT_SYSTEM_INSTRUCTION,
        temperature: 0.1,
        maxOutputTokens: 250,
      },
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini streaming error, falling back:", error);
    const fallback = getFallbackAnswer(trimmed);
    yield fallback;
  }
}
