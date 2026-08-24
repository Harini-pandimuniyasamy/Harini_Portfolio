import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { generateResumePdf } from "./server/generateResume.js";
import { askHariniAI } from "./server/geminiService.js";
import { HARINI_DATA } from "./server/knowledgeBase.js";

dotenv.config();

// Ensure resume PDF is built
try {
  generateResumePdf();
} catch (e) {
  console.warn("Resume PDF generation non-fatal error:", e);
}

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Basic Rate Limiting
interface RateLimitRecord {
  count: number;
  firstRequest: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function rateLimiter(limit: number, windowMs: number) {
  return (req: Request, res: Response, next: () => void) => {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = (typeof forwarded === "string" ? forwarded.split(",")[0].trim() : null) || req.ip || req.socket.remoteAddress || "anonymous";
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
      return next();
    }

    if (now - record.firstRequest > windowMs) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
      return next();
    }

    if (record.count >= limit) {
      return res.status(429).json({
        error: "Too many requests. Please slow down and try again shortly.",
      });
    }

    record.count++;
    return next();
  };
}

// ==================== API ROUTES ====================

// Health Check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    app: "Harini P Portfolio",
    timestamp: new Date().toISOString(),
  });
});

// Profile Data
app.get("/api/profile", (_req: Request, res: Response) => {
  res.json(HARINI_DATA);
});

// AI Chatbot Route ("Ask Harini") - Supports standard JSON and Server-Sent Events (SSE) streaming
app.post(
  "/api/chat",
  rateLimiter(45, 60 * 1000), // 45 requests per minute
  async (req: Request, res: Response) => {
    try {
      const { message, history, stream } = req.body;
      if (!message || typeof message !== "string" || message.trim().length === 0) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (message.length > 500) {
        return res.status(400).json({ error: "Message is too long (max 500 characters)" });
      }

      // If client requests SSE stream
      if (stream === true || req.query.stream === "true") {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        res.flushHeaders?.();

        const { streamHariniAI } = await import("./server/geminiService");
        try {
          for await (const token of streamHariniAI(message, history)) {
            res.write(`data: ${JSON.stringify({ token })}\n\n`);
          }
          res.write(`data: [DONE]\n\n`);
          res.end();
        } catch (streamErr) {
          console.error("Stream generation error:", streamErr);
          res.write(`data: ${JSON.stringify({ error: "Stream error" })}\n\n`);
          res.end();
        }
        return;
      }

      const reply = await askHariniAI(message, history);
      return res.json({ reply });
    } catch (err: any) {
      console.error("Chat error:", err);
      return res.status(500).json({
        error: "Sorry, I'm having trouble responding right now. Please try again.",
      });
    }
  }
);

// Serve Resume PDF directly
app.get(["/resume.pdf", "/assets/resume.pdf"], (req: Request, res: Response) => {
  const filePath = path.resolve(process.cwd(), "public", "assets", "resume.pdf");
  res.sendFile(filePath, (err) => {
    if (err) {
      // Regenerate and send if missing
      try {
        generateResumePdf();
        res.sendFile(filePath);
      } catch (e) {
        res.status(404).send("Resume file not found.");
      }
    }
  });
});

// ==================== VITE / STATIC SETUP ====================

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Harini Portfolio Server running on port ${PORT}`);
  });
}

start();
