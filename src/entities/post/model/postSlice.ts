import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store.ts";

export interface PostState {
	newPostText: string;
}

const initialState: PostState = {
	newPostText: "",
};

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		changePost: (state, action: PayloadAction<string>) => {
			state.newPostText = action.payload;
		},
	},
});

export const getNewPostText = (state: RootState) => state.post.newPostText;
export const { changePost } = postSlice.actions;
export default postSlice.reducer;
