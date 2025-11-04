import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroPhoto from '../assets/ava.jpg';

export const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="section">
            <div className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <h1 className="hero__title">{t('hero.greeting')}</h1>
                    <h1 className="hero__title">{t('hero.title')}</h1>
                    <p className="hero__desc">{t('hero.desc')}</p>
                    <p
                        style={{
                            marginTop: 0,
                            marginBottom: 16,
                            color: 'var(--text)',
                        }}
                    >
                        <strong>{t('home.introHighlight')}</strong>
                    </p>
                    <p style={{ marginTop: 0, color: 'var(--text-muted)' }}>
                        {t('home.introBody')}
                    </p>
                    <div className="cta">
                        <Link to="/projects" className="btn">
                            {t('hero.ctaPrimary')}
                        </Link>
                        <Link to="/contact" className="btn">
                            {t('hero.ctaSecondary')}
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero__photo"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div
                        className="card"
                        style={{
                            padding: 18,
                            display: 'grid',
                            placeItems: 'center',
                        }}
                    >
                        <div className="hero__avatar">
                            <img
                                src={heroPhoto}
                                alt="Portrait"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                        <p
                            style={{
                                color: 'var(--text-muted)',
                                marginTop: 12,
                                textAlign: 'center',
                            }}
                        >
                            {t('home.photoCaption')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
