import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	addDoc,
	and,
	collection,
	CollectionReference,
	deleteDoc,
	doc,
	onSnapshot,
	or,
	orderBy,
	query,
	QueryDocumentSnapshot,
	serverTimestamp,
	where,
} from "firebase/firestore";
import { db } from "@/app/index.tsx";
import {
	IMessage,
	IMessageFromFirestore,
	MessageWithId,
} from "../model/IMessage.ts";

export const createMessagesCollection =
	(): CollectionReference<IMessageFromFirestore> => {
		return collection(db, "messages").withConverter<IMessageFromFirestore>({
			toFirestore(message: IMessageFromFirestore): IMessageFromFirestore {
				return message;
			},
			fromFirestore(
				snapshot: QueryDocumentSnapshot<IMessageFromFirestore>,
			): IMessageFromFirestore {
				return snapshot.data();
			},
		});
	};

export const messageApi = createApi({
	reducerPath: "messageApi",
	baseQuery: fakeBaseQuery(),
	tagTypes: ["Message"],
	endpoints: (build) => ({
		listenMessages: build.query<
			MessageWithId[],
			Omit<IMessage, "text" | "time">
		>({
			queryFn: async () => ({ data: [] }),
			onCacheEntryAdded: async (
				arg,
				{ updateCachedData, cacheEntryRemoved },
			) => {
				const { receiver_id, sender_id } = arg;
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
					orderBy("time", "asc"),
				);
				const unsubscribe = onSnapshot(sentAndIncomeMessages, (snapshot) => {
					const messagesWithId: MessageWithId[] = snapshot.docs.map(
						(message): MessageWithId => {
							const data = message.data({ serverTimestamps: "estimate" });
							const timestamp = data.time;
							return {
								messageId: message.id,
								receiver_id: data.receiver_id,
								sender_id: data.sender_id,
								text: data.text,
								time: timestamp ? timestamp.toDate().getTime() : Date.now(),
							};
						},
					);
					updateCachedData(() => messagesWithId);
				});

				await cacheEntryRemoved;
				unsubscribe();
			},
			providesTags: ["Message"],
		}),
		addMessage: build.mutation<MessageWithId, Omit<IMessage, "time">>({
			queryFn: async ({ text, sender_id, receiver_id }) => {
				try {
					const messagesCollection = createMessagesCollection();
					await addDoc(messagesCollection, {
						text,
						receiver_id,
						sender_id,
						time: serverTimestamp(),
					});
					return { data: undefined };
				} catch (error) {
					return { error };
				}
			},
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
		}),
	}),
});

export const {
	useListenMessagesQuery,
	useAddMessageMutation,
	useDeleteMessageMutation,
} = messageApi;
