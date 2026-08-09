import "@/app/App.css";
import {ChangeEvent, FC} from "react";
import {useUploadProfileImageMutation} from "@/entities/user/api/user.api.ts";
import {useAuthUser} from "@/entities/user/api/useAuthUser.ts";

const UploadImage: FC = () => {
    const [uploadImage] = useUploadProfileImageMutation();
    const {uid} = useAuthUser();
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
            uploadImage({currentUserUid: uid, file});
        }
    };

    return (
        <input type="file"
               id="fileButton"
               name="file"
               accept="image/png, .jpeg, .jpg, image/gif"
               style={{
                   border: 0,
                   clip: 'rect(0 0 0 0)',
                   height: '1px',
                   margin: '-1px',
                   overflow: 'hidden',
                   padding: 0,
                   position: 'absolute',
                   whiteSpace: 'nowrap',
                   width: '1px',
               }}
               required
               onChange={onFileChange}
        />
    );
};

export default UploadImage;
