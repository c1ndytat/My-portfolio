'use client';

import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold" style={{ fontFamily: 'var(--font-family-sans)', color: 'black' }}>
            Cindy Tat
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:opacity-80 transition" style={{ fontFamily: 'var(--font-family-sans)', color: 'black' }}>
              Home
            </a>
            <a href="#projects" className="hover:opacity-80 transition" style={{ fontFamily: 'var(--font-family-sans)', color: 'black' }}>
              Projects
            </a>
            <a href="#contact" className="hover:opacity-80 transition" style={{ fontFamily: 'var(--font-family-sans)', color: 'black' }}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden hover:opacity-80 transition" style={{ color: 'black' }}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}