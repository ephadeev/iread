import { FC, MouseEvent, useCallback } from "react";
import { useSignOutMutation } from "@/entities/user/api/auth.api.ts";
import SignOut from "@/features/Authentication/ui/SignOut/SignOut.tsx";

const SignOutContainer: FC = () => {
	const [signOut] = useSignOutMutation();
	const signOutHandler = useCallback(
		async (event: MouseEvent) => {
			event.preventDefault();
			try {
				await signOut().unwrap();
			} catch (error) {
				console.error("Sign out error:", error);
			}
		},
		[signOut],
	);
	return <SignOut signOutHandler={signOutHandler} />;
};

export default SignOutContainer;
