import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;

export const selectDarkMode = (state: RootState) => state.theme.darkMode;
