import React from 'react';

const projects = [
  {
    tag: 'Frontend',
    title: 'Interactive SaaS Dashboard',
    desc: 'A data-rich dashboard with filters, charts, and real-time updates built in React.',
    link: '#'
  },
  {
    tag: 'Video',
    title: 'Product Launch Reel',
    desc: '30-second punchy edit with motion graphics and sound design for social launch.',
    link: '#'
  },
  {
    tag: 'Design',
    title: 'Minimal Brand Kit',
    desc: 'Logo, typography, and social system for a modern direct-to-consumer brand.',
    link: '#'
  },
  {
    tag: 'Frontend',
    title: 'Marketing Website',
    desc: 'High-performance landing pages with A/B-ready sections and SEO best practices.',
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-3 max-w-2xl text-white/70">A mix of shipped products, motion pieces, and brand visuals.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10 md:inline-flex">Get a quote</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="text-xs uppercase tracking-wide text-white/60">{p.tag}</div>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <span className="mt-4 inline-block text-sm text-white/80 group-hover:text-white">View details →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
