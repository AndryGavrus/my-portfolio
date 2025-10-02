import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Theme = 'dark' | 'light';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme:
    (localStorage.getItem('theme') as Theme) ||
    (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
};

const slice = createSlice({
  name: 'theme',
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
  },
});

export const { setTheme, toggleTheme } = slice.actions;
export const themeReducer = slice.reducer;
