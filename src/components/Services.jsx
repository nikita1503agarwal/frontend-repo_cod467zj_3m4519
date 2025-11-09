import React from 'react';
import { Code2, Clapperboard, PenTool } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Responsive, accessible React interfaces with performance and polish. I connect your product to APIs and ship production-ready UIs.'
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    desc: 'Cinematic cuts, color, motion graphics, and sound polish for promos, reels, and product explainers across platforms.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Brand identities, social assets, and marketing visuals that feel modern, minimal, and on-message.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight">What I do</h2>
        <p className="mt-3 max-w-2xl text-white/70">A flexible toolkit to take ideas from concept to launch across web, video, and brand.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-neutral-900">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
