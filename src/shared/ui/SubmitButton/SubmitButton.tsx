import {FC} from "react";
import {useFormStatus} from "react-dom";
import Button from '@mui/material/Button';

const SubmitButton: FC<{ value: string }> = ({value}) => {
    const {pending} = useFormStatus();
    return (
        <Button
            type='submit'
            fullWidth={true}
            disabled={pending}
            variant='contained'
        >
            {pending ? "Loading..." : value}
        </Button>
    );
};

export default SubmitButton;
