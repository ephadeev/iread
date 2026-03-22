import { Link } from "react-router";
import "@/app/App.css";
import AddFriend from "@/features/AddFriend/ui/AddFriendButton.tsx";
import DeleteFriend from "@/features/DeleteFriend/ui/DeleteFriendButton.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { FC } from "react";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const User: FC<{
	userIndex: string;
	firstName: string;
	lastName: string;
	userAvatar: string;
	areUsersLoading: boolean;
}> = ({ userIndex, firstName, lastName, userAvatar, areUsersLoading }) => {
	const { isAuthChecking, friends } = useAuthUser();

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
									src={
										userAvatar ||
										"https://lookp.ru/images/user_unknown_icon.jpg"
									}
									alt="Profile avatar"
									className="small-avatar"
								/>
							</div>
							<div className="user__name">
								{`${firstName ? firstName : "John"} ${lastName ? lastName : "Smith"}`}
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
};

export default User;
