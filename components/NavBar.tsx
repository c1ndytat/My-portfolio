"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["home", "home"], ["about", "about"], ["work", "work"], ["contact", "contact"]] as const;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  }
  return <header className="site-header">
    <a className="wordmark" href="#home" onClick={(event) => { event.preventDefault(); scrollToSection("home"); }}>cindy<span>.dev</span></a>
    <nav className={isOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
      {links.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={(event) => { event.preventDefault(); scrollToSection(id); }}><span>0{index + 1}.</span>{label}</a>)}
    </nav>
    <button className="menu-button" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
  </header>;
}
