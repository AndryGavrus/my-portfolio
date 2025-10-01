import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? 'active' : ''}`;

  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">
          <span className="brand__dot" />
          <span>Portfolio</span>
        </div>

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            {t('nav.projects')}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t('nav.contact')}
          </NavLink>
        </nav>

        <div className="toolbar">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
