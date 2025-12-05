export default function Contacts() {
    return (

        <section className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, var(--color-brand-light), var(--color-brand))' }}>
            <div className="text-center px-4">

                <h1 className="text-5xl md:text-6.95xl font-bold mb-7" style={{ fontFamily: 'var(--font-family-sans)', color: 'white' }}>
                    Contacts
                </h1>

                <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Connect with me at
                </p>
            </div>
        </section>
    );
}