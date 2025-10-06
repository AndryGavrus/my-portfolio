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
          <h1 className="hero__title">{t('hero.title', { name: 'Ваше Имя' })}</h1>
          <p className="hero__desc">{t('hero.desc')}</p>
          <div className="cta">
            <Link to="/projects" className="btn">{t('hero.ctaPrimary')}</Link>
            <Link to="/contact" className="btn">{t('hero.ctaSecondary')}</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="hero__image-wrap">
            <img
              className="hero__image"
              src={heroPhoto}
              alt="Portrait"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
