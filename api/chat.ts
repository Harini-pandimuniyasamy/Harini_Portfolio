import type { VercelRequest, VercelResponse } from "@vercel/node";
import { askHariniAI, streamHariniAI } from "../server/geminiService.js";

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
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // ignore JSON parse error, proceed with raw body
      }
    }

    const { message, history, stream } = body || {};

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message string is required." });
    }

    // Support instant Server-Sent Events (SSE) streaming for real-time tokens
    if (stream === true) {
      res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.setHeader("X-Accel-Buffering", "no");

      for await (const token of streamHariniAI(message, Array.isArray(history) ? history : [])) {
        res.write(`data: ${JSON.stringify({ token })}\n\n`);
      }
      res.write(`data: [DONE]\n\n`);
      return res.end();
    }

    const reply = await askHariniAI(message, Array.isArray(history) ? history : []);
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("Vercel Serverless Function /api/chat error:", error);
    return res.status(200).json({
      reply: "Hi! I am Harini's portfolio assistant. Harini is a Full-Stack Web Developer and UI/UX Designer currently pursuing her MCA with a 9.33 CGPA. Feel free to ask about her projects like Citizen Connect or her technical skills!",
    });
  }
}
