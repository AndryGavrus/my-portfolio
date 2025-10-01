import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { toggleLocale } from '../store/localeSlice';

const LanguageSwitcher: React.FC = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((s) => s.locale.locale);

  return (
    <button
      className="lang-switcher"
      aria-label="Switch language"
      onClick={() => dispatch(toggleLocale())}
      title={`Lang: ${locale}`}
    >
      {locale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
