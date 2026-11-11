import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { contact } from '../i18n/content';
import { ExternalIcon, MailIcon, PhoneIcon } from './Icons';

export function Section({ id, title, action, children, className = '' }) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      <header className="section__head">
        <h2 id={headingId}>{title}</h2>
        {action}
      </header>
      {children}
    </section>
  );
}

export function FocusAreas() {
  const { t } = useLanguage();
  return (
    <Section id="focus" title={t.sections.focus}>
      <div className="focus-grid">
        {t.focus.map((item) => (
          <article key={item.title} className="focus-item">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience" title={t.sections.experience}>
      <ol className="timeline">
        {t.experience.map((job, index) => (
          <li key={job.company + job.period} className={`timeline__item${index === 0 ? ' is-current' : ''}`}>
            <div className="timeline__when">
              <p className="timeline__period">{job.period}</p>
              <p className="timeline__place">{job.place}</p>
            </div>
            <div className="timeline__body">
              <h3>
                {job.role}
                <span className="timeline__company">{job.company}</span>
              </h3>
              <p>{job.summary}</p>
              <ul className="ticks">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ProjectEntry({ project, detailed = false }) {
  const { t } = useLanguage();
  return (
    <article className="project">
      <div className="project__head">
        <h3>{project.name}</h3>
        <p className="project__kind">{project.kind}</p>
      </div>
      <p className="project__summary">{project.summary}</p>
      {detailed && (
        <ul className="ticks">
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
      <div className="project__foot">
        <ul className="stack" aria-label={t.projectsPage.stack}>
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
          {t.projectsPage.repo}
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}

export function SelectedProjects() {
  const { t } = useLanguage();
  return (
    <Section
      id="projects"
      title={t.sections.projects}
      action={
        <Link className="text-link" to="/projects">
          {t.sections.allProjects}
        </Link>
      }
    >
      <div className="project-list">
        {t.projects.map((p) => (
          <ProjectEntry key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills" title={t.sections.skills}>
      <dl className="skill-table">
        {t.skills.map((row) => (
          <div key={row.group} className="skill-table__row">
            <dt>{row.group}</dt>
            <dd>
              <ul className="stack">
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education() {
  const { t } = useLanguage();
  return (
    <Section id="education" title={t.sections.education}>
      <ul className="plain-rows">
        {t.education.map((e) => (
          <li key={e.school}>
            <p className="plain-rows__period">{e.period}</p>
            <div>
              <h3>{e.school}</h3>
              <p>{e.program}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ContactBand() {
  const { t } = useLanguage();
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <h2 id="contact-band-title">{t.sections.contact}</h2>
      <p>{t.contactPage.intro}</p>
      <div className="contact-band__links">
        <a href={`mailto:${contact.email}`}>
          <MailIcon />
          {contact.email}
        </a>
        <a href={contact.phoneHref}>
          <PhoneIcon />
          {contact.phone}
        </a>
      </div>
    </section>
  );
}
