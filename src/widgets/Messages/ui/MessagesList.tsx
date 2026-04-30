import { FC } from "react";
import { Link } from "react-router";
import styles from "./MessagesList.module.css";
import { useGetUserByIdQuery } from "@/entities/user";
import {
	USER_UNKNOWN_ICON_URL,
	handleUserAvatarError,
} from "@/app/userUnknownIconUrl.ts";

const MessagesList: FC<{ friendId: string }> = ({ friendId }) => {
	const { data: userData } = useGetUserByIdQuery(friendId as string, {
		skip: !friendId,
	});

	return (
		<Link to={`/messages/${friendId}`} className={styles.friend}>
			<div className="flex-container">
				<img
					src={userData?.image || USER_UNKNOWN_ICON_URL}
					alt="Friend's avatar"
					className={styles.user__friendImage}
					onError={handleUserAvatarError}
				/>
				<span className="message__text">{`${userData?.firstName} ${userData?.lastName}`}</span>
			</div>
		</Link>
	);
};

export default MessagesList;
