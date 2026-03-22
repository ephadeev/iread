import "@/app/App.css";
import styles from "./SelectThemeButton.module.scss";
import {
	changeTheme,
	getCheckedTheme,
} from "@/shared/store/model/themeSlice.ts";
import { FC, memo, useCallback } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/store/lib/reduxHooks.ts";

const SelectThemeButton: FC<{ colorScheme: string }> = memo(
	({ colorScheme }) => {
		const dispatch = useAppDispatch();
		const checkedTheme = useAppSelector(getCheckedTheme);

		const selectTheme = useCallback((): void => {
			dispatch(changeTheme(colorScheme));
		}, [dispatch, colorScheme]);

		return (
			<label className={styles.themes}>
				<input
					id={`theme-${colorScheme}`}
					type="radio"
					onChange={selectTheme}
					checked={
						!checkedTheme && colorScheme === "Indigo"
							? true
							: checkedTheme === colorScheme
					}
					name="theme"
					value={colorScheme}
					className={`bgColor${colorScheme} ${styles.radio}`}
				/>
				<span className={styles.fake}></span>
			</label>
		);
	},
);

export default SelectThemeButton;
