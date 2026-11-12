import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { contact } from '../i18n/content';
import Monogram from './Monogram';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

function Navigation({ onNavigate }) {
  const { t } = useLanguage();
  const items = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact },
  ];
  return (
    <nav className="site-nav" aria-label={t.nav.menu}>
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end={item.end} onClick={onNavigate}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function LanguageSwitch() {
  const { language, toggleLanguage, t } = useLanguage();
  return (
    <button type="button" className="lang-switch" onClick={toggleLanguage} title={t.nav.switchLanguage}>
      <span aria-hidden="true" className={language === 'tr' ? 'is-active' : ''}>TR</span>
      <span aria-hidden="true" className="lang-switch__sep">/</span>
      <span aria-hidden="true" className={language === 'en' ? 'is-active' : ''}>EN</span>
      <span className="visually-hidden">{t.nav.switchLanguage}</span>
    </button>
  );
}

function ProfileLinks() {
  return (
    <ul className="profile-links">
      <li>
        <a href={`mailto:${contact.email}`}>
          <MailIcon />
          <span>{contact.email}</span>
        </a>
      </li>
      <li>
        <a href={contact.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          <span>github.com/ridvanKarsli</span>
        </a>
      </li>
      <li>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </li>
    </ul>
  );
}

export default function Layout() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="shell">
      <a className="skip-link" href="#content">
        {t.nav.skip}
      </a>

      <aside className="sidebar">
        <div className="sidebar__top">
          <Link to="/" className="identity" aria-label="Rıdvan Şevki Karslı">
            <Monogram />
            <span className="identity__text">
              <span className="identity__name">Rıdvan Şevki Karslı</span>
              <span className="identity__role">{t.identity.role}</span>
            </span>
          </Link>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="sidebar-panel"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>

        <div id="sidebar-panel" className={`sidebar__panel${menuOpen ? ' is-open' : ''}`}>
          <Navigation onNavigate={() => setMenuOpen(false)} />
          <dl className="status">
            <div>
              <dt className="visually-hidden">{t.contactPage.location}</dt>
              <dd>{t.identity.location}</dd>
            </div>
            <div>
              <dt className="visually-hidden">{t.nav.status}</dt>
              <dd>{t.identity.status}</dd>
            </div>
          </dl>
          <ProfileLinks />
          <LanguageSwitch />
        </div>
      </aside>

      <div className="main-column">
        <main id="content" tabIndex={-1}>
          <Outlet />
        </main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Rıdvan Şevki Karslı</p>
        </footer>
      </div>
    </div>
  );
}
