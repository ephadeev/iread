import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import stylesFriends from "./FriendsList.module.css";
import { FirebaseFirestoreContext } from "@/app/index.tsx";

const FriendsList: FC<{ friendId: string }> = ({ friendId }) => {
	const [friendObject, setFriendObject] = useState<DocumentData>();
	const db = useContext(FirebaseFirestoreContext);

	useEffect(() => {
		db &&
			getDoc(doc(db, "users", friendId))
				.then((response) => setFriendObject(response.data()))
				.catch((err) => console.log(err.message));
	}, []);

	return (
		<Link to={`/users/${friendId}`} className={stylesFriends.friend}>
			<div>
				<img
					src={friendObject?.image}
					alt=""
					className={stylesFriends.user__friendImage}
				/>
				<span>{`${friendObject?.firstName} ${friendObject?.lastName}`}</span>
			</div>
		</Link>
	);
};

export default FriendsList;
