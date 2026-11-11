import { useLanguage } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import { ContactBand, Education, Experience, Section, Skills } from '../components/Sections';

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t.meta.aboutTitle} path="/about" />
      <section className="page-head">
        <h1>{t.about.title}</h1>
        <div className="prose">
          {t.about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <Section id="principles" title={t.about.principlesTitle}>
        <div className="focus-grid">
          {t.about.principles.map((p) => (
            <article key={p.title} className="focus-item">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Experience />
      <Education />
      <Skills />
      <ContactBand />
    </>
  );
}
