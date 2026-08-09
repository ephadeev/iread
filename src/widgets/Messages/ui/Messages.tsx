import {Box, Container, List} from '@mui/material';
import MessagesList from "@/widgets/Messages/ui/MessagesList.tsx";
import {FC} from "react";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const Messages: FC = () => {
    const {friends} = useAuthUser();

    return (
        <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
            <Container maxWidth='xl'>
                {friends.length !== 0 &&
                    <List>
                        {friends?.map((friend: string, i) => (
                            <MessagesList friendId={friend} key={friend} withDivider={i !== friends.length - 1}/>
                        ))}
                    </List>}
            </Container>
        </Box>
    );
};

export default Messages;
