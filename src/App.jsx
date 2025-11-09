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

        {/* Customer Review Card */}
        <section id="reviews" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">What clients say</h2>
                <p className="mt-3 max-w-2xl text-white/70">A snapshot of the experience working together.</p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=256&auto=format&fit=crop"
                      alt="Client headshot"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold leading-tight">Alex Carter</h3>
                      <p className="text-sm text-white/60">Product Lead, Nova Labs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300">
                    {/* Star icons as inline SVG to avoid extra deps */}
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <span className="ml-2 text-sm text-white/70">5.0</span>
                  </div>
                </div>
                <blockquote className="mt-6 text-base leading-relaxed text-white/80">
                  “They delivered a polished frontend, a cohesive brand kit, and a punchy launch reel — all on a tight deadline. Communication was crisp and the quality was top-tier.”
                </blockquote>
              </article>
            </div>
          </div>
        </section>

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
