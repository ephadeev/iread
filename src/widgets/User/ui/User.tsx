import { Link } from "react-router";
import "@/app/App.css";
import AddFriend from "@/features/AddFriend/ui/AddFriendButton.tsx";
import DeleteFriend from "@/features/DeleteFriend/ui/DeleteFriendButton.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import {
	USER_UNKNOWN_ICON_URL,
	handleUserAvatarError,
} from "@/app/userUnknownIconUrl.ts";
import { FC, memo } from "react";

const User: FC<{
	userIndex: string;
	firstName: string;
	lastName: string;
	userAvatar: string;
	areUsersLoading: boolean;
	isAuthChecking: boolean;
	friends: string[];
}> = memo(
	({
		userIndex,
		firstName,
		lastName,
		userAvatar,
		areUsersLoading,
		isAuthChecking,
		friends,
	}) => {
		if (isAuthChecking) {
			return <Loader />;
		}

		return (
			<div className="user__container">
				<Link to={`/users/${userIndex}`} className="links">
					<div className={`flex-container user__wrapper br5`}>
						{!areUsersLoading ? (
							<>
								<div>
									<img
										src={userAvatar || USER_UNKNOWN_ICON_URL}
										alt="Profile avatar"
										className="small-avatar"
										onError={handleUserAvatarError}
									/>
								</div>
								<div className="user__name">
									{`${firstName || "John"} ${lastName || "Smith"}`}
								</div>
							</>
						) : (
							<Loader />
						)}
					</div>
				</Link>
				{friends?.includes(userIndex) ? (
					<DeleteFriend friendsId={userIndex} />
				) : (
					<AddFriend friendsId={userIndex} />
				)}
			</div>
		);
	},
);

export default User;
