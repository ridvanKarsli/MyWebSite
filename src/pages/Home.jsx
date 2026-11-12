import { useLanguage } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import { Education, Experience, SelectedProjects, Skills } from '../components/Sections';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t.meta.homeTitle} path="/" />

      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title" className="visually-hidden">
          {t.home.headline}
        </h1>
        <p className="intro__lead">{t.home.lead}</p>
      </section>

      <Experience />
      <SelectedProjects />
      <Skills />
      <Education />
    </>
  );
}
