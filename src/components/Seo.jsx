import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

const SITE = 'https://www.ridvankarsli.com';

export default function Seo({ title, description, path = '/' }) {
  const { t, language } = useLanguage();
  const desc = description || t.meta.homeDescription;
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={SITE + path} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={SITE + path} />
    </Helmet>
  );
}
