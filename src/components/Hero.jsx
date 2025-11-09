import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-[90vh] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative h-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="inline-block w-fit bg-emerald-400 text-black font-black uppercase tracking-widest text-xs px-3 py-1 border-2 border-black shadow-[4px_4px_0_0_#000]">
          8-bit interactive
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight drop-shadow-[4px_4px_0_#000]">
          Pixel-perfect Frontend, Motion, and Design
        </h1>
        <p className="mt-3 md:mt-4 text-neutral-200 max-w-2xl">
          I blend code, video, and graphics into playful, interactive experiences inspired by classic games.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#about" className="inline-flex items-center gap-2 bg-emerald-400 text-black font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
            <Rocket size={18}/> Start Quest
          </a>
          <a href="#reviews" className="inline-flex items-center gap-2 bg-white text-black font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px]">
            See Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
