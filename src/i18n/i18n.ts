import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';
import { store } from '../store/store';

i18n.use(initReactI18next).init({
    resources,
    lng: store.getState().locale.locale,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

// sync with store changes
store.subscribe(() => {
    const lng = store.getState().locale.locale;
    if (i18n.language !== lng) i18n.changeLanguage(lng);
});

export { i18n };
