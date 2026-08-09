import {FC} from "react";
import {IconButton, Tooltip} from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";
import {useDeleteFriendMutation} from "@/entities/user/api/user.api.ts";
import Loader from "@/shared/ui/Loader/Loader.tsx";

const DeleteFriendButton: FC<{
    friendsId: string;
}> = ({friendsId}) => {
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const [deleteFriend, {isLoading}] = useDeleteFriendMutation();

    if (isLoading) return <Loader/>;

    const deleteFriendHandler = () => {
        deleteFriend({currentUserUid: uid, friendUid: friendsId});
    };

    return (
        <Tooltip title='Delete friend'>
            <IconButton onClick={deleteFriendHandler}>
                <PersonRemoveIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default DeleteFriendButton;
