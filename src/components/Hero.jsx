import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient at bottom for text readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950 to-transparent"></div>

      <div className="relative z-10 mx-auto grid h-full max-w-6xl place-items-end px-6 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 backdrop-blur">
            Crafting for web • video • brands
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Frontend Developer, Video Editor, and Graphic Designer
          </h1>
          <p className="mt-4 text-white/70">
            I build fast, accessible web apps, cut compelling edits, and design clean visuals. A single partner for your digital presence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-white/90">
              View projects
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10">
              What I do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
