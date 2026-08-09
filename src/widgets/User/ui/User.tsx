import {Link} from "react-router";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import AddFriend from "@/features/AddFriend/ui/AddFriendButton.tsx";
import DeleteFriend from "@/features/DeleteFriend/ui/DeleteFriendButton.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";
import {FC, memo} from "react";

const User: FC<{
    userIndex: string;
    firstName: string;
    lastName: string;
    userAvatar: string;
    areUsersLoading: boolean;
    friends: string[];
    withDivider: boolean;
}> = memo(
    ({
         userIndex,
         firstName,
         lastName,
         userAvatar,
         areUsersLoading,
         friends,
         withDivider
     }) => {
        return (
            <>
                <ListItem
                    secondaryAction={
                        friends?.includes(userIndex)
                            ? <DeleteFriend friendsId={userIndex}/>
                            : <AddFriend friendsId={userIndex}/>
                    }>
                    <Link to={`/users/${userIndex}`} className="links">
                        {!areUsersLoading ? (
                            <>
                                <ListItemAvatar>
                                    <Avatar
                                        src={userAvatar || USER_UNKNOWN_ICON_URL}
                                        alt="User avatar"
                                        slotProps={{
                                            img: {onError: handleUserAvatarError},
                                        }}
                                    >
                                        {firstName[0]}{lastName[0]}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography>
                                        {`${firstName || ''} ${lastName || ''}`}
                                    </Typography>
                                </ListItemText>
                            </>
                        ) : (
                            <Loader/>
                        )}
                    </Link>
                </ListItem>
                {withDivider && <Divider component='li' aria-hidden='true'/>}
            </>
        );
    },
);

export default User;
