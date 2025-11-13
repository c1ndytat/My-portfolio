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
        <Hero />
        <About />
        <Contacts />
        <Projects />
      </main>

    </>

  );
}

