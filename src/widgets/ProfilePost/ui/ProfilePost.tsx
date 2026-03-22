import { FC } from "react";
import "@/app/App.css";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useDeletePostMutation } from "@/entities/post/api/post.api.ts";

const ProfilePost: FC<{
	postText: string;
	postId: string;
	hours: string;
	minutes: string;
}> = ({ postText, postId, hours, minutes }) => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const [deletePost] = useDeletePostMutation();

	const deletePostHandler = () => {
		deletePost(postId).unwrap();
	};

	return (
		<div className="container post__container bgColorGray">
			{postText}
			<span
				className={`post__time colorDefault color${checkedTheme}`}
			>{`${hours}:${minutes}`}</span>
			<i
				className={`fas fa-trash buttons colorDefault color${checkedTheme}`}
				onClick={deletePostHandler}
			></i>
		</div>
	);
};

export default ProfilePost;
