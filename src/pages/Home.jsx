import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import {
  ContactBand,
  Education,
  Experience,
  FocusAreas,
  SelectedProjects,
  Skills,
} from '../components/Sections';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t.meta.homeTitle} path="/" />

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">{t.home.headline}</h1>
        <p className="intro__lead">{t.home.lead}</p>
        <div className="actions">
          <Link to="/contact" className="button button--primary">
            {t.home.primaryAction}
          </Link>
          <Link to="/projects" className="button">
            {t.home.secondaryAction}
          </Link>
        </div>
        <dl className="facts" aria-label={t.home.factsLabel}>
          {t.home.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <FocusAreas />
      <Experience />
      <SelectedProjects />
      <Skills />
      <Education />
      <ContactBand />
    </>
  );
}
