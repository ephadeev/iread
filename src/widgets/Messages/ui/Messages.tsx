import "@/app/App.css";
import MessagesList from "@/widgets/Messages/ui/MessagesList.tsx";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { FC } from "react";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const Messages: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { friends } = useAuthUser();
	const messagesHandler = friends?.map((friend: string) => (
		<MessagesList friendId={friend} key={friend} />
	));

	return (
		<main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				{friends.length !== 0
					? messagesHandler
					: " If you want to write a message to someone, then it's time to add someone to your friends list..."}
			</div>
		</main>
	);
};

export default Messages;
