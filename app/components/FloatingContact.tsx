'use client';

import { useState, useEffect, useRef } from 'react';
import {
  getBotReply,
  WELCOME_MESSAGE,
  QUICK_REPLIES,
  GYM_INFO,
} from '@/app/lib/chatbotData';

type Message = {
  role: 'bot' | 'user';
  text: string;
};

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(trimmed);
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
      setTyping(false);
    }, 500);
  };

  return (
    <>
      {/* ===== Chat Panel ===== */}
      <div
        className={`fixed bottom-6 right-6 z-[95] w-[calc(100vw-48px)] max-w-[380px] bg-neutral-950 border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 origin-bottom-right ${
          chatOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white">
            🏋️
          </div>
          <div className="flex-1">
            <div className="font-display text-sm text-white leading-none">
              FitLife Assistant
            </div>
            <div className="font-condensed text-[0.6rem] tracking-[0.2em] uppercase text-sky-200 font-semibold mt-1">
              ● Online
            </div>
          </div>
          <button
            onClick={() => setChatOpen(false)}
            aria-label="Close chat"
            className="text-white/80 hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="h-[360px] overflow-y-auto p-4 space-y-3 bg-neutral-950">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-t-2xl rounded-bl-2xl rounded-br-sm'
                    : 'bg-neutral-900 text-white/90 border border-white/10 rounded-t-2xl rounded-br-2xl rounded-bl-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-neutral-900 border border-white/10 px-4 py-2.5 rounded-t-2xl rounded-br-2xl rounded-bl-sm flex gap-1">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2 bg-neutral-950">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="font-condensed text-[0.65rem] tracking-[0.15em] uppercase font-bold px-3 py-1.5 border border-sky-400/40 text-sky-400 hover:bg-sky-400/10 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-white/10 p-3 flex gap-2 bg-black"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-neutral-900 border border-white/10 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-blue-600 transition-colors"
          />
          <button
            type="submit"
            aria-label="Send"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 font-bold transition-colors"
          >
            ➤
          </button>
        </form>
      </div>

      {/* ===== Main FAB menu ===== */}
      <div
        className={`fixed bottom-6 right-6 z-[90] transition-all duration-500 ${
          visible && !chatOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <div
          className={`flex flex-col gap-3 mb-3 transition-all duration-300 origin-bottom ${
            open
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <a
            href={`tel:${GYM_INFO.phoneRaw}`}
            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-5 py-3 shadow-lg shadow-blue-600/30 transition-all"
            style={{
              clipPath:
                'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
            }}
          >
            <span className="text-lg">📞</span>
            <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
              Call Now
            </span>
          </a>

          <button
            onClick={() => {
              setChatOpen(true);
              setOpen(false);
            }}
            className="group flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white pl-4 pr-5 py-3 shadow-lg shadow-sky-500/30 transition-all"
            style={{
              clipPath:
                'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
            }}
          >
            <span className="text-lg">🤖</span>
            <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
              Ask FitLife AI
            </span>
          </button>

          <a
            href={GYM_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white pl-4 pr-5 py-3 shadow-lg transition-all"
            style={{
              clipPath:
                'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
            }}
          >
            <span className="text-lg">💬</span>
            <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
              Message Us
            </span>
          </a>

          <a
            href={GYM_INFO.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-white pl-4 pr-5 py-3 shadow-lg transition-all"
            style={{
              clipPath:
                'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
            }}
          >
            <span className="text-lg">📍</span>
            <span className="font-condensed text-xs tracking-[0.2em] uppercase font-bold whitespace-nowrap">
              Directions
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close contact menu' : 'Open contact menu'}
          className={`ml-auto flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-blue-600/40 transition-all duration-300 ${
            open
              ? 'bg-white text-blue-700 rotate-45'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <span className="text-2xl font-light leading-none">
            {open ? '+' : '💬'}
          </span>
        </button>
      </div>
    </>
  );
}