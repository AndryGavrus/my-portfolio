import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Controls } from './Controls';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInConfig } from '../config/animations';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useNavigation } from '../hooks/useNavigation';
import { useNavItems } from '../hooks/useNavItems';

export const Header = () => {
    const { t } = useTranslation();
    const { open, toggleMenu, closeMenu } = useMobileMenu();
    const { go } = useNavigation();
    const navItems = useNavItems();

    const handleNav = useCallback((path: string) => {
        go(path);
        closeMenu();
    }, [go, closeMenu]);

    const linkClass = useCallback(({ isActive }: { isActive: boolean }) =>
        `nav__link ${isActive ? 'active' : ''}`, []);

    // Handle backdrop click to close menu
    const handleBackdropClick = useCallback(() => {
        closeMenu();
    }, [closeMenu]);

    return (
        <header className="header">
            <div className="container nav">
                <div
                    className="brand header-brand"
                    onClick={() => handleNav('/')}
                    aria-label={t('nav.home')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleNav('/')}
                >
                    <span className="brand__dot" />
                    <NavLink to="/" end>
                        Andrey Gavrus
                    </NavLink>
                </div>

                <nav className="nav__links" aria-label={t('nav.primary')}>
                    {navItems.map(({ path, label, end }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={linkClass}
                            end={end}
                        >
                            {t(label)}
                        </NavLink>
                    ))}
                </nav>

                <div className="toolbar">
                    <Controls />
                </div>

                <button
                    className={`burger ${open ? 'burger--open' : ''}`}
                    aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
                    aria-expanded={open}
                    onClick={toggleMenu}
                    aria-controls="mobile-menu"
                >
                    <span className="burger__icon" aria-hidden="true" />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.aside
                        {...fadeInConfig}
                        id="mobile-menu"
                        onClick={handleBackdropClick} // Close menu when clicking backdrop
                    >
                        <div className="mobile-menu__inner" onClick={(e) => e.stopPropagation()}>
                            <div className="mobile-menu__links">
                                {navItems.map(({ path, label }) => (
                                    <button
                                        key={path}
                                        className="mobile-menu__link"
                                        onClick={() => handleNav(path)}
                                        aria-label={t(label)}
                                    >
                                        {t(label)}
                                    </button>
                                ))}
                            </div>

                            <div className="mobile-menu__footer">
                                <div className="container header-mobile-footer">
                                    <Controls />
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </header>
    );
};
