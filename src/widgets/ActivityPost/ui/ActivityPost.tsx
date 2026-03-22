import { FC } from "react";
import stylesPost from "./ActivityPost.module.css";
import "@/app/App.css";
import { useGetUserByIdQuery } from "@/entities/user/api/user.api.ts";

const ActivityPost: FC<{
	userId: string;
	postText: string;
	hours: string;
	minutes: string;
	day: number;
	month: string;
	year: number;
	checkedTheme: string;
}> = ({ userId, postText, hours, minutes, day, month, year, checkedTheme }) => {
	const { data: userData } = useGetUserByIdQuery(userId as string, {
		skip: !userId,
	});

	return (
		<div className={stylesPost.posts}>
			<div className="container flex-container bgColorGray post__container">
				<>
					<img
						className="small-avatar"
						src={
							userData?.image || "https://lookp.ru/images/user_unknown_icon.jpg"
						}
						alt="Profile avatar"
					/>
					<span className={stylesPost.posts__author}>
						{`${userData?.firstName || "John"} 
                        ${userData?.lastName || "Smith"}:`}
					</span>
				</>
				<span className="post__text">{postText}</span>
				<span
					className={`post__time colorDefault color${checkedTheme}`}
				>{`${hours}:${minutes}`}</span>
				<span
					className={`post__date colorDefault color${checkedTheme}`}
				>{`${day}.${month}.${year}`}</span>
			</div>
		</div>
	);
};

export default ActivityPost;
