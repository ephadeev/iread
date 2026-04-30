import { FC } from "react";
import { Link } from "react-router";
import styles from "./FriendsList.module.css";
import { IUser, useGetUserByIdQuery } from "@/entities/user";
import {
	USER_UNKNOWN_ICON_URL,
	handleUserAvatarError,
} from "@/app/userUnknownIconUrl.ts";

const FriendsList: FC<{ friendId: IUser["friends"][number] }> = ({
	friendId,
}) => {
	const { data: userData } = useGetUserByIdQuery(friendId, {
		skip: !friendId,
	});

	return (
		<Link to={`/users/${friendId}`} className={styles.friend}>
			<div>
				<img
					src={userData?.image || USER_UNKNOWN_ICON_URL}
					alt=""
					className={styles.user__friendImage}
					onError={handleUserAvatarError}
				/>
				<span>{`${userData?.firstName} ${userData?.lastName}`}</span>
			</div>
		</Link>
	);
};

export default FriendsList;
