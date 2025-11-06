export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, var(--color-brand-light), var(--color-brand))' }}>
      <div className="text-center px-4">

        <h1 className="text-5xl md:text-6.95xl font-bold mb-7" style={{ fontFamily: 'var(--font-family-sans)', color: 'white' }}>
          Hi, my name is Cindy Tat!
        </h1>

        <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
          I'm a first-year Software Engineering student @SJSU
        </p>
        
        <button
          className="text-white px-8 py-3 mx-2 rounded-lg hover:opacity-90 transition font-medium"
          style={{ backgroundColor: 'var(--color-brand-dark)', fontFamily: 'var(--font-family-sans)' }}
        >
          Download CV
        </button>

        <button
          className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-medium"
          style={{ backgroundColor: 'var(--color-brand-dark)', fontFamily: 'var(--font-family-sans)' }}
        >
          View Work
        </button>

      </div>
    </section>
  );
}