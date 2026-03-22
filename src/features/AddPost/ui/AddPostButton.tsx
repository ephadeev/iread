import { ChangeEvent, FC, MouseEvent, SubmitEvent } from "react";
import "@/app/App.css";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/store/lib/reduxHooks.ts";
import { changePost, getNewPostText } from "@/entities/post/model/postSlice.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useAddPostMutation } from "@/entities/post/api/post.api.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const AddPostButton: FC = () => {
	const dispatch = useAppDispatch();
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { uid } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}
	const postText = useAppSelector(getNewPostText);
	const [addPost] = useAddPostMutation();

	const addPostHandler = async (event: SubmitEvent | MouseEvent) => {
		event.preventDefault();
		if (postText) {
			await addPost({
				text: postText,
				isPrivate: false,
				userId: uid,
			}).unwrap();
			dispatch(changePost(""));
		}
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) =>
		dispatch(changePost(event.target.value));

	return (
		<div className="container bgColorGray flex-container">
			<form onSubmit={addPostHandler} className="post__button">
				<input
					id="post"
					type="text"
					name="post"
					placeholder="anything new?"
					className={`br5 btDefault bt${checkedTheme} button`}
					onChange={onChange}
					value={postText}
					autoComplete="off"
					required
				/>
			</form>
			<button type="submit" onClick={addPostHandler} className={`btn m15`}>
				<i className="fas fa-paper-plane"></i>
			</button>
		</div>
	);
};

export default AddPostButton;
