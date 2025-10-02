import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Locale = 'ru' | 'en';

interface LocaleState {
  locale: Locale;
}

const initialState: LocaleState = {
  locale: (localStorage.getItem('locale') as Locale) || 'ru',
};

const slice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
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

export const { setLocale, toggleLocale } = slice.actions;
export const localeReducer = slice.reducer;
