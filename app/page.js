import { me, phrases, stats, marquee, projects, experience, skills, achievements, education } from "./data";
import Typer from "./components/Typer";
import ContactForm from "./components/ContactForm";

const Arrow = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>);

function Photo({ size = "" }) {
  if (me.photo) return <img className={`photo ${size}`} src={me.photo} alt={me.name} />;
  return (
    <svg className={`photo ${size}`} viewBox="0 0 120 120" role="img" aria-label="Photo placeholder">
      <rect width="120" height="120" fill="#e4e1d8" />
      <circle cx="60" cy="46" r="20" fill="#b9b5a9" />
      <path d="M18 120c3-26 20-40 42-40s39 14 42 40z" fill="#b9b5a9" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="shell">
      <aside className="side">
        {/* <p className="open"><span className="dot" /> Open to work</p> */}
        <h2>{me.name}</h2>
        <p className="role">{me.role}</p>
        <p className="muted">{me.location}</p>
        <a className="btn" href={me.resume} target="_blank" rel="noreferrer">See resume <Arrow /></a>
        <nav aria-label="Sections">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#about">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social">
          <a href={me.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={me.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={me.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </aside>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="kicker">Full Stack Developer, class of 2027</p>
            <h1>I build backends that <Typer phrases={phrases} /></h1>
            {me.intro.map((paragraph) => <p className="lead" key={paragraph}>{paragraph}</p>)}
            <div className="row">
              <a className="btn" href={me.resume} target="_blank" rel="noreferrer">See resume <Arrow /></a>
              <a className="btn ghost" href="#projects">View projects</a>
            </div>
          </div>
          <div className="hero-photo"><Photo size="big" /></div>
          <div className="stats">
            {stats.map((s) => (<div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>))}
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">{[...marquee, ...marquee].map((m, i) => (<span key={i}><i />{m}</span>))}</div>
        </div>

        <section id="projects" className="block">
          <h2 className="h2">Selected projects</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="project">
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul>{p.points.map((x) => (<li key={x}>{x}</li>))}</ul>
                <div className="tags">{p.tags.map((t) => (<span key={t}>{t}</span>))}</div>
                <div className="row">
                  <a className="link" href={p.code} target="_blank" rel="noreferrer">Code <Arrow /></a>
                  {p.live && <a className="link" href={p.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="block">
          <h2 className="h2">Experience</h2>
          <div className="exp">
            <div><h3>{experience.company}</h3><p className="muted">{experience.role}</p><p className="muted">{experience.when}</p></div>
            <ul>{experience.points.map((x) => (<li key={x}>{x}</li>))}</ul>
          </div>
        </section>

        <section id="skills" className="block dark">
          <h2 className="h2">The tools I work with</h2>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.g} className="skill"><h3>{s.g}</h3><p>{s.i.join(", ")}</p></div>
            ))}
          </div>
        </section>

        <section id="about" className="block">
          <h2 className="h2">Achievements and education</h2>
          <div className="duo">
            <div>{achievements.map((a) => (<div key={a.t} className="item"><h3>{a.t}</h3><p>{a.d}</p></div>))}</div>
            <div className="item edu">
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <p className="muted">{education.when}</p>
              <p className="muted">{education.extra}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="block contact">
          <div>
            <h2 className="h2">Hiring for a backend role?</h2>
            <p className="lead">I'm looking for SDE roles at product companies. Send a message and I'll reply within a day or two, or write to <a className="inline" href={`mailto:${me.email}`}>{me.email}</a>.</p>
          </div>
          <ContactForm />
        </section>

        <footer>
          <p>{me.name}, {me.location}</p>
          <div className="social">
            <a href={me.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={me.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={me.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
