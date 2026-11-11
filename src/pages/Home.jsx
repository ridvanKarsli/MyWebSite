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
