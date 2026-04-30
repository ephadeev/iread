import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FriendsList from "./FriendsList";

vi.mock("react-router", async () => {
	return {
		Link: ({ to, children, ...rest }: any) => (
			<a href={to} {...rest}>
				{children}
			</a>
		),
	};
});

const useGetUserByIdQueryMock = vi.fn();
vi.mock("@/entities/user", async () => {
	return {
		useGetUserByIdQuery: (...args: any[]) => useGetUserByIdQueryMock(...args),
	};
});

vi.mock("@/app/userUnknownIconUrl.ts", async () => {
	return {
		USER_UNKNOWN_ICON_URL: "/unknown.jpg",
		handleUserAvatarError: vi.fn(),
	};
});

describe("FriendsList", () => {
	it("renders friend link and name", () => {
		useGetUserByIdQueryMock.mockReturnValue({
			data: { firstName: "Alex", lastName: "Smith", image: "/a.jpg" },
		});

		render(<FriendsList friendId={"u-1" as any} />);

		expect(screen.getByText("Alex Smith")).toBeInTheDocument();
		expect(screen.getByRole("link")).toHaveAttribute("href", "/users/u-1");
	});

	it("uses fallback avatar when image missing", () => {
		useGetUserByIdQueryMock.mockReturnValue({
			data: { firstName: "Alex", lastName: "Smith", image: "" },
		});

		const { container } = render(<FriendsList friendId={"u-1" as any} />);
		expect(container.querySelector("img")?.getAttribute("src")).toBe(
			"/unknown.jpg",
		);
	});
});
