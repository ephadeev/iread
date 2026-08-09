import {NavLink} from "react-router";
import {FC} from "react";
import {Link, List, ListItem, Stack} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';


import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const Nav: FC = () => {
    const {isAuthenticated} = useAuthUser();

    return (
        <Stack component='nav'>
            <List sx={{display: 'flex'}}>
                {isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/profile"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <AccountCircleIcon fontSize='small'/>Profile
                        </Link>
                    </ListItem>
                )}
                {isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/messages"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <QuestionAnswerIcon fontSize='small'/>Messages
                        </Link>
                    </ListItem>
                )}
                {isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/activity"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <EmailIcon fontSize='small'/>Activity
                        </Link>
                    </ListItem>
                )}
                {isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/users"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <GroupsIcon fontSize='small'/>Users
                        </Link>
                    </ListItem>
                )}
                {isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/friends"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <GroupIcon fontSize='small'/>Friends
                        </Link>
                    </ListItem>
                )}
                {!isAuthenticated && (
                    <ListItem sx={{justifyContent: 'center'}}>
                        <Link component={NavLink} to="/authentication"
                              sx={{display: 'flex', alignItems: "center"}}>
                            <i className="fas fa-user"></i>Login
                        </Link>
                    </ListItem>
                )}
            </List>
        </Stack>
    );
};

export default Nav;
