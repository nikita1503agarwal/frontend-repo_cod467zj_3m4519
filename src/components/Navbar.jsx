import React from 'react';
import { Camera, Code2, PanelsTopLeft } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-neutral-900/60 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900">
              <PanelsTopLeft size={18} />
            </span>
            <span className="font-semibold tracking-tight">Your Name</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="mailto:hello@portfolio.dev" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white hover:text-neutral-900">
            <Code2 size={16} />
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
