import {FC} from "react";
import {Link} from "react-router";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import styles from "./MessagesList.module.css";
import {useGetUserByIdQuery} from "@/entities/user";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";

const MessagesList: FC<{ friendId: string; withDivider: boolean; }> = ({friendId, withDivider}) => {
    const {data: userData} = useGetUserByIdQuery(friendId as string, {
        skip: !friendId,
    });

    return (
        <>
            <ListItem>
                <Link to={`/messages/${friendId}`} className={styles.friend}>
                    <ListItemAvatar>
                        <Avatar
                            src={userData?.image || USER_UNKNOWN_ICON_URL}
                            alt="Friend's avatar"
                            sx={{width: 50, height: 50}}
                            slotProps={{
                                img: {onError: handleUserAvatarError},
                            }}
                        >
                            {userData?.firstName[0]}{userData?.lastName[0]}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography>{`${userData?.firstName} ${userData?.lastName}`}</Typography>
                    </ListItemText>
                </Link>
            </ListItem>
            {withDivider && <Divider component='li' aria-hidden='true'/>}
        </>
    );
};

export default MessagesList;
