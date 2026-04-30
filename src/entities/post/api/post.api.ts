import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	addDoc,
	collection,
	CollectionReference,
	deleteDoc,
	doc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	QueryDocumentSnapshot,
	serverTimestamp,
	where,
} from "firebase/firestore";
import { db } from "@/app/index.tsx";
import { IPost, IPostFromFirestore, PostWithId } from "../model/IPost.ts";

export const createPostsCollection =
	(): CollectionReference<IPostFromFirestore> => {
		return collection(db, "posts").withConverter<IPostFromFirestore>({
			toFirestore(post: IPostFromFirestore): IPostFromFirestore {
				return post;
			},
			fromFirestore(
				snapshot: QueryDocumentSnapshot<IPostFromFirestore>,
			): IPostFromFirestore {
				return snapshot.data();
			},
		});
	};

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["Post", "PostsById"],
	endpoints: (build) => ({
		listenPosts: build.query<PostWithId[], void>({
			queryFn: async () => ({ data: [] }),
			onCacheEntryAdded: async (
				_arg,
				{ updateCachedData, cacheEntryRemoved },
			) => {
				const postsCollection = createPostsCollection();
				const postsQuery = query(postsCollection, orderBy("time", "desc"));
				const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
					const postsWithId: PostWithId[] = snapshot.docs.map(
						(post): PostWithId => {
							const data = post.data({ serverTimestamps: "estimate" });
							const timestamp = data.time;
							return {
								postId: post.id,
								isPrivate: data.isPrivate,
								text: data.text,
								userId: data.userId,
								time: timestamp ? timestamp.toDate().getTime() : Date.now(),
							};
						},
					);
					updateCachedData(() => postsWithId);
				});

				await cacheEntryRemoved;
				unsubscribe();
			},
			providesTags: ["Post"],
		}),
		getPostsById: build.query<PostWithId[], string>({
			queryFn: async (userId) => {
				try {
					const postsCollection = createPostsCollection();
					const postsQuery = query(
						postsCollection,
						where("userId", "==", userId),
						orderBy("time", "desc"),
					);
					const snapshot = await getDocs(postsQuery);
					const posts = snapshot.docs.map((post): PostWithId => {
						const data = post.data();
						return {
							postId: post.id,
							isPrivate: data.isPrivate,
							text: data.text,
							userId: data.userId,
							time: data.time.toDate().getTime(),
						};
					});
					return { data: posts };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ["PostsById"],
		}),
		addPost: build.mutation<void, Omit<IPost, "time">>({
			queryFn: async ({ text, isPrivate, userId }) => {
				try {
					const postsCollection = createPostsCollection();
					await addDoc(postsCollection, {
						text,
						isPrivate,
						userId,
						time: serverTimestamp(),
					});
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["PostsById"],
		}),
		deletePost: build.mutation<void, string>({
			queryFn: async (postId) => {
				try {
					const postsCollection = createPostsCollection();
					await deleteDoc(doc(postsCollection, postId));
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["PostsById"],
		}),
	}),
});

export const {
	useListenPostsQuery,
	useGetPostsByIdQuery,
	useAddPostMutation,
	useDeletePostMutation,
} = postApi;
