import { useEffect, useRef, useState } from "react";
import { FaBolt, FaPaperPlane, FaRobot } from "react-icons/fa6";

const quickPrompts = [
  "What services do you offer?",
  "Tell me about Rahul's projects",
  "What tech stack does Rahul use?",
  "How can I contact Rahul?",
];

const Chatbot = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        "Hi! I’m Rahul’s AI assistant. Ask me about his projects, skills, experience, or how to get in touch.",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text:
            data.reply ||
            "I’m here to help with Rahul’s work and portfolio. Try asking about his projects or tech stack.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text:
            "The assistant is temporarily unavailable. Please try again in a moment or contact Rahul directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const panelStyles = darkMode
    ? "border-slate-700 bg-slate-900/90 text-slate-100"
    : "border-slate-200 bg-white/90 text-slate-900";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className={`w-[min(92vw,24rem)] overflow-hidden rounded-3xl border shadow-2xl shadow-cyan-950/20 ${panelStyles}`}>
          <div className="flex items-center justify-between border-b border-slate-700/80 bg-cyan-500/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <FaRobot size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold">Rahul AI</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-800/60 px-2 py-1 text-xs text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="chat-scrollbar flex max-h-[24rem] min-h-[20rem] flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.sender === "user"
                    ? "ml-auto bg-cyan-500 text-slate-950"
                    : darkMode
                      ? "bg-slate-800 text-slate-100"
                      : "bg-slate-100 text-slate-800"
                }`}
              >
                {message.text}
              </div>
            ))}

            {isLoading && (
              <div
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  darkMode ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-800"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <FaBolt className="text-cyan-400" size={12} />
                  Thinking...
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-700/80 p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/70 px-2 py-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Ask about Rahul..."
                className="flex-1 bg-transparent px-2 py-1 text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                disabled={isLoading}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full border border-cyan-400/60 bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
        >
          <FaRobot size={15} />
          Ask AI
        </button>
      )}
    </div>
  );
};

export default Chatbot;
