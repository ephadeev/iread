import { FC } from "react";
import { Link } from "react-router";
import styles from "./MessagesList.module.css";
import {useGetUserByIdQuery} from "@/entities/user";

const MessagesList: FC<{ friendId: string }> = ({ friendId }) => {
	const { data: userData } = useGetUserByIdQuery(friendId as string, {
		skip: !friendId,
	});

	return (
		<Link to={`/messages/${friendId}`} className={styles.friend}>
			<div className="flex-container">
				<img
					src={userData?.image}
					alt="Friend's avatar"
					className={styles.user__friendImage}
				/>
				<span className="message__text">{`${userData?.firstName} ${userData?.lastName}`}</span>
			</div>
		</Link>
	);
};

export default MessagesList;
