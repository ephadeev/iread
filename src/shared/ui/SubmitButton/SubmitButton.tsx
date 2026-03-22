import { FC } from "react";
import { useFormStatus } from "react-dom";
import styles from "./SubmitButton.module.css";

const SubmitButton: FC<{ value: string }> = ({ value }) => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className={`btn ${styles.buttons}`}
			disabled={pending}
		>
			{pending ? "Loading..." : value}
		</button>
	);
};

export default SubmitButton;
