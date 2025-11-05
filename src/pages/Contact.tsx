import React, { useState } from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
                            <label
                                htmlFor="name"
                                style={{ display: 'block', marginBottom: 6 }}
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
                                style={{ display: 'block', marginBottom: 6 }}
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

                    <div className="form-row" style={{ marginTop: 14 }}>
                        <div>
                            <label
                                htmlFor="message"
                                style={{ display: 'block', marginBottom: 6 }}
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

                    <div
                        style={{
                            marginTop: 16,
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                        }}
                    >
                        <button className="btn" disabled={status === 'loading'}>
                            {status === 'loading' ? '...' : t('contact.send')}
                        </button>
                        {status === 'success' && (
                            <span style={{ color: 'seagreen' }}>
                                {t('contact.success')}
                            </span>
                        )}
                        {status === 'error' && (
                            <span style={{ color: 'tomato' }}>
                                {t('contact.error')}
                            </span>
                        )}
                    </div>
                </motion.form>

                <motion.aside
                    className="card"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    style={{ padding: 18, display: 'grid', gap: 14 }}
                >
                    <div style={{ display: 'grid', gap: 6 }}>
                        <h3 style={{ margin: 0 }}>
                            {i18n.language === 'ru'
                                ? 'Связаться со мной'
                                : 'Get in touch'}
                        </h3>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                            {i18n.language === 'ru'
                                ? 'Предпочитаю email, но открыт для сообщений в соцсетях.'
                                : 'Email is preferred, but I’m open to social DMs too.'}
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: 10 }}>
                        {items.map(item => {
                            const content = (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                    }}
                                >
                                    <div style={{ fontSize: 20 }}>
                                        {item.icon}
                                    </div>
                                    <div style={{ lineHeight: 1.2 }}>
                                        <div
                                            style={{
                                                fontSize: 12,
                                                color: 'var(--text-muted)',
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                        <div style={{ fontWeight: 600 }}>
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
