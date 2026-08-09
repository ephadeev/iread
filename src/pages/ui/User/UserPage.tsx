import {FC} from "react";
import {Avatar, Box, Container, List, Typography} from '@mui/material';
import FriendsList from "../Friends/FriendsList.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {useParams} from "react-router";
import {useGetUserByIdQuery} from "@/entities/user/api/user.api.ts";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";

const UserPage: FC = () => {
    const {index: selectedUserId} = useParams();
    const {data: userData, isLoading} = useGetUserByIdQuery(
        selectedUserId as string,
        {skip: !selectedUserId},
    );

    if (!userData && !isLoading) {
        return <Loader/>;
    }

    return (
        <Box component='main'>
            <Container maxWidth='xl'>
                {isLoading && <Loader/>}
                <Avatar
                    src={userData?.image || USER_UNKNOWN_ICON_URL}
                    alt="User avatar"
                    variant='rounded'
                    sx={{
                        height: 200,
                        width: 200,
                        fontSize: 50
                    }}
                    slotProps={{
                        img: {onError: handleUserAvatarError},
                    }}
                />
                <Typography> {`${userData?.firstName} ${userData?.lastName}`}</Typography>
                {userData?.hometown && <Typography>Hometown: {userData?.hometown}</Typography>}
                <Box>
                    <Typography>Friends:</Typography>
                    <List>
                        {userData?.friends &&
                            userData?.friends?.map((friendId, i) => (
                                <FriendsList
                                    friendId={friendId}
                                    key={friendId}
                                    withDivider={i !== userData?.friends?.length - 1}
                                />
                            ))}
                    </List>
                </Box>
            </Container>
        </Box>
    );
};

export default UserPage;
