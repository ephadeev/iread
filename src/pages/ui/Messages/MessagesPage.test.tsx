import { render, screen } from "@testing-library/react";
import MessagesPage from "./MessagesPage";

const { themeSelector } = vi.hoisted(() => ({
	themeSelector: () => "theme",
}));

const useParamsMock = vi.fn();
vi.mock("react-router", async () => {
	return {
		useParams: () => useParamsMock(),
		Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
			<a href={to}>{children}</a>
		),
	};
});

const useAppSelectorMock = vi.fn();
vi.mock("@/shared/store/lib/reduxHooks.ts", async () => {
	return { useAppSelector: (selector: any) => useAppSelectorMock(selector) };
});

vi.mock("@/shared/store/model/themeSlice.ts", async () => {
	return { getCheckedTheme: themeSelector };
});

const useAuthUserMock = vi.fn();
vi.mock("@/entities/user/api/useAuthUser.ts", async () => {
	return { useAuthUser: () => useAuthUserMock() };
});

const useGetUserByIdQueryMock = vi.fn();
vi.mock("@/entities/user/api/user.api.ts", async () => {
	return { useGetUserByIdQuery: (...a: any[]) => useGetUserByIdQueryMock(...a) };
});

const useListenMessagesQueryMock = vi.fn();
vi.mock("@/entities/message/api/message.api.ts", async () => {
	return {
		useListenMessagesQuery: (...a: any[]) => useListenMessagesQueryMock(...a),
	};
});

vi.mock("@/shared/ui/Loader/Loader.tsx", async () => {
	return { default: () => <div>loading...</div> };
});

vi.mock("@/widgets/Messages/ui/Message.tsx", async () => {
	return { default: () => <div>message</div> };
});

vi.mock("@/features/AddMessage/ui/AddMessage.tsx", async () => {
	return { default: () => <div>add-message</div> };
});

describe("MessagesPage", () => {
	it("renders 'Chat not found' when receiverId missing", () => {
		useParamsMock.mockReturnValue({ index: undefined });
		useAppSelectorMock.mockImplementation((selector: typeof themeSelector) => {
			if (selector === themeSelector) return "Dark";
			return undefined;
		});
		useAuthUserMock.mockReturnValue({ uid: "me", image: "/me.jpg" });
		useGetUserByIdQueryMock.mockReturnValue({
			data: undefined,
			isLoading: false,
		});
		useListenMessagesQueryMock.mockReturnValue({ data: [], isLoading: false });

		render(<MessagesPage />);
		expect(screen.getByText("Chat not found")).toBeInTheDocument();
	});

	it("throws when uid is null inside protected route", () => {
		useParamsMock.mockReturnValue({ index: "u2" });
		useAppSelectorMock.mockImplementation((selector: typeof themeSelector) => {
			if (selector === themeSelector) return "Dark";
			return undefined;
		});
		useAuthUserMock.mockReturnValue({ uid: null, image: "" });

		expect(() => render(<MessagesPage />)).toThrow(
			/Auth invariant violated: uid is null/,
		);
	});
});
