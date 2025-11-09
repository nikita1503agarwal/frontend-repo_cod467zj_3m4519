import { useState } from 'react';
import { Menu, X, Home, User, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm md:text-base font-semibold tracking-wider uppercase hover:bg-white/10 border border-white/15 shadow-[4px_4px_0_0_rgba(255,255,255,0.25)] active:translate-x-[1px] active:translate-y-[1px] transition-colors rounded-none"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-black tracking-widest text-white text-sm md:text-base px-3 py-2 border border-white/20 shadow-[4px_4px_0_0_rgba(255,255,255,0.25)] bg-neutral-900/60 rounded-none flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-emerald-400 mr-1 animate-pulse" />
          8BIT.PORTFOLIO
        </a>

        <div className="hidden md:flex items-center gap-2 text-white">
          <NavLink href="#hero"><span className="inline-flex items-center gap-2"><Home size={16}/>Home</span></NavLink>
          <NavLink href="#about"><span className="inline-flex items-center gap-2"><User size={16}/>About</span></NavLink>
          <NavLink href="#reviews"><span className="inline-flex items-center gap-2"><MessageSquare size={16}/>Reviews</span></NavLink>
        </div>

        <button
          className="md:hidden text-white p-2 border border-white/20 shadow-[4px_4px_0_0_rgba(255,255,255,0.25)] rounded-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 text-white bg-neutral-950/90 border-t border-white/10">
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
        </div>
      )}
    </header>
  );
}
