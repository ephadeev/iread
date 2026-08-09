import {FC} from "react";
import "@/app/App.css";
import {Divider, IconButton, ListItem, ListItemText, Tooltip, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDeletePostMutation} from "@/entities/post/api/post.api.ts";

const ProfilePost: FC<{
    postText: string;
    postId: string;
    hours: string;
    minutes: string;
    withDivider: boolean;
}> = ({postText, postId, hours, minutes, withDivider}) => {
    const [deletePost] = useDeletePostMutation();

    const deletePostHandler = () => {
        deletePost(postId).unwrap();
    };

    return (
        <>
            <ListItem secondaryAction={<Tooltip title='Delete post'><IconButton
                onClick={deletePostHandler}><DeleteIcon/></IconButton></Tooltip>}>
                <ListItemText><Typography>{postText}</Typography></ListItemText>
                <ListItemText
                    sx={{flexGrow: 0, marginRight: 2}}><Typography>{`${hours}:${minutes}`}</Typography></ListItemText>
            </ListItem>
            {withDivider && <Divider component='li' aria-hidden='true'/>}
        </>
    );
};

export default ProfilePost;
