import "@/app/App.css";
import styles from "./signIn.module.css";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { useSignInMutation } from "@/entities/user/api/auth.api.ts";
import SubmitButton from "@/shared/ui/SubmitButton/SubmitButton.tsx";

const SignIn: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const [signIn] = useSignInMutation();

	const signInHandler = async (formData: FormData) => {
		const email = formData.get("email");
		const password = formData.get("password");
		if (typeof email !== "string" || typeof password !== "string") return;
		try {
			await signIn({ email, password }).unwrap();
		} catch (error) {
			console.error("Sign In error:", error);
		}
	};

	return (
		<form action={signInHandler}>
			<fieldset>
				<legend>Sign in</legend>
				<label className={styles.label}>
					<span>E-mail: </span>
					<input
						id="email"
						type="email"
						name="email"
						autoComplete="email"
						className={`br5 btDefault bt${checkedTheme} ${styles.btn}`}
					/>
				</label>
				<label className={styles.label}>
					<span>Password: </span>
					<input
						id="password"
						type="password"
						name="password"
						minLength={6}
						autoComplete="current-password"
						className={`br5 btDefault bt${checkedTheme} ${styles.btn}`}
					/>
				</label>
			</fieldset>
			<SubmitButton value="Sign in" />
		</form>
	);
};

export default SignIn;
