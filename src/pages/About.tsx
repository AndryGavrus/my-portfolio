import React from 'react';
import Section from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();
  const skills = t<string[], any>('about.skills', { returnObjects: true });

  return (
    <Section title={t('about.title')} subtitle={t('about.subtitle')}>
      <div className="grid grid--2">
        <motion.div
          className="card"
          style={{ padding: 18 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p style={{ marginTop: 0 }}>{t('about.body')}</p>
          <hr className="sep" />
          <h3 style={{ marginTop: 0 }}>{t('about.skillsTitle')}</h3>
          <div className="badges">
            {skills.map((s) => (
              <span className="badge" key={s}>{s}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{
            display:'grid',
            placeItems:'center',
            padding: 18,
            background:
              'linear-gradient(135deg, color-mix(in oklab, var(--primary), transparent 85%), color-mix(in oklab, var(--accent), transparent 85%))'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 80 }}>👋</div>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)' }}>
              {t('hero.title', { name: 'Ваше Имя' })}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
