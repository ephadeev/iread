import {render, screen} from "@testing-library/react";
import MessagesList from "./MessagesList";

vi.mock("react-router", async () => {
    return {
        Link: ({to, children, ...rest}: any) => (
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

describe("MessagesList", () => {
    it("renders friend name and link", () => {
        useGetUserByIdQueryMock.mockReturnValue({
            data: {
                firstName: "Jane",
                lastName: "Doe",
                image: "/jane.jpg",
            },
        });

        render(<MessagesList friendId="friend-1" withDivider={true}/>);

        expect(screen.getByText("Jane Doe")).toBeInTheDocument();
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/messages/friend-1");
    });

    it("uses fallback avatar when user has no image", () => {
        useGetUserByIdQueryMock.mockReturnValue({
            data: {
                firstName: "Jane",
                lastName: "Doe",
                image: "",
            },
        });

        const {container} = render(<MessagesList friendId="friend-1" withDivider={true}/>);
        const img = container.querySelector("img");
        expect(img?.getAttribute("src")).toBe("/unknown.jpg");
    });
});
