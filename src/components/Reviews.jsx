import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ava Chen',
    role: 'Product Manager @ Orbital',
    text: 'Fast, collaborative, and incredibly creative. The 8-bit theme made our launch unforgettable.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Leo Martinez',
    role: 'Founder @ ByteBrew',
    text: 'Brought energy and polish to our site with playful motion that still felt premium.',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Maya Singh',
    role: 'Creative Lead @ Flux',
    text: 'Attention to detail is top-tier. The interactive hero stole the show in our demo.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Noah Park',
    role: 'CEO @ PixelWorks',
    text: 'On time, communicative, and the result felt unique and on-brand.',
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 text-white border-t border-white/10 bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-black text-3xl md:text-4xl tracking-tight drop-shadow-[4px_4px_0_#000]">What clients say</h2>
          <div className="hidden md:flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

        <div className="[--speed:40s] animate-[marquee_var(--speed)_linear_infinite] flex gap-4 will-change-transform">
          {[...REVIEWS, ...REVIEWS].map((r, idx) => (
            <Card key={idx} {...r} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function Card({ name, role, text, avatar }) {
  return (
    <div className="min-w-[320px] max-w-sm bg-neutral-900/60 border border-white/15 px-4 py-5 mx-2 shadow-[6px_6px_0_0_#000]">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded border border-white/20" />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs text-neutral-300">{role}</div>
        </div>
        <div className="ml-auto flex items-center gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-200">{text}</p>
    </div>
  );
}
