import userUnknownIconUrl from "./user_unknown_icon.jpg";

/** URL to substitute when there is no photo from firebase or when there is an upload error */
export const USER_UNKNOWN_ICON_URL = userUnknownIconUrl;

export function handleUserAvatarError(e: {
	currentTarget: HTMLImageElement;
}): void {
	e.currentTarget.onerror = null;
	e.currentTarget.src = USER_UNKNOWN_ICON_URL;
}
