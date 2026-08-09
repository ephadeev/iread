import {useState} from "react";
import {NavLink} from "react-router";
import Nav from "@/widgets/Nav/ui/Nav.tsx";
import "@/app/App.css";
import SignOutContainer from "@/features/Authentication/ui/SignOut/SignOutContainer.tsx";
import {AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';

const Header = () => {
    const [areSettingsVisible, setAreSettingsVisible] = useState<boolean>(false);

    const toggleSettings = () => {
        setAreSettingsVisible((prevState) => !prevState);
    };

    return (
        <>
            <AppBar position='static' sx={{marginBottom: '10px'}}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters={true}>
                        <Typography
                            variant='h4'
                            noWrap
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Kaushan Script'
                            }}
                        >
                            iRead
                        </Typography>

                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title='Open settings'>
                                <IconButton onClick={toggleSettings} sx={{p: 0}}>
                                    <Avatar alt='first name last name' src=''/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={areSettingsVisible}
                                onClose={toggleSettings}
                            >
                                <MenuItem onClick={toggleSettings} component={NavLink} to='/profile'>
                                    <Typography>Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleSettings} component={NavLink} to='/achievements'>
                                    <Typography>Achievements</Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleSettings} component={NavLink} to='/notes'>
                                    <Typography>Notes</Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleSettings}>
                                    <Typography>Select theme</Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleSettings} component={NavLink} to='/settings'>
                                    <Typography>Settings</Typography>
                                </MenuItem>
                                <MenuItem onClick={toggleSettings}>
                                    <SignOutContainer/>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                    <Nav/>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
