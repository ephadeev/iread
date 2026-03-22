import { Timestamp } from "firebase/firestore";

export interface IMessage {
	receiver_id: string;
	sender_id: string;
	text: string;
	time: Timestamp;
}

export interface MessageWithId extends IMessage {
	messageId: string;
}
