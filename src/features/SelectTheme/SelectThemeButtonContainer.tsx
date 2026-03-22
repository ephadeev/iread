import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import {
	getCheckedTheme,
	getColorSchemes,
} from "@/shared/store/model/themeSlice.ts";
import SelectThemeButton from "@/features/SelectTheme/SelectThemeButton.tsx";
import styles from "./SelectThemeButton.module.scss";

const SelectThemeButtonContainer: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const colorSchemes = useAppSelector(getColorSchemes);

	return (
		<>
			<div
				className={`btDefault bt${checkedTheme} colorDefault color${checkedTheme} texAlCenter ${styles.header__border}`}
			>
				Themes
			</div>
			<div className={`btDefault bt${checkedTheme} ${styles.header__border}`}>
				{colorSchemes.map((colorScheme) => {
					return (
						<SelectThemeButton
							colorScheme={colorScheme.colorScheme}
							key={colorScheme.colorScheme}
						/>
					);
				})}
			</div>
		</>
	);
};

export default SelectThemeButtonContainer;
