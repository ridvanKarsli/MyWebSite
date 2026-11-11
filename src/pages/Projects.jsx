import { useLanguage } from '../i18n/LanguageContext';
import { contact } from '../i18n/content';
import Seo from '../components/Seo';
import { ProjectEntry } from '../components/Sections';
import { GitHubIcon } from '../components/Icons';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t.meta.projectsTitle} path="/projects" />
      <section className="page-head">
        <h1>{t.nav.projects}</h1>
        <p className="page-head__intro">{t.projectsPage.intro}</p>
      </section>

      <div className="project-list project-list--detailed">
        {t.projects.map((p) => (
          <ProjectEntry key={p.name} project={p} detailed />
        ))}
      </div>

      <p className="more-note">
        <GitHubIcon />
        <a className="text-link" href={contact.github} target="_blank" rel="noreferrer">
          {t.projectsPage.more}
        </a>
      </p>
    </>
  );
}
