import { motion } from 'framer-motion';
import { aboutCardConfig } from '../config/animations';
import { useTranslation } from 'react-i18next';

type AboutCardProps = {
    children: React.ReactNode;
    delay?: number;
};

export const AboutCard = ({ children, delay = 0 }: AboutCardProps) => {
    return (
        <motion.div
            className="card about-card"
            {...aboutCardConfig(delay)}
        >
            {children}
        </motion.div>
    );
};

type AboutSectionProps = {
    title: string;
    children: React.ReactNode;
};

export const AboutSection = ({ title, children }: AboutSectionProps) => {
    const { t } = useTranslation();

    return (
        <>
            <h3 className="about-section">{t(title)}</h3>
            {children}
        </>
    );
};

type ListSectionProps = {
    items: string[];
    type?: 'list' | 'badges';
    itemKeyPrefix: string;
};

export const ListSection = ({ items, type = 'list', itemKeyPrefix }: ListSectionProps) => {
    if (type === 'badges') {
        return (
            <div className="badges">
                {items.map((item, index) => (
                    <span className="badge" key={`${itemKeyPrefix}-${index}`}>
                        {item}
                    </span>
                ))}
            </div>
        );
    }

    return (
        <ul className="about-list">
            {items.map((item, index) => (
                <li key={`${itemKeyPrefix}-${index}`} className="about-list-item">
                    {item}
                </li>
            ))}
        </ul>
    );
};

type AboutSubCardProps = {
    title: string;
    items: string[];
    itemKeyPrefix: string;
};

export const AboutSubCard = ({ title, items, itemKeyPrefix }: AboutSubCardProps) => {
    const { t } = useTranslation();

    return (
        <div className="card about-sub-card">
            <strong>{t(title)}</strong>
            <ListSection items={items} type="list" itemKeyPrefix={itemKeyPrefix} />
        </div>
    );
};