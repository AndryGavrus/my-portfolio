import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <hr className="sep" />
        <div style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
          <span>© {year} Portfolio</span>
          <span>{t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
