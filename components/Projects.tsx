import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return <section className="section-shell work-section" id="work">
    <div className="section-label"><span>02</span> projects</div>
    <div className="project-stars" aria-hidden="true">✦<span>✧</span><i>✦</i></div>
    <div className="work-heading"><h2>Selected<br /><em>work.</em></h2><p className="placeholder">Use this space for a sentence about the projects you&apos;d like people to see.</p></div>
    <article className="project-card"><div className="project-window"><div className="window-header"><span /><span /><span /><p>project-name</p></div><div className="window-content"><p className="code-comment">{"// replace this preview"}</p><p><b>const</b> project = &#123;</p><p className="indent">name: <span>&quot;[ project title ]&quot;</span>,</p><p className="indent">builtWith: <span>&quot;[ tech stack ]&quot;</span>,</p><p className="indent">link: <span>&quot;[ project URL ]&quot;</span></p><p>&#125;;</p></div></div><div className="project-info"><p className="project-number">01 / 01</p><h3>[ Project Title ]</h3><p className="placeholder">Add a short description of the problem, what you built, and what you learned.</p><div className="tag-row"><span>[ tool ]</span><span>[ tool ]</span><span>[ tool ]</span></div><a className="text-link" href="https://github.com/c1ndytat" target="_blank" rel="noreferrer">add project link <Github size={16} /></a></div></article>
    <a className="archive-link" href="https://github.com/c1ndytat" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={19} /></a>
  </section>;
}
