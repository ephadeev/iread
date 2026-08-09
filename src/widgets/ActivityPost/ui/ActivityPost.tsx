import {FC, useState} from "react";
import Avatar from '@mui/material/Avatar';
import {Badge, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "@/app/App.css";
import {useGetUserByIdQuery} from "@/entities/user/api/user.api.ts";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";
import {Link} from "react-router";

const ActivityPost: FC<{
    userId: string;
    postText: string;
    hours: string;
    minutes: string;
    day: number;
    month: string;
    year: number;
    withDivider: boolean;
}> = ({userId, postText, hours, minutes, day, month, year, withDivider}) => {

    // TODO: get likesCount from firestore
    const [likesCount, setLikesCount] = useState(0);
    const {data: userData} = useGetUserByIdQuery(userId as string, {
        skip: !userId,
    });

    // TODO: write user id in firestore
    const toggleLike = () => {
        setLikesCount(likesCount + 1);
    }

    return (
        <>
            <ListItem secondaryAction={
                <Tooltip title='Like post'>
                    <IconButton onClick={toggleLike}>
                        <Badge badgeContent={likesCount} color='secondary'>
                            <FavoriteIcon/>
                        </Badge>
                    </IconButton>
                </Tooltip>
            }>
                <Link to={`/users/${userId}`} className="links">
                    {/*TODO: on Avatar mouseover show a little bit more info about user*/}
                    <ListItemAvatar>
                        <Avatar
                            src={userData?.image || USER_UNKNOWN_ICON_URL}
                            alt='Profile avatar'
                            sx={{width: 50, height: 50}}
                            slotProps={{
                                img: {onError: handleUserAvatarError},
                            }}
                        >{userData?.firstName[0]}{userData?.lastName[0]}</Avatar>
                    </ListItemAvatar>
                </Link>
                <ListItemText
                    primary={
                        <Typography>
                            {`${userData?.firstName} ${userData?.lastName}: ${postText}`}
                        </Typography>
                    }
                />
                <ListItemText
                    secondary={`${hours}:${minutes} ${day}.${month}.${year}`}
                    sx={{flexGrow: 0, marginRight: 2}}
                />
            </ListItem>
            {withDivider && <Divider component='li' aria-hidden='true'/>}
        </>
    );
};

export default ActivityPost;
