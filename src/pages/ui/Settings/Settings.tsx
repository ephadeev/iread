import {ChangeEvent, FC, memo} from "react";
import {Box, Container, Typography} from '@mui/material';
import EditProfile from "@/features/EditProfile/ui/EditProfile.tsx";
import {useAppDispatch, useAppSelector} from "@/shared/store/lib/reduxHooks.ts";
import {
    changeFirstName,
    changeHometown,
    changeLastName,
    getFirstName,
    getHometown,
    getLastName
} from "@/shared/store/model/profileSlice.ts";

const Settings: FC = memo(() => {
    const firstName = useAppSelector(getFirstName);
    const lastName = useAppSelector(getLastName);
    const hometown = useAppSelector(getHometown);
    const dispatch = useAppDispatch();

    const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFirstName(event.target.value))
    }

    const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLastName(event.target.value))
    }

    const onChangeHometown = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeHometown(event.target.value))
    }

    return (
        <Box component='main'>
            <Container maxWidth='xl'>
                <Typography variant='h4'>Settings</Typography>
                {/*Save, Delete Profile*/}
                <EditProfile fieldName='firstName' fieldValue={firstName} onChange={onChangeFirstName}/>
                <EditProfile fieldName='lastName' fieldValue={lastName} onChange={onChangeLastName}/>
                <EditProfile fieldName='hometown' fieldValue={hometown} onChange={onChangeHometown}/>

                <Typography>Change Email</Typography>
                <Typography>Change Username</Typography>
                <Typography>Change Password</Typography>

                <Typography>Gender (male/female/not set)</Typography>
                <Typography>Language</Typography>
                <Typography>Change Theme</Typography>
            </Container>

        </Box>
    );
});

export default Settings;