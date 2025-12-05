import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects';
import About from '@/components/About';


export default function Home() {
  return (
    <>

      <NavBar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>

    </>

  );
}
