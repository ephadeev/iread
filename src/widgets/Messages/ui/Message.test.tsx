import { render, screen } from "@testing-library/react";
import Message from "./Message";

vi.mock("@/app/userUnknownIconUrl.ts", async () => {
	return {
		USER_UNKNOWN_ICON_URL: "/unknown.jpg",
		handleUserAvatarError: vi.fn(),
	};
});

describe("Message", () => {
	it("renders incoming message with time and text", () => {
		render(
			<Message
				avatar="/a.jpg"
				isIncomingMessage={true}
				text="Hello"
				hours="09"
				minutes="05"
				checkedTheme="Dark"
			/>,
		);

		expect(screen.getByText("Hello")).toBeInTheDocument();
		expect(screen.getByText("09:05")).toBeInTheDocument();
	});

	it("falls back to unknown avatar when avatar is empty", () => {
		const { container } = render(
			<Message
				avatar=""
				isIncomingMessage={false}
				text="Outgoing"
				hours="10"
				minutes="30"
				checkedTheme="Light"
			/>,
		);

		const img = container.querySelector("img");
		expect(img).toBeTruthy();
		expect(img?.getAttribute("src")).toBe("/unknown.jpg");
	});
});
