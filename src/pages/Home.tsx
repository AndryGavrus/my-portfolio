import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
            <Link to="/contact" className="btn btn--ghost">{t('hero.ctaSecondary')}</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card" style={{ padding: 16 }}>
            <div className="badges">
              <span className="badge">React</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Redux Toolkit</span>
              <span className="badge">Framer Motion</span>
              <span className="badge">Vite</span>
              <span className="badge">CSS Grid</span>
            </div>
            <hr className="sep" />
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              {t('about.body')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
