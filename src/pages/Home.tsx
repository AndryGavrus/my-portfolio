import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const photoDataUrl = (() => {
  const svg = encodeURIComponent(
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
        <clipPath id="circle">
          <circle cx="400" cy="400" r="300"/>
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill="#0b1020"/>
      <g clip-path="url(#circle)">
        <rect width="100%" height="100%" fill="url(#g)"/>
        <text x="50%" y="50%" fill="white" font-family="Inter,Arial" font-size="40" text-anchor="middle" dominant-baseline="middle" opacity="0.9">Your Photo</text>
      </g>
      <circle cx="400" cy="400" r="300" fill="none" stroke="white" stroke-opacity="0.2" stroke-width="6"/>
    </svg>
  `
);
  return `data:image/svg+xml;charset=utf-8,${svg}`;
})();

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
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__desc">{t('hero.desc')}</p>
          <p style={{ marginTop: 0, marginBottom: 16, color: 'var(--text)' }}>
            <strong>{t('home.introHighlight')}</strong>
          </p>
          <p style={{ marginTop: 0, color: 'var(--text-muted)' }}>
            {t('home.introBody')}
          </p>
          <div className="cta">
            <Link to="/projects" className="btn">{t('hero.ctaPrimary')}</Link>
            <Link to="/contact" className="btn btn">{t('hero.ctaSecondary')}</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card" style={{ padding: 18, display:'grid', placeItems:'center' }}>
            <img
              src={photoDataUrl}
              alt={t('home.photoAlt')}
              style={{ width: '100%', maxWidth: 360, borderRadius: '50%' }}
            />
            <p style={{ color: 'var(--text-muted)', marginTop: 12, textAlign:'center' }}>
              {t('home.photoCaption')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
