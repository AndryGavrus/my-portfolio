import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleTheme, toggleLocale } from '../store/appSlice';

export const Controls = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(s => s.app.theme);
    const locale = useAppSelector(s => s.app.locale);

    return (
        <div className="toolbar">
            <button
                className="btn btn--ghost"
                aria-label="Switch language"
                onClick={() => dispatch(toggleLocale())}
                title={`Lang: ${locale.toUpperCase()}`}
            >
                {locale.toUpperCase()}
            </button>
            <button
                className="btn btn--ghost"
                aria-label="Toggle theme"
                onClick={() => dispatch(toggleTheme())}
                title={`Theme: ${theme}`}
            >
                {theme === 'dark' ? '🌙' : '🌞'}
            </button>
        </div>
    );
};