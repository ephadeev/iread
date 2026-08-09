import {ChangeEvent, FC, MouseEvent, SubmitEvent} from "react";
import {Box, Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import "@/app/App.css";
import {useAppDispatch, useAppSelector,} from "@/shared/store/lib/reduxHooks.ts";
import {changePost, getNewPostText} from "@/entities/post/model/postSlice.ts";
import {useAddPostMutation} from "@/entities/post/api/post.api.ts";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const AddPostButton: FC = () => {
    const dispatch = useAppDispatch();
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const postText = useAppSelector(getNewPostText);
    const [addPost] = useAddPostMutation();

    const addPostHandler = async (event: SubmitEvent | MouseEvent) => {
        event.preventDefault();
        if (postText) {
            await addPost({
                text: postText,
                isPrivate: false,
                userId: uid,
            }).unwrap();
            dispatch(changePost(""));
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(changePost(event.target.value));

    return (
        <Box component='form' noValidate={true} onSubmit={addPostHandler} sx={{display: 'flex'}}>
            <TextField
                id='post'
                type="text"
                name="post"
                onChange={onChange}
                value={postText}
                autoComplete="off"
                label='anything new?'
                required={true}
                sx={{flexGrow: 1, marginRight: '20px'}}
            />
            <Button
                variant='contained'
                color='warning'
                type='submit'
            >
                <SendIcon sx={{marginRight: '5px'}}/>Send
            </Button>
        </Box>
    );
};

export default AddPostButton;
