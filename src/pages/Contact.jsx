import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { contact } from '../i18n/content';
import Seo from '../components/Seo';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from '../components/Icons';

const EMPTY = { name: '', replyTo: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = c.required;
    if (!values.replyTo.trim()) next.replyTo = c.required;
    else if (!EMAIL_RE.test(values.replyTo.trim())) next.replyTo = c.invalidEmail;
    if (!values.message.trim()) next.message = c.required;
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`field-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    const subject = values.subject.trim() || `${values.name.trim()} — ridvankarsli.com`;
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.replyTo.trim()}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const field = (name, label, props = {}) => (
    <div className={`field${errors[name] ? ' has-error' : ''}`}>
      <label htmlFor={`field-${name}`}>{label}</label>
      {props.multiline ? (
        <textarea
          id={`field-${name}`}
          name={name}
          rows={6}
          value={values[name]}
          onChange={update}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
        />
      ) : (
        <input
          id={`field-${name}`}
          name={name}
          type={props.type || 'text'}
          autoComplete={props.autoComplete}
          value={values[name]}
          onChange={update}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
        />
      )}
      {errors[name] && (
        <p className="field__error" id={`err-${name}`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <>
      <Seo title={t.meta.contactTitle} path="/contact" />
      <section className="page-head">
        <h1>{c.title}</h1>
        <p className="page-head__intro">{c.intro}</p>
      </section>

      <div className="contact-layout">
        <section aria-labelledby="channels-title" className="channels">
          <h2 id="channels-title">{c.channels}</h2>
          <dl>
            <div>
              <dt><MailIcon /> {c.email}</dt>
              <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
            </div>
            <div>
              <dt><PhoneIcon /> {c.phone}</dt>
              <dd><a href={contact.phoneHref}>{contact.phone}</a></dd>
            </div>
            <div>
              <dt><PinIcon /> {c.location}</dt>
              <dd>{t.identity.location}</dd>
            </div>
            <div>
              <dt><LinkedInIcon /> LinkedIn</dt>
              <dd><a href={contact.linkedin} target="_blank" rel="noreferrer">Rıdvan Karslı</a></dd>
            </div>
            <div>
              <dt><GitHubIcon /> GitHub</dt>
              <dd><a href={contact.github} target="_blank" rel="noreferrer">ridvanKarsli</a></dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="form-title" className="form-panel">
          <h2 id="form-title">{c.formTitle}</h2>
          <p className="form-panel__note">{c.formNote}</p>
          <form onSubmit={submit} noValidate>
            <div className="field-row">
              {field('name', c.name, { autoComplete: 'name' })}
              {field('replyTo', c.replyTo, { type: 'email', autoComplete: 'email' })}
            </div>
            {field('subject', c.subject)}
            {field('message', c.message, { multiline: true })}
            <button type="submit" className="button button--primary">
              {c.send}
            </button>
            {opened && (
              <p className="form-panel__done" role="status">
                {c.opened}
              </p>
            )}
          </form>
        </section>
      </div>
    </>
  );
}
