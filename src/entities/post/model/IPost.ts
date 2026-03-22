import { Timestamp } from "firebase/firestore";

export interface IPostFromFirestore {
	isPrivate: boolean;
	text: string;
	time: Timestamp;
	userId: string;
}

export interface IPost {
	isPrivate: boolean;
	text: string;
	time: number;
	userId: string;
}

export interface PostWithId extends IPost {
	postId: string;
}
