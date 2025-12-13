import React, { memo, useState } from "react";

const conversationsMock = [
  {
    id: 1,
    guest: "Anna Nguyen",
    property: "OceanView Villa",
    lastMessage: "Can I check in early tomorrow?",
    unread: true,
    messages: [
      { from: "guest", text: "Hi 👋" },
      { from: "guest", text: "Can I check in early tomorrow?" },
    ],
  },
  {
    id: 2,
    guest: "David Tran",
    property: "Forest Cabin",
    lastMessage: "Thanks! Everything was great.",
    unread: false,
    messages: [
      { from: "guest", text: "Thanks! Everything was great." },
      { from: "owner", text: "Glad you enjoyed your stay 😊" },
    ],
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(conversationsMock[0]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setSelected((prev) => ({
      ...prev,
      messages: [...prev.messages, { from: "owner", text: input }],
    }));
    setInput("");
  };

  return (
    <section className='p-6 md:p-10 h-[calc(100vh-80px)]'>
      <div className='bg-white rounded-2xl border border-neutral-100 shadow-sm h-full grid grid-cols-1 md:grid-cols-3 overflow-hidden'>
        {/* LEFT – Conversations */}
        <aside className='border-r p-4 overflow-y-auto'>
          <h2 className='text-sm text-neutral-500 mb-4'>Conversations</h2>

          <ul className='space-y-2'>
            {conversationsMock.map((c) => (
              <li
                key={c.id}
                onClick={() => setSelected(c)}
                className={`
                  p-3 rounded-xl cursor-pointer
                  transition
                  ${
                    selected.id === c.id
                      ? "bg-neutral-100"
                      : "hover:bg-neutral-50"
                  }
                `}
              >
                <div className='flex items-center justify-between'>
                  <p className='font-medium text-sm'>{c.guest}</p>
                  {c.unread && (
                    <span className='w-2 h-2 bg-neutral-900 rounded-full' />
                  )}
                </div>

                <p className='text-xs text-neutral-500'>{c.property}</p>

                <p className='text-sm text-neutral-600 truncate mt-1'>
                  {c.lastMessage}
                </p>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT – Messages */}
        <main className='md:col-span-2 flex flex-col'>
          {/* Header */}
          <header className='border-b px-6 py-4'>
            <h3 className='font-medium'>{selected.guest}</h3>
            <p className='text-sm text-neutral-500'>{selected.property}</p>
          </header>

          {/* Message list */}
          <div className='flex-1 p-6 space-y-4 overflow-y-auto bg-neutral-50'>
            {selected.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "owner" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[70%] px-4 py-2 rounded-2xl text-sm
                    ${
                      msg.from === "owner"
                        ? "bg-neutral-900 text-white"
                        : "bg-white border"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className='border-t px-4 py-3 flex gap-3'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Write a message…'
              className='
                flex-1 px-4 py-2 rounded-xl
                border border-neutral-200
                focus:border-neutral-400 focus:ring-0
                transition
              '
            />

            <button
              onClick={handleSend}
              className='
                px-4 py-2 rounded-xl text-sm
                bg-neutral-900 text-white
                hover:bg-neutral-800
                transition
              '
            >
              Send
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};
export default memo(Inbox);
