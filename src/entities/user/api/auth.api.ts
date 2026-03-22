import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	onAuthStateChanged,
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "@/app/index.tsx";
import { IAuthUser } from "../model/IUser.ts";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["Auth"],
	endpoints: (build) => ({
		signUp: build.mutation<void, { email: string; password: string }>({
			queryFn: async ({ email, password }) => {
				try {
					await createUserWithEmailAndPassword(auth, email, password);
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
		}),
		signIn: build.mutation<void, { email: string; password: string }>({
			queryFn: async ({ email, password }) => {
				try {
					await signInWithEmailAndPassword(auth, email, password);
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
		}),
		signOut: build.mutation<void, void>({
			queryFn: async () => {
				try {
					await signOut(auth);
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
		}),
		listenAuthState: build.query<IAuthUser | null, void>({
			queryFn: async () => ({ data: null }),
			onCacheEntryAdded: async (
				_arg,
				{ updateCachedData, cacheEntryRemoved },
			) => {
				const unsubscribe = onAuthStateChanged(
					auth,
					async (user: User | null) => {
						// remove cache if logged out
						if (!user) {
							updateCachedData(() => null);
							return;
						}

						const authUser: IAuthUser = {
							uid: user.uid,
							email: user.email,
							displayName: user.displayName,
							photoURL: user.photoURL,
						};

						updateCachedData(() => authUser);
					},
				);
				await cacheEntryRemoved;
				unsubscribe();
			},
			providesTags: ["Auth"],
		}),
	}),
});

export const {
	useSignUpMutation,
	useSignInMutation,
	useSignOutMutation,
	useListenAuthStateQuery,
} = authApi;
