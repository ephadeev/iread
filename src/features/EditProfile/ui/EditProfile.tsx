import { ChangeEvent, FC } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/store/lib/reduxHooks.ts";
import { getCheckedTheme } from "@/shared/store/model/themeSlice.ts";
import {
	changeFirstName,
	changeHometown,
	changeLastName,
	getFirstName,
	getHometown,
	getLastName,
} from "@/shared/store/model/profileSlice.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";
import { useUpdateAuthorizedUserDataMutation } from "@/entities/user/api/user.api.ts";
import { IUser } from "@/entities/user/model/IUser.ts";

const EditProfile: FC<{ inputType: keyof IUser }> = ({ inputType }) => {
	const checkedTheme = useAppSelector(getCheckedTheme);
	const firstName = useAppSelector(getFirstName);
	const lastName = useAppSelector(getLastName);
	const hometown = useAppSelector(getHometown);
	const dispatch = useAppDispatch();
	const { uid } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}
	const [updateAuthorizedUserData] = useUpdateAuthorizedUserDataMutation();

	const chooseField = (inputType: string): string => {
		switch (inputType) {
			case "firstName":
				return firstName;
			case "lastName":
				return lastName;
			case "Hometown":
				return hometown;
			default:
				return "";
		}
	};

	const editUserData = async () => {
		await updateAuthorizedUserData({
			currentUserUid: uid,
			fieldName: inputType,
			fieldValue: chooseField(inputType),
		});
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		switch (inputType) {
			case "firstName":
				return dispatch(changeFirstName(event.target.value));
			case "lastName":
				return dispatch(changeLastName(event.target.value));
			case "Hometown":
				return dispatch(changeHometown(event.target.value));
			default:
				return;
		}
	};

	return (
		<div>
			<input
				id={chooseField(inputType)}
				placeholder={inputType}
				name={chooseField(inputType)}
				type="text"
				onChange={onChange}
				value={chooseField(inputType)}
				autoComplete="off"
				className={`br5 btDefault bt${checkedTheme}`}
			/>
			<button onClick={editUserData}>save</button>
		</div>
	);
};

export default EditProfile;
