import { Section } from '../components/Section';
import { useTranslation } from 'react-i18next';
import { AboutCard, AboutSection, ListSection, AboutSubCard } from '../components/AboutCard';

type TranslationArray = string[];

export const About = () => {
    const { t } = useTranslation();
    
    const education = t('about.educationList', { returnObjects: true }) as TranslationArray;
    const skills = t('about.skills', { returnObjects: true }) as TranslationArray;
    const experience = t('about.experienceList', { returnObjects: true }) as TranslationArray;
    const stack = t('about.stackList', { returnObjects: true }) as TranslationArray;

    return (
        <Section title={t('about.title')} subtitle={t('about.subtitle')}>
            <div className="grid grid--2">
                <AboutCard delay={0}>
                    <p className="about-section">{t('about.body1')}</p>
                    <p className="about-section">{t('about.body2')}</p>
                    <p className="about-section">{t('about.body3')}</p>
                    <hr className="sep" />
                    <AboutSection title="about.skillsTitle">
                        <ListSection items={skills} type="badges" itemKeyPrefix="skill" />
                    </AboutSection>
                    <hr className="sep" />
                    <AboutSection title="about.education">
                        <ListSection items={education} type="list" itemKeyPrefix="education" />
                    </AboutSection>
                </AboutCard>

                <AboutCard delay={0}>
                    <AboutSection title="about.infoTitle">
                        <div className="grid about-grid">
                            <AboutSubCard title="about.experience" items={experience} itemKeyPrefix="experience" />
                            <AboutSubCard title="about.stack" items={stack} itemKeyPrefix="stack" />
                        </div>
                    </AboutSection>
                </AboutCard>
            </div>
        </Section>
    );
};
