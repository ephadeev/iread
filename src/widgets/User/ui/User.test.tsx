import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import User from "./User";

vi.mock("react-router", async () => {
	return {
		Link: ({ to, children, ...rest }: any) => (
			<a href={to} {...rest}>
				{children}
			</a>
		),
	};
});

vi.mock("@/features/AddFriend/ui/AddFriendButton.tsx", async () => {
	return {
		default: ({ friendsId }: any) => (
			<button type="button">add:{friendsId}</button>
		),
	};
});

vi.mock("@/features/DeleteFriend/ui/DeleteFriendButton.tsx", async () => {
	return {
		default: ({ friendsId }: any) => (
			<button type="button">del:{friendsId}</button>
		),
	};
});

vi.mock("@/shared/ui/Loader/Loader.tsx", async () => {
	return { default: () => <div>loading...</div> };
});

vi.mock("@/app/userUnknownIconUrl.ts", async () => {
	return {
		USER_UNKNOWN_ICON_URL: "/unknown.jpg",
		handleUserAvatarError: vi.fn(),
	};
});

describe("User", () => {
	it("shows loader when auth is checking", () => {
		render(
			<User
				userIndex="u1"
				firstName="A"
				lastName="B"
				userAvatar="/x.jpg"
				areUsersLoading={false}
				isAuthChecking={true}
				friends={[]}
			/>,
		);

		expect(screen.getByText("loading...")).toBeInTheDocument();
	});

	it("renders add-friend button when user is not friend", () => {
		render(
			<User
				userIndex="u1"
				firstName="A"
				lastName="B"
				userAvatar="/x.jpg"
				areUsersLoading={false}
				isAuthChecking={false}
				friends={[]}
			/>,
		);

		expect(screen.getByRole("link")).toHaveAttribute("href", "/users/u1");
		expect(screen.getByText("A B")).toBeInTheDocument();
		expect(screen.getByText("add:u1")).toBeInTheDocument();
	});

	it("renders delete-friend button when user is already friend", () => {
		render(
			<User
				userIndex="u1"
				firstName="A"
				lastName="B"
				userAvatar="/x.jpg"
				areUsersLoading={false}
				isAuthChecking={false}
				friends={["u1"]}
			/>,
		);

		expect(screen.getByText("del:u1")).toBeInTheDocument();
	});
});
