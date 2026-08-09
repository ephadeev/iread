import {ChangeEvent, FC, MouseEvent, SubmitEvent} from "react";
import {Box, Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {useAppDispatch, useAppSelector,} from "@/shared/store/lib/reduxHooks.ts";
import {changeMessage, getNewMessageText,} from "@/entities/message/model/messageSlice.ts";
import {useAddMessageMutation} from "@/entities/message";

const AddMessage: FC<{ currentUserUid: string; friendsUid: string }> = ({
                                                                            currentUserUid,
                                                                            friendsUid,
                                                                        }) => {
    const dispatch = useAppDispatch();
    const messageText = useAppSelector(getNewMessageText);
    const [addMessage] = useAddMessageMutation();

    const addMessageHandler = async (event: SubmitEvent | MouseEvent) => {
        event.preventDefault();
        if (messageText) {
            await addMessage({
                text: messageText,
                sender_id: currentUserUid,
                receiver_id: friendsUid,
            }).unwrap();
            dispatch(changeMessage(""));
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMessage(event.target.value));
    };

    return (
        <Box component='form' noValidate={true} onSubmit={addMessageHandler} sx={{display: 'flex'}}>
            <TextField
                id='message'
                type="text"
                name="message"
                onChange={onChange}
                value={messageText}
                autoComplete="off"
                label='write your message'
                required={true}
                sx={{flexGrow: 1, marginRight: '20px'}}
            />
            <Button
                variant='contained'
                color='warning'
                type='submit'
                onClick={addMessageHandler}
            >
                <SendIcon sx={{marginRight: '5px'}}/>Send
            </Button>
        </Box>
    );
};

export default AddMessage;
