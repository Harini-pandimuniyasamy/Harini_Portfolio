import type { VercelRequest, VercelResponse } from "@vercel/node";
import { askHariniAI } from "../server/geminiService";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Only POST is supported." });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message string is required." });
    }

    const reply = await askHariniAI(message, Array.isArray(history) ? history : []);
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("Vercel Serverless Function /api/chat error:", error);
    return res.status(500).json({
      error: "Internal server error occurred while processing chatbot response.",
    });
  }
}
