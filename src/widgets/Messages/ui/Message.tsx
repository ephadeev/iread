import "@/app/App.css";
import {ListItem, ListItemText, Stack} from '@mui/material';
import {FC} from "react";

const Message: FC<{
    isIncomingMessage: boolean;
    text: string;
    hours: string;
    minutes: string;
}> = ({isIncomingMessage, text, hours, minutes}) => {
    return (
        <ListItem sx={{flexDirection: isIncomingMessage ? 'row' : 'row-reverse'}}>
            <Stack direction={isIncomingMessage ? 'row' : 'row-reverse'}
                   sx={{
                       bgcolor: isIncomingMessage ? '#454545' : 'warning.main',
                       borderRadius: '5px', p: '5px'
                   }}
            >
                <ListItemText primary={text}
                              secondary={`${hours}:${minutes}`}
                />
            </Stack>
        </ListItem>
    );
};

export default Message;