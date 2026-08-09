import ProfilePosts from "@/widgets/ProfilePost/ui/ProfilePosts.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import UploadImage from "@/features/UploadImage/ui/UploadImage.tsx";
import {FC, memo} from "react";
import {IUser} from "@/entities/user/model/IUser.ts";
import {handleUserAvatarError, USER_UNKNOWN_ICON_URL,} from "@/app/userUnknownIconUrl.ts";
import {Avatar, Box, ButtonBase, Container, Typography} from "@mui/material";

const Profile: FC<{
    authorizedUserData: IUser | undefined;
    isLoading: boolean;
}> = memo(({authorizedUserData, isLoading}) => {
    return (
        <Box component='main' sx={{minHeight: 'calc(100vh - 120px - 10px - 24px)'}}>
            {isLoading ? (
                <Loader/>
            ) : (
                <Container maxWidth='xl'>
                    <ButtonBase
                        component='label'
                        tabIndex={-1} // prevent label from tab focus
                        aria-label="Profile avatar"
                    >
                        <Avatar
                            src={authorizedUserData?.image || USER_UNKNOWN_ICON_URL}
                            alt='Upload new avatar'
                            variant='rounded'
                            slotProps={{
                                img: {onError: handleUserAvatarError},
                            }}
                            sx={{
                                height: 200,
                                width: 200,
                                fontSize: 50
                            }}
                        >
                            {authorizedUserData?.firstName[0]}{authorizedUserData?.lastName[0]}
                        </Avatar>
                        <UploadImage/>
                    </ButtonBase>
                    <Box>
                        <Typography>{authorizedUserData?.firstName} {authorizedUserData?.lastName}</Typography>
                        <Typography>from {authorizedUserData?.hometown}</Typography>
                    </Box>
                    {/*TODO: 100 books | 9.2K pages*/}
                    {/*TODO: 3 among 6 of your following | more than 50% of your following*/}
                    {/*TODO: 1 Reading | 115 Plan to read | 40 Dropped*/}
                    {/*TODO: Daily Stats*/}
                    {/*TODO: Recent Activity*/}
                    {/*TODO: Today*/}
                    {/*TODO: Yesterday*/}
                    {/*TODO: 03 May*/}
                    {/*TODO: Recommendations*/}
                    <ProfilePosts/>
                </Container>
            )}
        </Box>
    );
});

export default Profile;
