import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store.ts";

export interface ThemeState {
	colorSchemes: { id: number; colorScheme: string }[];
	checkedTheme: string;
}

const initialState: ThemeState = {
	colorSchemes: [
		{ id: 0, colorScheme: "Yellow" },
		{ id: 1, colorScheme: "Black" },
		{ id: 2, colorScheme: "Gold" },
		{ id: 3, colorScheme: "Orange" },
		{ id: 4, colorScheme: "Pink" },
		{ id: 5, colorScheme: "Blue" },
		{ id: 6, colorScheme: "Green" },
		{ id: 7, colorScheme: "Indigo" },
	],
	checkedTheme: "",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<string>) => {
			state.checkedTheme = action.payload;
		},
	},
});

export const getCheckedTheme = (state: RootState) => state.theme.checkedTheme;
export const getColorSchemes = (state: RootState) => state.theme.colorSchemes;
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
