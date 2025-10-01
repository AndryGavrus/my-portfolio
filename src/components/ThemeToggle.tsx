import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.theme.theme);

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => dispatch(toggleTheme())}
      title={`Theme: ${theme}`}
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
