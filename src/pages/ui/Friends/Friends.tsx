import "@/app/App.css";
import FriendsList from "./FriendsList.tsx";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const Friends: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { friends } = useAuthUser();
	const friendsHandler = friends?.map((friendId, index) => (
		<FriendsList friendId={friendId} key={index} />
	));

	return (
		<main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				{friends.length !== 0
					? friendsHandler
					: "It seems you don't have anyone on your friends list yet..."}
			</div>
		</main>
	);
};

export default Friends;
