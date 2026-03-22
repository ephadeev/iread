import "@/app/App.css";
import SignIn from "@/features/Authentication/ui/SignIn/SignIn.tsx";
import SignUp from "@/features/Authentication/ui/SignUp/SignUp.tsx";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";

const Authentication: FC = () => {
	const checkedTheme = useAppSelector(getCheckedTheme);

	return (
		<div className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div className="container bgColorGray">
				{/*<div className='authentication__error'>{error}</div>*/}
				<div className="flex-container">
					<SignIn />
					<SignUp />
				</div>
			</div>
		</div>
	);
};

export default Authentication;
