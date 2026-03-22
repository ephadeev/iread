import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store.ts";

export interface ProfileState {
	firstName: string;
	lastName: string;
	Hometown: string;
	isLoading: boolean;
	error: null;
}

const initialState: ProfileState = {
	firstName: "",
	lastName: "",
	Hometown: "",
	isLoading: false,
	error: null,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		changeFirstName: (state, action: PayloadAction<string>) => {
			state.firstName = action.payload;
		},
		changeLastName: (state, action: PayloadAction<string>) => {
			state.lastName = action.payload;
		},
		changeHometown: (state, action: PayloadAction<string>) => {
			state.Hometown = action.payload;
		},
	},
});

export const getFirstName = (state: RootState) => state.profile.firstName;
export const getLastName = (state: RootState) => state.profile.lastName;
export const getHometown = (state: RootState) => state.profile.Hometown;
export const { changeFirstName, changeLastName, changeHometown } =
	profileSlice.actions;

export default profileSlice.reducer;
