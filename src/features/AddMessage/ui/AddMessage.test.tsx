import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMessage from "./AddMessage";

const { themeSelector, newMessageTextSelector } = vi.hoisted(() => ({
	themeSelector: () => "theme",
	newMessageTextSelector: () => "newMessageText",
}));

type Selector = typeof themeSelector | typeof newMessageTextSelector;

const dispatchMock = vi.fn();
const useAppSelectorMock = vi.fn();
vi.mock("@/shared/store/lib/reduxHooks.ts", async () => {
	return {
		useAppDispatch: () => dispatchMock,
		useAppSelector: (selector: any) => useAppSelectorMock(selector),
	};
});

const changeMessageMock = vi.fn((payload: string) => ({
	type: "message/changeMessage",
	payload,
}));

vi.mock("@/entities/message/model/messageSlice.ts", async () => {
	return {
		changeMessage: (v: string) => changeMessageMock(v),
		getNewMessageText: newMessageTextSelector,
	};
});

vi.mock("@/shared/store/model/themeSlice.ts", async () => {
	return { getCheckedTheme: themeSelector };
});

const unwrapMock = vi.fn().mockResolvedValue(undefined);
const addMessageMock = vi.fn(() => ({ unwrap: unwrapMock }));
vi.mock("@/entities/message", async () => {
	return { useAddMessageMutation: () => [addMessageMock] };
});

describe("AddMessage", () => {
	it("dispatches changeMessage on input", async () => {
		useAppSelectorMock.mockImplementation((selector: Selector) => {
			if (selector === themeSelector) return "Dark";
			if (selector === newMessageTextSelector) return "";
			return undefined;
		});

		const user = userEvent.setup();
		render(<AddMessage currentUserUid="me" friendsUid="friend" />);

		await user.type(screen.getByPlaceholderText("Write a message..."), "Hi");

		expect(changeMessageMock).toHaveBeenCalled();
		expect(dispatchMock).toHaveBeenCalled();
	});

	it("calls addMessage and clears input on submit when messageText exists", async () => {
		useAppSelectorMock.mockImplementation((selector: Selector) => {
			if (selector === themeSelector) return "Dark";
			if (selector === newMessageTextSelector) return "Hello";
			return undefined;
		});

		const user = userEvent.setup();
		render(<AddMessage currentUserUid="me" friendsUid="friend" />);

		await user.click(screen.getByRole("button"));

		expect(addMessageMock).toHaveBeenCalledWith({
			text: "Hello",
			sender_id: "me",
			receiver_id: "friend",
		});
		expect(unwrapMock).toHaveBeenCalled();
		expect(dispatchMock).toHaveBeenCalledWith({
			type: "message/changeMessage",
			payload: "",
		});
	});
});
