import { describe, expect, it } from "vitest";
import {
	USER_UNKNOWN_ICON_URL,
	handleUserAvatarError,
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
