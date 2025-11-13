import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image';

export default function Hero() {
  return (

    <section className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, var(--color-brand-light), var(--color-brand))' }}>
      <div className="flex flex-row items-center justify-center max-w-6xl px-4 gap-12">
        <div className="text-center px-4">

          <h1 className="text-5xl md:text-6.95xl font-bold mb-7" style={{ fontFamily: 'var(--font-family-sans)', color: 'white' }}>
            Hi, my name is Cindy Tat!
          </h1>

          <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
            I'm a first-year Software Engineering student @SJSU
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/c1ndytat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="mailto:cindyannetat@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="Mail"
            >
              <Mail className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/cindy-anne-tat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="Linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="/Resume.pdf"
              download
              className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-medium"
              style={{ backgroundColor: 'var(--color-brand-dark)', fontFamily: 'var(--font-family-sans)' }}
            >
              Download CV
            </a>

            <button
              className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-medium"
              style={{ backgroundColor: 'var(--color-brand-dark)', fontFamily: 'var(--font-family-sans)' }}
            >
              About Me
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/snoopy.jpg"
            alt="Snoopy"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            style={{ maxHeight: '400px', width: 'auto', height: 'auto' }}
          />
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/cat.jpg"
            alt="Cat"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            style={{ maxHeight: '200px', width: 'auto', height: 'auto' }}
          />
        </div>

      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-7" style={{ fontFamily: 'var(--font-family-sans)', color: 'white' }}>
          Hi, I'm Cindy Tat!
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
          Software Engineering student @SJSU
        </p>
        <button
          className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-medium"
          style={{ backgroundColor: 'var(--color-brand-dark)', fontFamily: 'var(--font-family-sans)' }}
        >
          View My Work :D
        </button>
      </div>
    </section>
  );
}