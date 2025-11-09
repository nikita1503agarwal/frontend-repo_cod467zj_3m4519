import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        {/* Contact CTA inline to keep components focused and at 4 total */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <h2 className="text-3xl font-semibold tracking-tight">Let’s build something together</h2>
              <p className="mt-3 text-white/70 max-w-2xl">Have a project in mind—web, video, or brand visuals? I can help you plan, design, and ship a cohesive experience across mediums.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="mailto:hello@portfolio.dev" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-white/90">
                  Email me
                </a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10">
                  See recent work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Frontend • Video • Design
      </footer>
    </div>
  );
}
