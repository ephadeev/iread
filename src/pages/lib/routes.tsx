import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { useNavigate } from "react-router";
import ProfileContainer from "../ui/Profile/ProfileContainer.tsx";
import Messages from "@/widgets/Messages/ui/Messages.tsx";
import ActivityContainer from "../ui/Activity/ActivityContainer.tsx";
import Users from "../ui/User/Users.tsx";
import Friends from "../ui/Friends/Friends.tsx";
import UserPage from "../ui/User/UserPage.tsx";
import MessagesPage from "../ui/Messages/MessagesPage.tsx";
import Authentication from "../ui/Authentication/Authentication.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

// TODO: rewrite on react router v7 syntax
const AppRoutes = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { isAuthenticated, isAuthChecking } = useAuthUser();

	useEffect(() => {
		if (isAuthChecking) return;

		if (!isAuthenticated && location.pathname !== "/authentication") {
			navigate("/authentication", { replace: true });
			return;
		}

		if (isAuthenticated && location.pathname === "/authentication") {
			navigate("/profile", { replace: true });
		}
	}, [isAuthChecking, isAuthenticated, navigate, location.pathname]);

	if (isAuthChecking) {
		return <div>Check for authorization...</div>;
	}
	if (!isAuthenticated && location.pathname !== "/authentication")
		return <Loader />;

	const navigationRoutes = [
		{ path: "/", element: <ProfileContainer /> },
		{ path: "/profile", element: <ProfileContainer /> },
		{ path: "/messages", element: <Messages /> },
		{ path: "/activity", element: <ActivityContainer /> },
		{ path: "/users", element: <Users /> },
		{ path: "/friends", element: <Friends /> },
		{ path: "/users/:index", element: <UserPage /> },
		{ path: "/messages/:index", element: <MessagesPage /> },
		{ path: "/authentication", element: <Authentication /> },
	];

	return (
		<Routes>
			{navigationRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};

export default AppRoutes;
