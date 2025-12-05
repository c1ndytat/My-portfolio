const skills = [
    //languages
    { name: "Java" },
    { name: "Python" },
    { name: "C++" },
    { name: "HTML/CSS" },
    { name: "JavaScript" },

    //frameworks & apis
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "FastAPI" },

    //developer tools
    { name: "VS Code" },
    { name: "Git" },
];

export default function About() {
    return (

        <section id="skills" className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, var(--color-brand-light), var(--color-brand))' }}>
            <div className="container text-center px-4">
                <h1 className="text-5xl md:text-6.95xl font-bold mb-7" style={{ fontFamily: 'var(--font-family-sans)', color: 'white' }}>
                    About Me
                </h1>
                <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                    Technical Skills
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ fontFamily: 'var(--font-family-sans)', color: 'rgba(255, 255, 255, 0.9)' }}>
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div>
                                <h3>{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}