import { FC } from "react";
import "@/app/App.css";
import Message from "@/widgets/Messages/ui/Message.tsx";
import AddMessage from "@/features/AddMessage/ui/AddMessage.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { useParams } from "react-router";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useGetMessagesQuery } from "@/entities/message/api/message.api.ts";
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

	if (!receiverId || !selectedUser) {
		return <div>Chat not found</div>;
	}

	const { data: sentAndIncomeMessages, isLoading: isLoadingMessages } =
		useGetMessagesQuery(
			{ receiver_id: receiverId, sender_id: uid },
			{ skip: !receiverId || !uid },
		);

	if (!selectedUser && !isLoadingUsers) {
		return <div>No such person...</div>;
	}

	const messageComponents = sentAndIncomeMessages?.map((message, index) => {
		const date = message.time.toDate();
		const hours = date.getMinutes().toString().padStart(2, "0");
		const minutes = date.getSeconds().toString().padStart(2, "0");
		const isIncomingMessage: boolean = message.receiver_id === uid;

		return (
			<Message
				key={index}
				avatar={isIncomingMessage ? selectedUser?.image : image}
				isIncomingMessage={isIncomingMessage}
				text={message.text}
				hours={hours}
				minutes={minutes}
				checkedTheme={checkedTheme}
			/>
		);
	});

	if (isLoadingMessages) {
		return <Loader />;
	}

	return (
		<div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				{isLoadingUsers && <Loader />}
				{messageComponents}
				<AddMessage currentUserUid={uid} friendsUid={receiverId} />
			</div>
		</div>
	);
};

export default MessagesPage;
