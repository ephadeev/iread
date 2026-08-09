import {ChangeEvent, FC} from "react";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";
import {useUpdateAuthorizedUserDataMutation} from "@/entities/user/api/user.api.ts";
import {IUser} from "@/entities/user/model/IUser.ts";
import {Box, Button, TextField, Typography} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const EditProfile: FC<{
    fieldName: keyof IUser;
    fieldValue: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}> = ({fieldName, fieldValue, onChange}) => {
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const [updateAuthorizedUserData] = useUpdateAuthorizedUserDataMutation();

    const updateAuthorizedUserDataHandler = async (formData: FormData) => {
        const fieldValue = formData.get(fieldName);
        if (typeof fieldValue !== 'string') return;

        try {
            await updateAuthorizedUserData({
                currentUserUid: uid,
                fieldName: fieldName,
                fieldValue: fieldValue
            }).unwrap();
        } catch (error) {
            console.error(`Error while changing ${fieldName}:`, error);
        }
    }

    return (
        <Box
            component='form'
            action={updateAuthorizedUserDataHandler}
            noValidate={true}
            sx={{display: 'flex', alignItems: 'center', mb: '20px'}}
        >
            {/*TODO: reformat fieldName in human readable format*/}
            <Typography sx={{mr: '20px'}}>Change {fieldName}:</Typography>
            <TextField
                id={fieldName}
                type='text'
                name={fieldName}
                size='small'
                onChange={onChange}
                value={fieldValue}
                autoComplete='off'
                label={'new ' + fieldName}
                required={true}
                sx={{flexGrow: 1, mr: '20px'}}
            />
            <Button
                variant='contained'
                color='warning'
                type='submit'
            >
                <SaveIcon sx={{marginRight: '5px'}}/>Save
            </Button>
        </Box>
    );
};

export default EditProfile;
