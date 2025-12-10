import React, { useState, memo } from "react";
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const scenarios = [
    {
      keywords: ["room", "booking", "book"],
      reply:
        "You can book a room directly on our website or contact support for assistance.",
    },
    {
      keywords: ["cancel", "cancellation", "refund"],
      reply: "Free cancellation is available up to 48 hours before check-in.",
    },
    {
      keywords: ["price", "cost", "rate"],
      reply:
        "Our room rates vary by season. Please check our pricing page for details.",
    },
    {
      keywords: ["pickup", "airport", "transfer"],
      reply:
        "We offer airport pickup for an additional fee. Contact us to arrange it.",
    },
    {
      keywords: ["wifi", "internet", "connection"],
      reply: "Free high-speed WiFi is available in all rooms and common areas.",
    },
    {
      keywords: ["support", "help", "contact"],
      reply:
        "You can reach our support via email at support@phanhomestay.com or call +84 123 456 789.",
    },
  ];

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // AI reply logic
    const lowerInput = input.toLowerCase();
    let reply = "Thank you! Our support team will reply soon.";

    for (let scenario of scenarios) {
      if (scenario.keywords.some((kw) => lowerInput.includes(kw))) {
        reply = scenario.reply;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  return (
    <div className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] fixed bottom-6 right-6 z-50 flex flex-col items-end'>
      {/* Chat popup */}
      {open && (
        <div className='w-80 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden mb-2'>
          <div className='bg-secondary text-white px-4 py-2 font-semibold flex justify-between items-center'>
            <span>Support Chat</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className='p-4 flex-1 h-64 overflow-y-auto space-y-2'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.from === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded ${
                    msg.from === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className='flex border-t border-gray-300'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type a message...'
              className='flex-1 px-3 py-2 outline-none'
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className='bg-secondary text-white px-4 py-2 hover:bg-secondary/80'
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Chat toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className='bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-secondary/80 transition'
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default memo(Chatbot);
