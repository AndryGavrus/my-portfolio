import React, { useState } from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { slideInConfig } from '../config/animations';

export const Contact: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle');
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/xzzknzjn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: 'New message from portfolio website',
                    _replyto: form.email
                }),
            });

            if (response.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                console.error('Formspree error:', await response.text());
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus('idle'), 2500);
        }
    };

    const items = [
        {
            label: i18n.language === 'ru' ? 'Email' : 'Email',
            value: 'andry.gavrus@gmail.com',
            href: 'mailto:andry.gavrus@gmail.com',
            icon: '✉️',
        },
        {
            label: i18n.language === 'ru' ? 'GitHub' : 'GitHub',
            value: '@AndryGavrus',
            href: 'https://github.com/AndryGavrus',
            icon: '🐙',
        },
        {
            label: i18n.language === 'ru' ? 'LinkedIn' : 'LinkedIn',
            value: 'my-name',
            href: 'https://linkedin.com/',
            icon: '💼',
        },
        {
            label: i18n.language === 'ru' ? 'Резюме' : 'Resume',
            value: i18n.language === 'ru' ? 'Скачать PDF' : 'Download PDF',
            href:
                i18n.language === 'ru'
                    ? '/resume/andrey-gavrus-it-ru.pdf'
                    : '/resume/andrey-gavrus-it-en.pdf',
            icon: '📄',
        },
    ];

    return (
        <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
            <div className="grid grid--2">
                <motion.form
                    className="card contact-form"
                    onSubmit={onSubmit}
                    {...slideInConfig}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="form-row form-row--2">
                        <div>
                            <label
                                htmlFor="name"
                                className="contact-label"
                            >
                                {t('contact.name')}
                            </label>
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
                            <label
                                htmlFor="email"
                                className="contact-label"
                            >
                                {t('contact.email')}
                            </label>
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

                    <div className="form-row contact-form-row">
                        <div>
                            <label
                                htmlFor="message"
                                className="contact-label"
                            >
                                {t('contact.message')}
                            </label>
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

                    <div className="contact-form-actions">
                        <button className="btn" disabled={status === 'loading'}>
                            {status === 'loading' ? '...' : t('contact.send')}
                        </button>
                        {status === 'success' && (
                            <span className="contact-success">
                                {t('contact.success')}
                            </span>
                        )}
                        {status === 'error' && (
                            <span className="contact-error">
                                {t('contact.error')}
                            </span>
                        )}
                    </div>
                </motion.form>

                <motion.aside
                    className="card contact-aside"
                    {...slideInConfig}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                >
                    <div className="contact-info">
                        <h3 className="contact-info-title">
                            {i18n.language === 'ru'
                                ? 'Связаться со мной'
                                : 'Get in touch'}
                        </h3>
                        <p className="contact-info-text">
                            {i18n.language === 'ru'
                                ? 'Предпочитаю email, но открыт для сообщений в соцсетях.'
                                : 'Email is preferred, but I’m open to social DMs too.'}
                        </p>
                    </div>

                    <div className="contact-items">
                        {items.map(item => {
                            const content = (
                                <div className="contact-item-content">
                                    <div className="contact-item-icon">
                                        {item.icon}
                                    </div>
                                    <div className="contact-item-text">
                                        <div className="contact-item-label">
                                            {item.label}
                                        </div>
                                        <div className="contact-item-value">
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            );
                            return item.href ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-item"
                                    style={{
                                        border: '1px solid var(--border)',
                                        borderRadius: 12,
                                        padding: 12,
                                        background: 'var(--bg-soft)',
                                        transition:
                                            'transform 0.12s ease, background 0.2s ease, border-color 0.2s ease',
                                        display: 'block',
                                    }}
                                    onMouseEnter={e => {
                                        (
                                            e.currentTarget as HTMLAnchorElement
                                        ).style.transform = 'translateY(-2px)';
                                        (
                                            e.currentTarget as HTMLAnchorElement
                                        ).style.background =
                                            'color-mix(in oklab, var(--bg-soft), var(--primary) 6%)';
                                    }}
                                    onMouseLeave={e => {
                                        (
                                            e.currentTarget as HTMLAnchorElement
                                        ).style.transform = '';
                                        (
                                            e.currentTarget as HTMLAnchorElement
                                        ).style.background = 'var(--bg-soft)';
                                    }}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div
                                    key={item.label}
                                    style={{
                                        border: '1px solid var(--border)',
                                        borderRadius: 12,
                                        padding: 12,
                                        background: 'var(--bg-soft)',
                                    }}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </motion.aside>
            </div>
        </Section>
    );
};
