import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	addDoc,
	collection,
	CollectionReference,
	query,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	QueryDocumentSnapshot,
	where,
	or,
	and,
	orderBy,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "@/app/index.tsx";
import { IMessage, MessageWithId } from "../model/IMessage.ts";

export const createMessagesCollection = (): CollectionReference<IMessage> => {
	return collection(db, "messages").withConverter<IMessage>({
		toFirestore(message: IMessage): IMessage {
			return message;
		},
		fromFirestore(snapshot: QueryDocumentSnapshot<IMessage>): IMessage {
			return snapshot.data();
		},
	});
};

export const messageApi = createApi({
	reducerPath: "messageApi",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["Message"],
	endpoints: (build) => ({
		getMessages: build.query<MessageWithId[], Omit<IMessage, "text" | "time">>({
			queryFn: async ({ receiver_id, sender_id }) => {
				try {
					const messagesCollection = createMessagesCollection();
					const sentAndIncomeMessages = query(
						messagesCollection,
						or(
							and(
								where("receiver_id", "==", receiver_id),
								where("sender_id", "==", sender_id),
							),
							and(
								where("receiver_id", "==", sender_id),
								where("sender_id", "==", receiver_id),
							),
						),
						orderBy("time", "desc"),
					);

					const snapshot = await getDocs(sentAndIncomeMessages);
					const messagesWithId: MessageWithId[] = snapshot.docs.map(
						(message): MessageWithId => ({
							messageId: message.id,
							...message.data(),
						}),
					);
					return { data: messagesWithId };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ["Message"],
		}),
		addMessage: build.mutation<MessageWithId, Omit<IMessage, "time">>({
			queryFn: async ({ text, sender_id, receiver_id }) => {
				try {
					const messagesCollection = createMessagesCollection();
					const newMessageRef = await addDoc(messagesCollection, {
						text,
						receiver_id,
						sender_id,
						time: serverTimestamp(),
					});
					const newMessageSnapshot = await getDoc(
						doc(messagesCollection, newMessageRef.id),
					);
					const newMessage: MessageWithId = {
						messageId: newMessageRef.id,
						...newMessageSnapshot.data()!,
					} as MessageWithId;
					return { data: newMessage };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["Message"],
		}),
		deleteMessage: build.mutation<void, string>({
			queryFn: async (messageId) => {
				try {
					const messagesCollection = createMessagesCollection();
					await deleteDoc(doc(messagesCollection, messageId));
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["Message"],
		}),
	}),
});

export const {
	useGetMessagesQuery,
	useAddMessageMutation,
	useDeleteMessageMutation,
} = messageApi;
