import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-stars" aria-hidden="true">✧ · ✦ · ✧</div>
    <div className="hero-copy">
      <p className="eyebrow">portfolio / 2026</p>
      <h1>Hi, I&apos;m<br /><em>Cindy.</em></h1>
      <p className="hero-intro placeholder">Write a short introduction about who you are, what you study, and the kind of work you&apos;re interested in.</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">view projects <ArrowDownRight size={17} /></a><a className="button button-quiet" href="/Resume.pdf" download>download résumé ↗</a></div>
      <div className="social-row" aria-label="Social links"><a href="https://github.com/c1ndytat" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com/in/cindy-anne-tat" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:cindyannetat@gmail.com" aria-label="Email Cindy"><Mail size={18} /></a><span>links</span></div>
    </div>
    <div className="terminal-card" aria-label="A terminal-style introduction card">
      <div className="terminal-bar"><span /><span /><span /><p>about-me.txt</p></div>
      <div className="terminal-body"><p><span className="prompt">$</span> cat about-me.txt</p><p className="terminal-output">[ Add a short fun fact here ]</p><p><span className="prompt">$</span> cat current-focus.txt</p><p className="terminal-output">[ Add what you&apos;re learning or building ]</p><p><span className="prompt">$</span><span className="cursor" /></p></div>
      <Image className="space-scooter" src="/space-scooter.png" alt="Dotted illustration of a person riding through space" width={734} height={704} />
      <p className="terminal-sticker">edit me</p>
    </div>
    <p className="scroll-cue">scroll <span>↓</span></p>
  </section>;
}
