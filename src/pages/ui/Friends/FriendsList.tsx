import { FC } from "react";
import { Link } from "react-router";
import styles from "./FriendsList.module.css";
import {useGetUserByIdQuery} from "@/entities/user";

const FriendsList: FC<{ friendId: string }> = ({ friendId }) => {
	const { data: userData } = useGetUserByIdQuery(friendId as string, {
		skip: !friendId,
	});

	return (
		<Link to={`/users/${friendId}`} className={styles.friend}>
			<div>
				<img
					src={userData?.image}
					alt=""
					className={styles.user__friendImage}
				/>
				<span>{`${userData?.firstName} ${userData?.lastName}`}</span>
			</div>
		</Link>
	);
};

export default FriendsList;
