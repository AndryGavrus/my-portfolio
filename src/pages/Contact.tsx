import React, { useState } from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TelegramIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.04 15.89 8.9 19.1c.3 0 .43-.13.58-.28l1.39-1.34 2.88 2.12c.53.29.91.14 1.06-.49l1.92-9.02c.2-.92-.33-1.28-.9-1.06L4.9 11.07c-.88.34-.86.83-.15 1.05l3.6 1.12 8.36-5.28c.39-.24.75-.11.46.13L9.04 15.89z"/>
  </svg>
);

const GmailIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8.5l8 5.33 8-5.33V18zM20 6h-1l-7 4.67L5 6H4c-1.1 0-2 .9-2 2v.5l10 6.67 10-6.67V8c0-1.1-.9-2-2-2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.94 8.5H4.5V19.5h2.44V8.5zM5.72 7.3c.78 0 1.41-.64 1.41-1.41 0-.78-.63-1.41-1.41-1.41S4.3 5.12 4.3 5.9c0 .77.63 1.4 1.42 1.4zM19.5 19.5V13.6c0-3.16-1.69-4.63-3.95-4.63-1.82 0-2.64 1-3.1 1.7V8.5H10v11h2.45v-5.4c0-1.43.27-2.82 2.05-2.82 1.75 0 1.78 1.64 1.78 2.9v5.33H19.5z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus('loading');
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 2500);
    }
  };

  return (
    <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="grid grid--2">
        <motion.form
          className="card"
          style={{ padding: 18 }}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className="form-row form-row--2">
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>{t('contact.name')}</label>
              <input
                id="name"
                name="name"
                className="input"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>{t('contact.email')}</label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div className="form-row" style={{ marginTop: 14 }}>
            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: 6 }}>{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                className="textarea"
                value={form.message}
                onChange={onChange}
                required
              />
            </div>
          </div>

          <div style={{ marginTop: 16, display:'flex', gap:10, alignItems:'center' }}>
            <button className="btn" disabled={status === 'loading'}>
              {status === 'loading' ? '...' : t('contact.send')}
            </button>
            {status === 'success' && <span style={{ color: 'seagreen' }}>{t('contact.success')}</span>}
            {status === 'error' && <span style={{ color: 'tomato' }}>{t('contact.error')}</span>}
          </div>
        </motion.form>

        <motion.div
          className="card"
          style={{ padding: 18, display: 'grid', alignContent: 'center', gap: 12 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <strong>{t('contact.orFindMe')}</strong>
          <div className="icon-links">
            <a className="icon-btn" href="https://t.me/yourhandle" target="_blank" rel="noreferrer" aria-label="Telegram">
              <TelegramIcon /> @yourhandle
            </a>
            <a className="icon-btn" href="mailto:youremail@gmail.com" aria-label="Gmail">
              <GmailIcon /> youremail@gmail.com
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
