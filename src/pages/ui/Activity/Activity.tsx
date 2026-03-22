import "@/app/App.css";
import ActivityPost from "@/widgets/ActivityPost/ui/ActivityPost.tsx";
import AddPost from "@/features/AddPost/ui/AddPostButton.tsx";
import { FC } from "react";
import { PostWithId } from "@/entities/post/model/IPost.ts";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";

const Activity: FC<{ postsFromProps: PostWithId[] | undefined }> = ({
	postsFromProps,
}) => {
	const checkedTheme = useAppSelector(getCheckedTheme);

	const posts = postsFromProps?.map((post) => {
		const date = new Date(post.time);
		return (
			<ActivityPost
				userId={post.userId}
				postText={post.text}
				key={post.postId}
				hours={date.getHours().toString().padStart(2, "0")}
				minutes={date.getMinutes().toString().padStart(2, "0")}
				day={date.getDate()}
				month={date.getMonth().toString().padStart(2, "0")}
				year={date.getFullYear()}
				checkedTheme={checkedTheme}
			/>
		);
	});
	// TODO: need to show only posts with isPrivate=false
	// TODO: on Avatar click open http://localhost:3000/user/id
	// TODO: on Avatar mouseover show a little bit more info about user
	return (
		<main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<AddPost />
			{posts}
		</main>
	);
};

export default Activity;
