import React, { useState } from 'react';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
      // Здесь вы можете интегрировать реальную отправку: Formspree, EmailJS, API и т.д.
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
      <motion.form
        className="card"
        style={{ padding: 18, maxWidth: 820 }}
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
    </Section>
  );
};

export default Contact;
