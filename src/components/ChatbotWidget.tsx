import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "../types";
import { getInstantAnswer } from "../utils/instantAnswers";

interface ChatbotWidgetProps {
  onOpenResume: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi! I’m Harini’s portfolio assistant. How can I help you today?",
      timestamp: "Just now",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTypingInitial, setIsTypingInitial] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [lastUserPrompt, setLastUserPrompt] = useState<string | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Exact suggested questions
  const suggestedQuestions = [
    "Who is Harini?",
    "What are her skills?",
    "Tell me about Citizen Connect",
    "What is her education?",
    "Show me her GitHub",
    "How can I contact Harini?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages, isTypingInitial]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || loading) return;

    setErrorState(null);
    setLastUserPrompt(text);

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setLoading(true);
    setIsTypingInitial(true);

    // Fast Path 1: Check instant local knowledge base for verified 100% immediate answer
    const instant = getInstantAnswer(text);
    if (instant) {
      setIsTypingInitial(false);
      const aiMsgId = `ai-${Date.now()}`;
      const words = instant.split(" ");
      let accumulated = "";

      // Initialize message container
      setMessages((prev) => [
        ...prev,
        {
          id: aiMsgId,
          sender: "assistant",
          text: "",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);

      // Ultra-rapid word stream (6ms per token) for fluid instant typing
      for (let i = 0; i < words.length; i++) {
        accumulated += (i === 0 ? "" : " ") + words[i];
        const currentText = accumulated;
        setMessages((prev) =>
          prev.map((m) => (m.id === aiMsgId ? { ...m, text: currentText } : m))
        );
        await new Promise((r) => setTimeout(r, 6));
      }

      setLoading(false);
      return;
    }

    try {
      const history = messages
        .filter((m) => m.id !== "welcome" && !m.id.startsWith("ai-err"))
        .slice(-3)
        .map((m) => ({
          role: m.sender === "user" ? ("user" as const) : ("model" as const),
          text: m.text,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: history,
          stream: true,
        }),
      });

      if (!res.ok) {
        throw new Error("Chat request failed");
      }

      // Check if response is an SSE stream
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("text/event-stream") && res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let aiTextAccumulated = "";
        const aiMsgId = `ai-${Date.now()}`;

        let hasCreatedAiMessage = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data: ")) continue;

            const dataStr = trimmedLine.replace("data: ", "").trim();
            if (dataStr === "[DONE]") {
              break;
            }

            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.token) {
                if (!hasCreatedAiMessage) {
                  hasCreatedAiMessage = true;
                  setIsTypingInitial(false);
                  aiTextAccumulated += parsed.token;
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: aiMsgId,
                      sender: "assistant",
                      text: aiTextAccumulated,
                      timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }),
                    },
                  ]);
                } else {
                  aiTextAccumulated += parsed.token;
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === aiMsgId ? { ...msg, text: aiTextAccumulated } : msg
                    )
                  );
                }
              }
            } catch (e) {
              // Non-JSON token
            }
          }
        }

        if (!hasCreatedAiMessage && aiTextAccumulated === "") {
          throw new Error("No response tokens received");
        }
      } else {
        // Fallback standard JSON response
        const data = await res.json();
        setIsTypingInitial(false);
        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: "assistant",
          text: data.reply || "I'm here to help with questions about Harini's background, education, and projects.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      }

      setIsTypingInitial(false);
      setLoading(false);
    } catch (err) {
      console.error("Chatbot error:", err);
      setIsTypingInitial(false);
      setLoading(false);

      // Even on network disconnect, provide accurate fallback answer
      const fallbackText =
        getInstantAnswer(text) ||
        "Harini P is a Full-Stack Developer and UI/UX Designer (MCA with 9.33 CGPA). Feel free to ask about Citizen Connect, her skills, or contact details!";

      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: "assistant",
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "assistant",
        text: "Chat cleared! How can I assist you with Harini's background, skills, or projects?",
        timestamp: "Just now",
      },
    ]);
    setErrorState(null);
    setLastUserPrompt(null);
  };

  const handleRetry = () => {
    if (lastUserPrompt) {
      handleSendMessage(lastUserPrompt);
    }
  };

  return (
    <div id="ask-harini-widget" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Chat Drawer / Card */}
      {isOpen && (
        <div
          id="chat-drawer-panel"
          className="w-[92vw] sm:w-[380px] md:w-[420px] h-[530px] max-h-[82vh] glass-panel rounded-3xl border border-[#B99AFF]/40 shadow-2xl flex flex-col overflow-hidden mb-3 animate-scaleUp text-left"
        >
          {/* Header */}
          <div className="p-4 bg-[#141124] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#B99AFF] flex items-center justify-center text-[#090711] font-bold text-sm shadow-[0_0_10px_rgba(185,154,255,0.6)]">
                  HP
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#141124]"></span>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                  Ask Harini AI
                  <span className="text-[10px] font-semibold bg-[#B99AFF]/20 text-[#d4bbff] px-2 py-0.5 rounded-full">
                    Portfolio Assistant
                  </span>
                </h4>
                <p className="text-[11px] text-gray-400">
                  Fast, accurate answers about Harini P
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Clear Chat Button */}
              <button
                id="clear-chat-btn"
                onClick={handleClearChat}
                aria-label="Clear chat"
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs transition-colors flex items-center gap-1 border border-white/10"
                title="Clear Chat"
              >
                <i className="fas fa-trash-alt text-[10px]"></i>
                <span className="text-[10px] font-medium hidden sm:inline">Clear</span>
              </button>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chat window"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white text-xs transition-colors"
                title="Minimize"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Suggested Questions Chips */}
          <div className="p-2.5 bg-[#141122]/60 border-b border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
            {suggestedQuestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={loading}
                className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-[#B99AFF]/20 hover:text-[#d4bbff] border border-white/10 text-[11px] text-gray-300 font-medium transition-colors shrink-0 cursor-pointer disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs md:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-[#B99AFF] text-[#141122] font-medium rounded-br-none shadow-md"
                      : "bg-white/10 text-gray-200 border border-white/10 rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}

                  {/* Contextual Action Button if resume is mentioned */}
                  {(msg.text.toLowerCase().includes("resume") || msg.text.toLowerCase().includes("cv")) && (
                    <div className="mt-2.5 pt-2 border-t border-white/10">
                      <button
                        onClick={onOpenResume}
                        className="bg-[#B99AFF] text-[#141122] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#d4bbff] transition-colors"
                      >
                        <i className="fas fa-file-pdf"></i> Open Resume Viewer
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator: "Harini AI is typing..." */}
            {isTypingInitial && (
              <div className="flex items-center gap-2 p-3 bg-white/5 rounded-2xl max-w-[220px] border border-white/10 text-xs text-[#d4bbff] animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#B99AFF] animate-ping"></span>
                <span>Harini AI is typing...</span>
              </div>
            )}

            {/* Try Again Button on error */}
            {errorState && !loading && (
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleRetry}
                  className="px-3.5 py-1.5 rounded-full bg-[#7C4DFF] hover:bg-[#9d71fa] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <i className="fas fa-redo text-[10px]"></i> Try Again
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#141124] border-t border-white/10 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question about Harini..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-3.5 py-2.5 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#B99AFF] transition-all"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={loading || !inputText.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-2xl bg-[#B99AFF] text-[#141122] flex items-center justify-center font-bold text-sm hover:bg-[#d4bbff] disabled:opacity-40 transition-colors shrink-0 shadow-md cursor-pointer"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="ask-harini-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Harini AI Chatbot"
        className="group bg-gradient-to-r from-[#B99AFF] to-[#7C4DFF] text-white p-3.5 md:p-4 rounded-full shadow-[0_0_20px_rgba(185,154,255,0.7)] flex items-center gap-2.5 hover:scale-105 transition-all duration-300 btn-pulse relative"
      >
        <div className="w-6 h-6 rounded-full bg-white text-[#4B269C] flex items-center justify-center font-bold text-xs">
          <i className="fas fa-robot"></i>
        </div>
        <span className="font-bold text-xs md:text-sm tracking-wide hidden sm:inline text-[#141122] font-sans">
          Ask Harini AI
        </span>

        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-[#141122]">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
