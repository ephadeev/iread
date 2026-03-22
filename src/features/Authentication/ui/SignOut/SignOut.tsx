import { FC, memo, MouseEvent } from "react";
import styles from "./signOut.module.css";

const SignOut: FC<{ signOutHandler: (event: MouseEvent) => void }> = memo(
	({ signOutHandler }) => {
		return (
			<button
				onClick={signOutHandler}
				className={`${styles.header__logout} btn`}
			>
				Logout
			</button>
		);
	},
);

export default SignOut;
