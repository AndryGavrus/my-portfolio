import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroPhoto from '../assets/ava.jpg';
import { slideInConfig, slideInFromRightConfig } from '../config/animations';

export const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="section">
            <div className="hero">
                <motion.div
                    {...slideInConfig}
                    transition={{ duration: 0.45 }}
                >
                    <h1 className="hero__title">{t('hero.greeting')}</h1>
                    <h1 className="hero__title">{t('hero.title')}</h1>
                    <p className="hero__desc">{t('hero.desc')}</p>
                    <p className="home-intro-highlight">
                        <strong>{t('home.introHighlight')}</strong>
                    </p>
                    <p className="home-intro-body">
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
                    {...slideInFromRightConfig}
                >
                    <div className="card hero__photo-card">
                        <div className="hero__avatar">
                            <img
                                src={heroPhoto}
                                alt="Portrait"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                        <p className="hero__photo-caption">
                            {t('home.photoCaption')}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
