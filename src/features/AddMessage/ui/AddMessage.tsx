import { FC, useContext, SubmitEvent, MouseEvent, ChangeEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import "@/app/App.css";
import { FirebaseFirestoreContext } from "@/app/index.tsx";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/store/lib/reduxHooks.ts";
import {
	changeMessage,
	getNewMessageText,
} from "@/entities/message/model/messageSlice.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";

const AddMessage: FC<{ currentUserUid: string; friendsUid: string }> = ({
	currentUserUid,
	friendsUid,
}) => {
	const db = useContext(FirebaseFirestoreContext);
	const dispatch = useAppDispatch();
	const checkedTheme = useAppSelector(getCheckedTheme);
	const messageText = useAppSelector(getNewMessageText);

	const addMessageHandler = (
		messageText: string,
		currentUserUid: string,
		friendsUid: string,
	) => {
		db &&
			addDoc(collection(db, "messages"), {
				text: messageText,
				receiver_id: friendsUid,
				sender_id: currentUserUid,
				time: new Date(),
			}).catch((err) => console.log("Error adding document", err));
	};

	const addMessage = (event: SubmitEvent | MouseEvent) => {
		event.preventDefault();
		addMessageHandler(messageText, currentUserUid, friendsUid);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) =>
		dispatch(changeMessage(event.target.value));

	return (
		<div className="bgColorGray flex-container">
			<form className="post__button" onSubmit={addMessage}>
				<input
					id="message"
					type="text"
					name="message"
					placeholder="Write a message..."
					className={`br5 btDefault bt${checkedTheme} button`}
					onChange={onChange}
					value={messageText}
					autoComplete="off"
				/>
			</form>
			<button onClick={addMessage} className={`btn m15`}>
				<i className="fas fa-paper-plane"></i>
			</button>
		</div>
	);
};

export default AddMessage;
