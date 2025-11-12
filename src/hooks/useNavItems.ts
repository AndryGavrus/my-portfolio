import { useMemo } from 'react';

export const useNavItems = () => {
    return useMemo(() => [
        { path: '/', label: 'nav.home', end: true },
        { path: '/about', label: 'nav.about', end: false },
        { path: '/projects', label: 'nav.projects', end: false },
        { path: '/contact', label: 'nav.contact', end: false },
    ], []);
};