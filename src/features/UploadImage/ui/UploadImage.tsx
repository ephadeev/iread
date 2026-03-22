import "@/app/App.css";
import { ChangeEvent, FC } from "react";
import { useUploadProfileImageMutation } from "@/entities/user/api/user.api.ts";
import { useAuthUser } from "@/entities/user/api/useAuthUser.ts";

const UploadImage: FC = () => {
	const [uploadImage] = useUploadProfileImageMutation();
	const { uid } = useAuthUser();
	if (!uid) {
		throw new Error(
			"Auth invariant violated: uid is null inside protected route",
		);
	}

	const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		// Get file
		const files = event.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			console.log("called onFileChange");
			// TODO: need to delete previous photo
			uploadImage({ currentUserUid: uid, file });
		}
	};

	return (
		<div className="upload-image">
			<form>
				<input
					type="file"
					id="fileButton"
					name="file"
					accept="image/png, .jpeg, .jpg, image/gif"
					required
					onChange={onFileChange}
				/>
			</form>
		</div>
	);
};

export default UploadImage;
