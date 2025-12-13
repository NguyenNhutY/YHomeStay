import React, { useState } from "react";

/**
 * Simple local message center (mock).
 * Replace with WebSocket or API for real chat.
 */

const initial = [
  {
    id: 1,
    from: "Guest: Mai",
    text: "Xin hỏi có cho nhận phòng sớm không?",
    time: "2h ago",
  },
  {
    id: 2,
    from: "System",
    text: "Booking B-1001 confirmed",
    time: "1 day ago",
  },
];

const MessageCenter = () => {
  const [msgs, setMsgs] = useState(initial);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMsgs((prev) => [
      { id: Date.now(), from: "You", text, time: "now" },
      ...prev,
    ]);
    setText("");
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2'>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Write a quick reply...'
          className='flex-1 border rounded px-3 py-2'
        />
        <button
          onClick={send}
          className='transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] px-4 py-2 bg-black text-white rounded'
        >
          Send
        </button>
      </div>

      <div className='h-48 overflow-auto space-y-3'>
        {msgs.map((m) => (
          <div
            key={m.id}
            className={`transition cursor-pointer duration-300 hover:scale-[1.03] active:scale-[0.98] p-3 rounded ${
              m.from === "You" ? "bg-black/5 self-end" : ""
            }`}
          >
            <div className='text-xs text-gray-500'>
              {m.from} • {m.time}
            </div>
            <div className='text-sm mt-1'>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MessageCenter);
