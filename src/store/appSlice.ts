import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light';
type Locale = 'ru' | 'en';

type AppState = {
    theme: Theme;
    locale: Locale;
};

const initialState: AppState = {
    theme:
        (localStorage.getItem('theme') as Theme) ||
        (matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark'),
    locale: (localStorage.getItem('locale') as Locale) || 'ru',
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
            localStorage.setItem('theme', state.theme);
        },
        toggleTheme(state) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', state.theme);
        },
        setLocale(state, action: PayloadAction<Locale>) {
            state.locale = action.payload;
            localStorage.setItem('locale', state.locale);
        },
        toggleLocale(state) {
            state.locale = state.locale === 'ru' ? 'en' : 'ru';
            localStorage.setItem('locale', state.locale);
        },
    },
});

export const { setTheme, toggleTheme, setLocale, toggleLocale } = slice.actions;
export const appReducer = slice.reducer;
export type { Theme, Locale };