import "@/app/App.css";
import {FC} from "react";
import {useSignInMutation} from "@/entities/user/api/auth.api.ts";
import SubmitButton from "@/shared/ui/SubmitButton/SubmitButton.tsx";
import {
    Box,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
    Typography
} from '@mui/material';

const SignIn: FC = () => {
    const [signIn] = useSignInMutation();

    const signInHandler = async (formData: FormData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        if (typeof email !== "string" || typeof password !== "string") return;
        try {
            await signIn({email, password}).unwrap();
        } catch (error) {
            console.error("Sign In error:", error);
        }
    };

    return (
        <Stack direction='column' sx={{justifyContent: 'space-between'}}>
            <Card variant='outlined'>
                <Typography
                    component='h1'
                    variant='h4'
                    sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
                >
                    Sign in
                </Typography>
                <Box
                    component='form'
                    action={signInHandler}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2
                    }}
                >
                    <FormControl>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <TextField
                            id='email'
                            type='email'
                            name='email'
                            placeholder='your@email.com'
                            autoComplete='email'
                            autoFocus={true}
                            required={true}
                            fullWidth={true}
                            variant='outlined'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <TextField
                            id='password'
                            type='password'
                            name='password'
                            placeholder='••••••'
                            autoComplete='current-password'
                            autoFocus={true}
                            required={true}
                            fullWidth={true}
                            variant='outlined'
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary'/>}
                        label='Remember me'
                    />
                    <SubmitButton value="Sign in"/>
                    {/*TODO: implement handler*/}
                    Forgot your password?
                    {/*TODO: link to Sign up*/}
                    Don't have an account? Sign up
                </Box>
            </Card>
        </Stack>
    );
};

export default SignIn;
