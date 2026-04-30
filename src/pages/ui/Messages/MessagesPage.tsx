import { FC } from "react";
import "@/app/App.css";
import Message from "@/widgets/Messages/ui/Message.tsx";
import AddMessage from "@/features/AddMessage/ui/AddMessage.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { useParams } from "react-router";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useListenMessagesQuery } from "@/entities/message/api/message.api.ts";
import { useGetUsersQuery } from "@/entities/user/api/user.api.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const MessagesPage: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { index: receiverId } = useParams();
	const { uid, image } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}
	const { selectedUser, isLoading: isLoadingUsers } = useGetUsersQuery(
		{ currentUserUid: uid },
		{
			selectFromResult: ({ data = [] }) => ({
				selectedUser: data.find((user) => user.userId === receiverId),
				isLoading: false,
			}),
		},
	);

	const { data: sentAndIncomeMessages, isLoading: isLoadingMessages } =
		useListenMessagesQuery(
			{ receiver_id: receiverId ?? "", sender_id: uid },
			{ skip: !receiverId || !uid },
		);

	if (!receiverId || !selectedUser) {
		return <div>Chat not found</div>;
	}

	if (!selectedUser && !isLoadingUsers) {
		return <div>No such person...</div>;
	}

	if (isLoadingMessages) {
		return <Loader />;
	}

	return (
		<div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				{isLoadingUsers && <Loader />}
				{sentAndIncomeMessages?.map((message) => {
					const date = new Date(message.time);
					const isIncomingMessage: boolean = message.receiver_id === uid;

					return (
						<Message
							key={message.messageId}
							avatar={isIncomingMessage ? selectedUser?.image : image}
							isIncomingMessage={isIncomingMessage}
							text={message.text}
							hours={date.getHours().toString().padStart(2, "0")}
							minutes={date.getMinutes().toString().padStart(2, "0")}
							checkedTheme={checkedTheme}
						/>
					);
				})}
				<AddMessage currentUserUid={uid} friendsUid={receiverId} />
			</div>
		</div>
	);
};

export default MessagesPage;
