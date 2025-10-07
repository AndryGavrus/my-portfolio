import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleLocale } from '../store/localeSlice';

export const LanguageSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((s) => s.locale.locale);

  return (
    <button
      className="btn btn--ghost"
      aria-label="Switch language"
      onClick={() => dispatch(toggleLocale())}
      title={`Lang: ${locale}`}
    >
      {locale.toUpperCase()}
    </button>
  );
};
