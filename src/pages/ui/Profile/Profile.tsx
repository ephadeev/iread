import stylesProfile from "./Profile.module.css";
import "@/app/App.css";
import ProfilePosts from "@/widgets/ProfilePost/ui/ProfilePosts.tsx";
import EditProfile from "@/features/EditProfile/ui/EditProfile.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import UploadImage from "@/features/UploadImage/ui/UploadImage.tsx";
import { FC } from "react";
import { useAppSelector } from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import { IUser } from "@/entities/user/model/IUser.ts";

const Profile: FC<{
	authorizedUserData: IUser | undefined;
	isLoading: boolean;
}> = ({ authorizedUserData, isLoading }) => {
	const checkedTheme = useAppSelector(getCheckedTheme);

	return (
		<main className={`wrapper bgColorDefault bgColor${checkedTheme}`}>
			<div>
				{isLoading ? (
					<Loader />
				) : (
					<div className="container flex-container profile__container">
						<div>
							{authorizedUserData?.image && (
								<img
									src={authorizedUserData?.image}
									alt="Profile avatar"
									className={stylesProfile.profile__avatar}
								/>
							)}
							<UploadImage />
						</div>
						<div className={stylesProfile.profile__information}>
							<h4 className="profile__name">
								{authorizedUserData?.firstName || (
									<>
										<span>First name: </span>
										<EditProfile inputType="firstName" />
									</>
								)}
								{authorizedUserData?.lastName || (
									<>
										<span>Last name: </span>
										<EditProfile inputType="lastName" />
									</>
								)}
							</h4>
							<div>
								Hometown:{" "}
								{authorizedUserData?.Hometown || (
									<EditProfile inputType="Hometown" />
								)}
							</div>
						</div>
					</div>
				)}
				<ProfilePosts />
			</div>
		</main>
	);
};

export default Profile;
