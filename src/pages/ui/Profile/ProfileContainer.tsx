import Profile from "./Profile.tsx";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";
import {useAppSelector} from "@/shared/store/lib/reduxHooks.ts";
import {getCheckedTheme} from "@/shared/store/model/themeSlice.ts";

const ProfileContainer = () => {
	const { authorizedUserData, isAuthChecking, isAuthorizedUsersDataLoading } =
		useAuthUser();
	const checkedTheme = useAppSelector(getCheckedTheme);

	return (
		<Profile
			authorizedUserData={authorizedUserData}
			isLoading={isAuthChecking || isAuthorizedUsersDataLoading}
			checkedTheme={checkedTheme}
		/>
	);
};

export default ProfileContainer;
