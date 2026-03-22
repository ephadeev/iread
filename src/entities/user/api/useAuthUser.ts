import { useGetAuthorizedUserDataQuery } from "./user.api.ts";
import { useListenAuthStateQuery } from "./auth.api.ts";

export const useAuthUser = () => {
	const {
		data: authorizedUser,
		isLoading: isAuthLoading,
		isFetching: isAuthFetching,
	} = useListenAuthStateQuery();

	const uid = authorizedUser?.uid ?? null;

	const {
		data: authorizedUserData,
		isLoading: isDataLoading,
		isFetching: isDataFetching,
	} = useGetAuthorizedUserDataQuery(uid as string, { skip: !uid });

	return {
		authorizedUser,
		uid,
		authorizedUserData,
		image: authorizedUserData?.image ?? "",
		friends: authorizedUserData?.friends ?? [],
		isAuthChecking: isAuthLoading || isAuthFetching,
		isAuthorizedUsersDataLoading: isDataLoading || isDataFetching,
		isAuthenticated: !!uid,
	};
};
