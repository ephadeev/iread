import {FC} from "react";
import {Link, useParams} from "react-router";
import "@/app/App.css";
import {Avatar, Box, Container, List, Paper, Typography} from '@mui/material';
import Message from "@/widgets/Messages/ui/Message.tsx";
import AddMessage from "@/features/AddMessage/ui/AddMessage.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {useListenMessagesQuery} from "@/entities/message/api/message.api.ts";
import {useGetUserByIdQuery} from "@/entities/user/api/user.api.ts";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL} from "@/app/userUnknownIconUrl.ts";

const MessagesPage: FC = () => {
    const {index: receiverId} = useParams();
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const {data: selectedUser, isLoading: isLoadingUsers} = useGetUserByIdQuery(
        receiverId ?? "",
        {skip: !receiverId},
    );

    const {data: sentAndIncomeMessages, isLoading: isLoadingMessages} =
        useListenMessagesQuery(
            {receiver_id: receiverId ?? "", sender_id: uid},
            {skip: !receiverId || !uid},
        );

    if (!receiverId) {
        return <div>Chat not found</div>;
    }

    if (isLoadingUsers) {
        return <Loader/>;
    }

    if (!selectedUser) {
        return <div>No such person...</div>;
    }

    if (isLoadingMessages) {
        return <Loader/>;
    }

    return (
        <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
            <Container maxWidth='xl'>
                <Link to={`/users/${receiverId}`} className="links">
                    <Paper elevation={6} sx={{maxWidth: '15%'}}>
                        <Avatar
                            alt=''
                            src={selectedUser.image || USER_UNKNOWN_ICON_URL}
                            slotProps={{
                                img: {onError: handleUserAvatarError},
                            }}
                        />
                        <Typography>{selectedUser.firstName} {selectedUser.lastName}</Typography>
                    </Paper>
                </Link>
                <List sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                    {sentAndIncomeMessages?.map((message) => {
                        const date = new Date(message.time);
                        const isIncomingMessage: boolean = message.receiver_id === uid;

                        return (
                            <Message
                                key={message.messageId}
                                isIncomingMessage={isIncomingMessage}
                                text={message.text}
                                hours={date.getHours().toString().padStart(2, "0")}
                                minutes={date.getMinutes().toString().padStart(2, "0")}
                            />
                        );
                    })}
                </List>
                <AddMessage currentUserUid={uid} friendsUid={receiverId}/>
            </Container>
        </Box>
    );
};

export default MessagesPage;
