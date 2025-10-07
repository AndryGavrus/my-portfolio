import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? 'active' : ''}`;

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container nav">
        <div className="brand" onClick={() => go('/')} style={{ cursor: 'pointer' }} aria-label="Logo">
          <span className="brand__dot" />
          <NavLink to="/" end>Andrey Gavrus</NavLink>
        </div>

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>{t('nav.home')}</NavLink>
          <NavLink to="/about" className={linkClass}>{t('nav.about')}</NavLink>
          <NavLink to="/projects" className={linkClass}>{t('nav.projects')}</NavLink>
          <NavLink to="/contact" className={linkClass}>{t('nav.contact')}</NavLink>
        </nav>

        <div className="toolbar">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="burger__icon" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu__inner">
              <div className="mobile-menu__links">
                <button className="mobile-menu__link" onClick={() => go('/')}>{t('nav.home')}</button>
                <button className="mobile-menu__link" onClick={() => go('/about')}>{t('nav.about')}</button>
                <button className="mobile-menu__link" onClick={() => go('/projects')}>{t('nav.projects')}</button>
                <button className="mobile-menu__link" onClick={() => go('/contact')}>{t('nav.contact')}</button>
              </div>

              <div className="mobile-menu__footer">
                <div className="container" style={{ display: 'flex', gap: 8 }}>
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};
