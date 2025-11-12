import { useState, useCallback, useEffect } from 'react';

export const useMobileMenu = () => {
    const [open, setOpen] = useState(false);

    // Handle body overflow when mobile menu is open
    useEffect(() => {
        const hasOverflow = open;
        document.documentElement.style.overflow = hasOverflow ? 'hidden' : '';
        document.body.style.overflow = hasOverflow ? 'hidden' : '';
        
        // Cleanup function to reset overflow on unmount
        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [open]);

    // Prevent scroll jank when menu is open by using passive event listener
    useEffect(() => {
        if (open) {
            const handleScroll = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
            };
            
            document.body.addEventListener('touchmove', handleScroll, { passive: false });
            document.documentElement.addEventListener('touchmove', handleScroll, { passive: false });
            
            return () => {
                document.body.removeEventListener('touchmove', handleScroll);
                document.documentElement.removeEventListener('touchmove', handleScroll);
            };
        }
    }, [open]);

    const toggleMenu = useCallback(() => setOpen(v => !v), []);
    const closeMenu = useCallback(() => setOpen(false), []);
    const openMenu = useCallback(() => setOpen(true), []);

    return {
        open,
        toggleMenu,
        closeMenu,
        openMenu,
    };
};