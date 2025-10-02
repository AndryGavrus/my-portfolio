import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
    const { t } = useTranslation();

    const art = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="320">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/>
          <stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#0b1020"/>
      <g fill="url(#g)" font-family="Inter,Arial" font-size="140" font-weight="700">
        <text x="50%" y="55%" text-anchor="middle">404</text>
      </g>
    </svg>
  `);

    return (
        <section className="section">
            <div className="card" style={{ padding: 20, display: 'grid', gap: 16, justifyItems: 'center' }}>
                <img src={`data:image/svg+xml;charset=utf-8,${art}`} alt="404" style={{ width: '100%', maxWidth: 520 }} />
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ margin: 0, textAlign: 'center' }}
                >
                    {t('notfound.title')}
                </motion.h2>
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: 0 }}>{t('notfound.desc')}</p>
                <Link to="/" className="btn">{t('notfound.backHome')}</Link>
            </div>
        </section>
    );
};
