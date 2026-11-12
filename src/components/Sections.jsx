import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ExternalIcon } from './Icons';

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
              {job.points.length > 0 && (
                <ul className="ticks">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
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
      <div className="project__name">
        <h3>{project.name}</h3>
        <p className="project__kind">{project.kind}</p>
      </div>
      <div className="project__body">
        <p>{project.summary}</p>
        {detailed && (
          <ul className="ticks">
            {project.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
        <p className="project__meta">
          <span className="visually-hidden">{t.projectsPage.stack}: </span>
          {project.stack.join(', ')}
        </p>
        <p className="project__links">
          {project.live && (
            <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
              {t.projectsPage.live}
              <ExternalIcon />
            </a>
          )}
          <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
            {t.projectsPage.repo}
            <ExternalIcon />
          </a>
        </p>
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
        {t.projects
          .filter((p) => p.featured)
          .map((p) => (
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
            <dd>{row.items.join(', ')}</dd>
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
            <h3>{e.program}</h3>
            <p>{e.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
