import { FC } from "react";
import "@/app/App.css";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";
import { useDeleteFriendMutation } from "@/entities/user/api/user.api.ts";
import Loader from "@/shared/ui/Loader/Loader.tsx";

const DeleteFriendButton: FC<{
	friendsId: string;
}> = ({ friendsId }) => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { uid } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}
	const [deleteFriend, { isLoading }] = useDeleteFriendMutation();

	if (isLoading) return <Loader />;

	const deleteFriendHandler = () => {
		deleteFriend({ currentUserUid: uid, friendUid: friendsId });
	};

	return (
		<i
			className={`fas fa-user-times buttons colorDefault color${checkedTheme}`}
			onClick={deleteFriendHandler}
		></i>
	);
};

export default DeleteFriendButton;
