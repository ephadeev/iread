import { Timestamp } from "firebase/firestore";

export interface IMessageFromFirestore {
	receiver_id: string;
	sender_id: string;
	text: string;
	time: Timestamp;
}

export interface IMessage {
	receiver_id: string;
	sender_id: string;
	text: string;
	time: number;
}

export interface MessageWithId extends IMessage {
	messageId: string;
}
