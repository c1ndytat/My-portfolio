'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';


export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center justify-between h-16">

          <Image
            src="/star.png"
            alt="star"
            width={40}
            height={40}
            className="hidden lg:block rounded-full object-cover cursor-pointer hover:opacity-80 transition"
          />

          <div className="hidden md:flex space-x-14">
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, 'hero')}
              className="hover:opacity-80 transition"
              style={{ fontFamily: 'var(--font-family-sans)', color: 'black', fontSize: '22px' }}
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="hover:opacity-80 transition"
              style={{ fontFamily: 'var(--font-family-sans)', color: 'black', fontSize: '22px' }}
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="hover:opacity-80 transition"
              style={{ fontFamily: 'var(--font-family-sans)', color: 'black', fontSize: '22px' }}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="hover:opacity-80 transition"
              style={{ fontFamily: 'var(--font-family-sans)', color: 'black', fontSize: '22px' }}
            >
              CONTACT
            </a>
          </div>

          <Image
            src="/star.png"
            alt="star"
            width={40}
            height={40}
            className="hidden lg:block rounded-full object-cover cursor-pointer hover:opacity-80 transition"
          />

          {/* Mobile menu button */}
          <button className="md:hidden hover:opacity-80 transition" aria-label="Open menu" style={{ color: 'black' }}>
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>
    </nav>
  );
}