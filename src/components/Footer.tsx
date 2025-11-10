import React from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from '../utils';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const year = getCurrentYear();

    return (
        <footer className="footer">
            <div className="container">
                <hr className="sep" />
                <div className="footer-content">
                    <span>© {year} Portfolio</span>
                    <span>{t('footer.rights')}</span>
                </div>
            </div>
        </footer>
    );
};
