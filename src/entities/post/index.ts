export type { IPost, IPostFromFirestore, PostWithId } from "./model/IPost.ts";
export {
	postSlice,
	getNewPostText,
	changePost,
} from "./model/postSlice.ts";
export { default as postReducer } from "./model/postSlice.ts";
export {
	postApi,
	useGetPostsQuery,
	useGetPostsByIdQuery,
	useAddPostMutation,
	useDeletePostMutation,
} from "./api/post.api.ts";
