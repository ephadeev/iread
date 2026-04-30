import {
	handleUserAvatarError,
	USER_UNKNOWN_ICON_URL,
} from "./userUnknownIconUrl";

describe("userUnknownIconUrl", () => {
	it("handleUserAvatarError replaces image src and removes onerror", () => {
		const img = document.createElement("img");
		img.src = "broken.jpg";
		img.onerror = () => {};

		handleUserAvatarError({ currentTarget: img });

		expect(img.onerror).toBeNull();
		expect(img.src).toContain(USER_UNKNOWN_ICON_URL);
	});
});
