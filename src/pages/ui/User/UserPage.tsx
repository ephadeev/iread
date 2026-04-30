import { FC } from "react";
import "@/app/App.css";
import FriendsList from "../Friends/FriendsList.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { useParams } from "react-router";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useGetUserByIdQuery } from "@/entities/user/api/user.api.ts";
import {
	USER_UNKNOWN_ICON_URL,
	handleUserAvatarError,
} from "@/app/userUnknownIconUrl.ts";

const UserPage: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { index: selectedUserId } = useParams();
	const { data: userData, isLoading } = useGetUserByIdQuery(
		selectedUserId as string,
		{ skip: !selectedUserId },
	);

	if (!userData && !isLoading) {
		return <Loader />;
	}

	return (
		<div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				<div className="flex-container">
					{isLoading && <Loader />}
					<div>
						<img
							src={userData?.image || USER_UNKNOWN_ICON_URL}
							alt="User avatar"
							className="middle-avatar"
							onError={handleUserAvatarError}
						/>
					</div>
					<div>
						<div> {`${userData?.firstName} ${userData?.lastName}`}</div>
						<div>Hometown: {userData?.Hometown}</div>
						<div>
							Friends:
							{userData?.friends &&
								userData?.friends?.map((friendId) => (
									<FriendsList friendId={friendId} key={friendId} />
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
