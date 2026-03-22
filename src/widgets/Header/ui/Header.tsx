import { useState } from "react";
import "@/app/App.css";
import stylesHeader from "./Header.module.css";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import SignOutContainer from "@/features/Authentication/ui/SignOut/SignOutContainer.tsx";
import SelectThemeButtonContainer from "@/features/SelectTheme/SelectThemeButtonContainer.tsx";

const Header = () => {
	const [areSettingsVisible, setAreSettingsVisible] = useState<boolean>(false);
	const checkedTheme = useAppSelector(getCheckedTheme);

	const toggleSettings = () => {
		setAreSettingsVisible((prevState) => !prevState);
	};

	return (
		<header
			className={`${stylesHeader.header} bgColorDefault bgColor${checkedTheme}`}
		>
			<div className="container header__container flex-container">
				<div className="header__logo">
					<i className="fas fa-book-open"></i>
				</div>

				<div className="header__title">iRead</div>

				<div className="header__settings">
					<i className="fas fa-cog" onClick={toggleSettings}></i>
				</div>

				{areSettingsVisible && (
					<div className={stylesHeader.header__contentVisible}>
						<SignOutContainer />
						<SelectThemeButtonContainer />
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
