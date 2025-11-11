import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Controls } from './Controls';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInConfig } from '../config/animations';

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
        const hasOverflow = open;
        document.documentElement.style.overflow = hasOverflow ? 'hidden' : '';
        document.body.style.overflow = hasOverflow ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [open]);

    const navItems = [
        { path: '/', label: 'nav.home', end: true },
        { path: '/about', label: 'nav.about', end: false },
        { path: '/projects', label: 'nav.projects', end: false },
        { path: '/contact', label: 'nav.contact', end: false },
    ];

    return (
        <header className="header">
            <div className="container nav">
                <div
                    className="brand header-brand"
                    onClick={() => go('/')}
                    aria-label="Logo"
                >
                    <span className="brand__dot" />
                    <NavLink to="/" end>
                        Andrey Gavrus
                    </NavLink>
                </div>

                <nav className="nav__links" aria-label="Primary">
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
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="burger__icon" />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.aside {...fadeInConfig}>
                        <div className="mobile-menu__inner">
                            <div className="mobile-menu__links">
                                {navItems.map(({ path, label }) => (
                                    <button
                                        key={path}
                                        className="mobile-menu__link"
                                        onClick={() => go(path)}
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
