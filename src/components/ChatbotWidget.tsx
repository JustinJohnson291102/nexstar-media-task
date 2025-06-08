import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';

// Helper: Returns an "AI" answer based on the website context
const getSmartReply = async (msg: string) => {
  // In production, replace this with a call to your intelligent backend or OpenAI/Gemini, etc.
  // Here, we use heuristics for demo purposes.
  const lower = msg.toLowerCase();

  // FAQs
  if (lower.includes('services') || lower.includes('offer')) {
    return "We offer a comprehensive suite of media solutions, including Broadcast Solutions, Digital Advertising, Content Production, Media Analytics, Audience Development, and Radio Broadcasting. Visit our Services page for details!";
  }
  if (lower.includes('contact')) {
    return "You can contact us via the form on our Contact page, by emailing info@nexstar.com, or by calling (214) 555-5555. Our headquarters are in Irving, TX.";
  }
  if (lower.includes('address') || lower.includes('location')) {
    return "Our headquarters are at 545 E John Carpenter Freeway, Suite 700, Irving, TX 75062. We also have offices in New York and Los Angeles.";
  }
  if (lower.includes('hours') || lower.includes('timing')) {
    return "We're available Monday to Friday: 9:00 AM - 5:00 PM. Closed on weekends.";
  }
  if (lower.includes('case study')) {
    return "You can read our latest client success stories on the Case Study section of our website.";
  }
  if (lower.includes('news')) {
    return "Our News page features the latest updates and announcements from Nexstar Media Group.";
  }
  if (lower.includes('about')) {
    return "Nexstar Media Group is a leading provider of media solutions, helping businesses grow with data-driven strategies and expert guidance. Check our About page for more info!";
  }
  if (lower.includes('quote') || lower.includes('consult')) {
    return "You can request a free quote or consultation by filling out the form on our Contact page.";
  }
  if (lower.includes('map') || lower.includes('find')) {
    return "You'll find an interactive map on our Contact page, showing our headquarters and other locations.";
  }
  if (lower.includes('faq')) {
    return "Our FAQ section answers common questions about our services and partnership process. Let me know your specific question!";
  }

  // General fallback
  if (
    lower.match(/hi|hello|hey|greetings|namaste|hola|bonjour|hii|sup|yo/)
  ) {
    return "Hello! 👋 How can I help you today? Ask me anything about our services, locations, or how to get in touch!";
  }

  // Default: "AI" fallback
  return "I'm Nexstar's AI assistant 🤖. I can answer questions about our services, company info, contact details, and more. Feel free to ask anything!";
};

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hi! I'm Nexstar's AI Assistant. Ask me anything about our website, services, or how to get in touch." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    const reply = await getSmartReply(userMsg);
    setMessages((msgs) => [...msgs, { from: "bot", text: reply }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          aria-label="Open chatbot"
          className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-105 transition"
          onClick={() => setOpen(true)}
        >
          <svg width={34} height={34} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.08"/>
            <path d="M11.5 19.5V17.5C11.5 15.8431 12.8431 14.5 14.5 14.5H17.5C19.1569 14.5 20.5 15.8431 20.5 17.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="13" cy="12" r="1" fill="currentColor"/>
            <circle cx="19" cy="12" r="1" fill="currentColor"/>
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b rounded-t-xl"
            style={{
              background: 'linear-gradient(90deg, #1a237e 0%, #8e24aa 100%)',
              color: 'white'
            }}
          >
            <div className="font-bold text-lg">Ask Nexstar AI</div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <X size={24} />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto" style={{ maxHeight: 340 }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.from === "user"
                    ? "flex justify-end mb-2"
                    : "flex justify-start mb-2"
                }
              >
                <div
                  className={
                    "px-3 py-2 rounded-xl text-sm " +
                    (m.from === "user"
                      ? "bg-primary text-white ml-10"
                      : "bg-gray-100 text-gray-900 mr-10")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mb-2">
                <div className="px-3 py-2 rounded-xl text-sm bg-gray-100 text-gray-900 mr-10 animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef}></div>
          </div>
          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center border-t px-2 py-2 bg-white rounded-b-xl">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border-none focus:ring-0 outline-none text-sm bg-transparent"
              placeholder="Type your message..."
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="ml-2 bg-primary text-white rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition disabled:opacity-60"
              disabled={loading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;