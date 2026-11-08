import Image from "next/image";

const skills = ["Java", "Python", "C++", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "FastAPI", "Git"];

export default function About() {
  return <section className="section-shell about-section" id="about">
    <div className="section-label"><span>01</span> about</div>
    <div className="star-scatter" aria-hidden="true">✧ · ✦ · ✧</div>
    <Image className="dotted-stars-image" src="/dotted-stars.png" alt="Dotted celestial star design" width={719} height={719} />
    <div className="about-grid"><div><h2>A little about<br /><em>me.</em></h2><p className="body-copy placeholder">Add your story here: how you got interested in software, the experiences that shaped you, and what you care about when you build.</p><p className="body-copy placeholder">Add a second paragraph if you want to share your current goals, communities, or favorite type of work.</p></div><aside className="profile-note"><pre className="card-cat" aria-hidden="true">{" /\\_/\\\n( o.o )\n > ^ <"}</pre><p className="note-title">details.txt</p><dl><div><dt>location</dt><dd>[ add city ]</dd></div><div><dt>studying</dt><dd>[ add major ]</dd></div><div><dt>year</dt><dd>[ add year ]</dd></div><div><dt>currently</dt><dd>[ add focus ]</dd></div></dl></aside></div>
    <div className="skills-wrap"><p className="eyebrow">skills</p><div className="skill-list">{skills.map((skill, index) => <span key={skill}><i>{String(index + 1).padStart(2, "0")}</i>{skill}</span>)}</div></div>
  </section>;
}
