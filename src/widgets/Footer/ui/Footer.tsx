import "@/app/App.css";
import stylesFooter from "./Footer.module.css";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";

const Footer: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);

	return (
		<footer className={`bgColorDefault bgColor${checkedTheme}`}>
			<div
				className={`${stylesFooter.container} container texAlCenter footer__container`}
			>
				<a
					href="https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US"
					target="_blank"
					rel="noopener noreferrer"
					className={`footer__link colorDefault color${checkedTheme}`}
				>
					developed by ephadeev
				</a>
			</div>
		</footer>
	);
};

export default Footer;
