import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page anchors
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-emerald-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Reviews />

        <section id="contact" className="py-16 md:py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-neutral-900/60 border border-white/15 p-6 md:p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">Let’s team up</h3>
              <p className="mt-2 text-neutral-300 max-w-2xl">Have a project in mind? I build retro-flavored, modern experiences. Reach out and let’s make something memorable.</p>
              <a href="mailto:hello@example.com" className="mt-5 inline-block bg-emerald-400 text-black font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">Email me</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} 8BIT.PORTFOLIO — Built with love and extra lives.
      </footer>

      {/* 8-bit background grid */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-20" aria-hidden>
        <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:16px_16px]" />
      </div>
    </div>
  );
}
