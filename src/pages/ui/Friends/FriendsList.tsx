import {FC} from "react";
import {Link} from "react-router";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import {IUser, useGetUserByIdQuery} from "@/entities/user";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";

const FriendsList: FC<{ friendId: IUser["friends"][number]; withDivider: boolean; }> = (
    {
        friendId, withDivider
    }) => {
    const {data: userData} = useGetUserByIdQuery(friendId, {
        skip: !friendId,
    });

    return (
        <>
            <ListItem>
                <Link to={`/users/${friendId}`} className='links'>
                    <ListItemAvatar>
                        <Avatar
                            src={userData?.image || USER_UNKNOWN_ICON_URL}
                            alt='Profile avatar'
                            sx={{width: 50, height: 50}}
                            slotProps={{
                                img: {onError: handleUserAvatarError},
                            }}
                        >
                            {userData?.firstName[0]}{userData?.lastName[0]}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{`${userData?.firstName} ${userData?.lastName}`}</ListItemText>
                </Link>
            </ListItem>
            {withDivider && <Divider component='li' aria-hidden='true'/>}
        </>
    );
};

export default FriendsList;
