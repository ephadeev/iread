import {FC} from "react";
import {IconButton, Tooltip} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";
import {useAddFriendMutation} from "@/entities/user/api/user.api.ts";
import Loader from "@/shared/ui/Loader/Loader.tsx";

const AddFriendButton: FC<{ friendsId: string }> = ({friendsId}) => {
    const {uid} = useAuthUser();
    if (!uid) {
        throw new Error(
            "Auth invariant violated: uid is null inside protected route",
        );
    }
    const [addFriend, {isLoading}] = useAddFriendMutation();
    if (isLoading) return <Loader/>;

    const handleAddFriend = () => {
        addFriend({currentUserUid: uid, friendUid: friendsId});
    };

    return (
        <Tooltip title='Add friend'>
            <IconButton onClick={handleAddFriend}>
                <PersonAddIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default AddFriendButton;
