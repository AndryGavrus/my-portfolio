import React from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const education = t<string[], any>('about.educationList', { returnObjects: true });
  const skills = t<string[], any>('about.skills', { returnObjects: true });
  const experience = t<string[], any>('about.experienceList', { returnObjects: true });
  const stack = t<string[], any>('about.stackList', { returnObjects: true });

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
          <p style={{ marginTop: 0 }}>{t('about.body1')}</p>
          <p style={{ marginTop: 0 }}>{t('about.body2')}</p>
          <p style={{ marginTop: 0 }}>{t('about.body3')}</p>
                        <hr className="sep" />
          <h3 style={{ marginTop: 0 }}>{t('about.skillsTitle')}</h3>
          <div className="badges">
            {skills.map((s) => (
              <span className="badge" key={s}>{s}</span>
            ))}
          </div>
          <hr className="sep" />
          <h3 style={{ marginTop: 0 }}>{t('about.education')}</h3>
              <ul style={{ margin: '8px 0 0 16px' }}>
                {education.map((item) => (
                  <li key={item} style={{ marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{ padding: 18 }}
        >
          <h3 style={{ marginTop: 0 }}>{t('about.infoTitle')}</h3>
          <div className="grid" style={{ gap: 16 }}>
            <div className="card" style={{ padding: 14 }}>
              <strong>{t('about.experience')}</strong>
              <ul style={{ margin: '8px 0 0 16px' }}>
                {experience.map((item) => (
                  <li key={item} style={{ marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: 14 }}>
              <strong>{t('about.stack')}</strong>
              <ul style={{ margin: '8px 0 0 16px' }}>
                {stack.map((item) => (
                  <li key={item} style={{ marginBottom: 6 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
