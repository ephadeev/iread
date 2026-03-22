import "@/app/App.css";
import User from "@/widgets/User/ui/User.tsx";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useGetUsersQuery } from "@/entities/user/api/user.api.ts";
import { FC } from "react";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const Users: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { uid } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}
	const { data: usersFromProps, isLoading } = useGetUsersQuery(
		{ currentUserUid: uid },
		{ skip: !uid },
	);

	const users = usersFromProps?.map((user) => {
		return (
			<User
				firstName={user.firstName}
				lastName={user.lastName}
				userIndex={user.userId}
				userAvatar={user.image}
				areUsersLoading={isLoading}
				key={user.userId}
			/>
		);
	});

	return (
		<main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container user">{users}</div>
		</main>
	);
};

export default Users;
