import Profile from "./Profile.tsx";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const ProfileContainer = () => {
	const { authorizedUserData, isAuthChecking, isAuthorizedUsersDataLoading } =
		useAuthUser();
	return (
		<Profile
			authorizedUserData={authorizedUserData}
			isLoading={isAuthChecking || isAuthorizedUsersDataLoading}
		/>
	);
};

export default ProfileContainer;
