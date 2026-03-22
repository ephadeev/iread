import {
	configureStore,
	type ThunkAction,
	type Action,
} from "@reduxjs/toolkit";
import { postReducer, postApi } from "@/entities/post";
import { messageReducer, messageApi } from "@/entities/message";
import { userApi, authApi } from "@/entities/user";
import themeSlice from "@/shared/store/model/themeSlice.ts";
import profileSlice from "@/shared/store/model/profileSlice.ts";

export const store = configureStore({
	reducer: {
		message: messageReducer,
		post: postReducer,
		theme: themeSlice,
		profile: profileSlice,
		[postApi.reducerPath]: postApi.reducer,
		[messageApi.reducerPath]: messageApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			postApi.middleware,
			messageApi.middleware,
			userApi.middleware,
			authApi.middleware,
		),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
