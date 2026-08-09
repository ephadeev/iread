import {FC, memo, MouseEvent} from "react";
import {Typography} from "@mui/material";

const SignOut: FC<{ signOutHandler: (event: MouseEvent) => void }> = memo(
    ({signOutHandler}) => {
        return (
            <Typography onClick={signOutHandler}>Logout</Typography>
        );
    },
);

export default SignOut;
