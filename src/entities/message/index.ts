export type { IMessage, MessageWithId } from "./model/IMessage.ts";
export {
	messageSlice,
	getNewMessageText,
	changeMessage,
} from "./model/messageSlice.ts";
export { default as messageReducer } from "./model/messageSlice.ts";
export {
	messageApi,
	useGetMessagesQuery,
	useAddMessageMutation,
	useDeleteMessageMutation,
} from "./api/message.api.ts";
