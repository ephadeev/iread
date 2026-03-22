import { FC, SubmitEvent, MouseEvent, ChangeEvent } from "react";
import "@/app/App.css";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/store/lib/reduxHooks.ts";
import {
	changeMessage,
	getNewMessageText,
} from "@/entities/message/model/messageSlice.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useAddMessageMutation } from "@/entities/message";

const AddMessage: FC<{ currentUserUid: string; friendsUid: string }> = ({
	currentUserUid,
	friendsUid,
}) => {
	const dispatch = useAppDispatch();
	const checkedTheme = useAppSelector(getCheckedTheme);
	const messageText = useAppSelector(getNewMessageText);
	const [addMessage] = useAddMessageMutation();

	const addMessageHandler = (event: SubmitEvent | MouseEvent) => {
		event.preventDefault();
		addMessage({
			text: messageText,
			sender_id: currentUserUid,
			receiver_id: friendsUid,
		});
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeMessage(event.target.value));
	};

	return (
		<div className="bgColorGray flex-container">
			<form className="post__button" onSubmit={addMessageHandler}>
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
			<button onClick={addMessageHandler} className={`btn m15`}>
				<i className="fas fa-paper-plane"></i>
			</button>
		</div>
	);
};

export default AddMessage;
