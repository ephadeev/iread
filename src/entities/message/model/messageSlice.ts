import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store.ts";

export interface MessageState {
	newMessageText: string;
}

const initialState: MessageState = {
	newMessageText: "",
};

export const messageSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		// create new message
		changeMessage: (state, action: PayloadAction<string>) => {
			state.newMessageText = action.payload;
		},
	},
});

export const getNewMessageText = (state: RootState) =>
	state.message.newMessageText;
export const { changeMessage } = messageSlice.actions;

export default messageSlice.reducer;
