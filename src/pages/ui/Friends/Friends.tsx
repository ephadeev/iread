import {Box, Container, List} from '@mui/material';
import FriendsList from "./FriendsList.tsx";
import {FC} from "react";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const Friends: FC = () => {
    const {friends} = useAuthUser();

    return (
        <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
            <Container maxWidth='xl'>
                <List>
                    {friends.length !== 0 &&
                        friends?.map((friendId, i) => (
                            <FriendsList friendId={friendId} key={friendId} withDivider={i !== friends.length - 1}/>
                        ))}
                </List>
            </Container>
        </Box>
    );
};

export default Friends;
