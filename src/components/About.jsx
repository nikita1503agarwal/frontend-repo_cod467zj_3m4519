import { Gamepad2, Frame, Clapperboard } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative text-white py-16 md:py-24 border-t border-white/10 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-black text-3xl md:text-4xl tracking-tight drop-shadow-[4px_4px_0_#000]">About Me</h2>
        <p className="mt-3 text-neutral-300 max-w-3xl">
          I craft 8-bit inspired, modern web interfaces with smooth motion and playful interactions. My toolkit spans frontend engineering, video editing, and graphic design.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={<Gamepad2 size={18}/>} title="Frontend Dev" desc="React, animations, and polished UI with a retro twist."/>
          <Feature icon={<Clapperboard size={18}/>} title="Video Editing" desc="Short-form reels, promos, and product explainers with snappy cuts."/>
          <Feature icon={<Frame size={18}/>} title="Graphic Design" desc="Logos, covers, and 8-bit pixel art that feels alive."/>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]" />
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-neutral-900/60 border border-white/15 p-4 shadow-[4px_4px_0_0_rgba(255,255,255,0.25)]">
      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-emerald-300">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-neutral-300 text-sm">{desc}</p>
    </div>
  );
}
