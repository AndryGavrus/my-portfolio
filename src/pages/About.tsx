import React from 'react';
import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { slideInConfig } from '../config/animations';

export const About: React.FC = () => {
    const { t } = useTranslation();
    const education = t<string[], any>('about.educationList', {
        returnObjects: true,
    });
    const skills = t<string[], any>('about.skills', { returnObjects: true });
    const experience = t<string[], any>('about.experienceList', {
        returnObjects: true,
    });
    const stack = t<string[], any>('about.stackList', { returnObjects: true });

    return (
        <Section title={t('about.title')} subtitle={t('about.subtitle')}>
            <div className="grid grid--2">
                <motion.div
                    className="card about-card"
                    {...slideInConfig}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="about-section">{t('about.body1')}</p>
                    <p className="about-section">{t('about.body2')}</p>
                    <p className="about-section">{t('about.body3')}</p>
                    <hr className="sep" />
                    <h3 className="about-section">{t('about.skillsTitle')}</h3>
                    <div className="badges">
                        {skills.map(s => (
                            <span className="badge" key={s}>
                                {s}
                            </span>
                        ))}
                    </div>
                    <hr className="sep" />
                    <h3 className="about-section">{t('about.education')}</h3>
                    <ul className="about-list">
                        {education.map(item => (
                            <li key={item} className="about-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="card about-card"
                    {...slideInConfig}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                >
                    <h3 className="about-section">{t('about.infoTitle')}</h3>
                    <div className="grid about-grid">
                        <div className="card about-sub-card">
                            <strong>{t('about.experience')}</strong>
                            <ul className="about-list">
                                {experience.map(item => (
                                    <li key={item} className="about-list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card about-sub-card">
                            <strong>{t('about.stack')}</strong>
                            <ul className="about-list">
                                {stack.map(item => (
                                    <li key={item} className="about-list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
