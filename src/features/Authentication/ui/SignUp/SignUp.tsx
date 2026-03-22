import { FC, useState } from "react";
import "@/app/App.css";
import styles from "./signUp.module.css";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import WrongPasswordMessage from "@/shared/ui/WrongPasswordMessage/WrongPasswordMessage.tsx";
import { useSignUpMutation } from "@/entities/user/api/auth.api.ts";
import { useCreateUserProfileMutation } from "@/entities/user/api/user.api.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";
import SubmitButton from "@/shared/ui/SubmitButton/SubmitButton.tsx";

const SignUp: FC = () => {
	const [isPasswordWrong, setIsPasswordWrong] = useState<boolean>(false);
	const checkedTheme = useAppSelector(getCheckedTheme);
	const [signUp] = useSignUpMutation();
	const [createUserProfile] = useCreateUserProfileMutation();

	const signUpHandler = async (formData: FormData) => {
		const email = formData.get("email");
		const password = formData.get("password");
		if (typeof email !== "string" || typeof password !== "string") return;
		const regexp = new RegExp(
			`^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{${6},}$`,
		);
		if (regexp.test(password)) {
			try {
				await signUp({ email, password }).unwrap();
				const { uid } = useAuthUser();
				await createUserProfile({ uid: uid! }).unwrap();
			} catch (error) {
				console.error("Sign Up error:", error);
			}
		} else {
			setIsPasswordWrong(true);
		}
	};

	return (
		<form action={signUpHandler}>
			<fieldset>
				<legend>Sign up</legend>
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
						autoComplete="new-password"
						className={`br5 btDefault bt${checkedTheme} ${styles.btn}`}
					/>
				</label>
				<div>{isPasswordWrong && <WrongPasswordMessage />}</div>
			</fieldset>
			<SubmitButton value="Sign up" />
		</form>
	);
};

export default SignUp;
