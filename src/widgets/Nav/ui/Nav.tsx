import "@/app/App.css";
import { NavLink } from "react-router";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const Nav: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const { isAuthenticated } = useAuthUser();

	return (
		<nav className={`bgColorDefault bgColor${checkedTheme}`}>
			<div className="container nav__container flex-container">
				{isAuthenticated && (
					<NavLink
						to="/profile"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-user-circle"></i>
						<span className="nav__text"> Profile</span>
					</NavLink>
				)}
				{isAuthenticated && (
					<NavLink
						to="/messages"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-comments"></i>
						<span className="nav__text"> Messages</span>
					</NavLink>
				)}
				{isAuthenticated && (
					<NavLink
						to="/activity"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-envelope"></i>
						<span className="nav__text"> Activity</span>
					</NavLink>
				)}
				{isAuthenticated && (
					<NavLink
						to="/users"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-users"></i>
						<span className="nav__text"> Users</span>
					</NavLink>
				)}
				{isAuthenticated && (
					<NavLink
						to="/friends"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-user-friends"></i>
						<span className="nav__text"> Friends</span>
					</NavLink>
				)}
				{!isAuthenticated && (
					<NavLink
						to="/authentication"
						className={({ isActive }) =>
							"links " + isActive && `colorDefault color${checkedTheme}`
						}
					>
						<i className="fas fa-user"></i>
						<span> Login</span>
					</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Nav;
