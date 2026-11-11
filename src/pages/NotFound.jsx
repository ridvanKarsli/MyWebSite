import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Seo from '../components/Seo';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <>
      <Seo title={t.meta.notFoundTitle} path="/" />
      <section className="page-head">
        <h1>{t.notFound.title}</h1>
        <p className="page-head__intro">{t.notFound.text}</p>
        <Link to="/" className="button button--primary">
          {t.notFound.back}
        </Link>
      </section>
    </>
  );
}
