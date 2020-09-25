import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import '../../App.css';

const UploadImage = () => {

    const [fileUrl, setFileUrl] = useState(null);
    const [users, setUsers] = useState([]);

    const onFileChane = async event => {
        event.preventDefault();
        // Get file
        console.dir(event.target);
        const file = event.target.files[0];

        // Create a storage ref
        const storageRef = firebase.storage().ref();
        // const storageRef = firebase.storage().ref(`avatars/${file.name}`);

        // Create a file ref
        const fileRef = storageRef.child(file?.name);

        // Upload ref
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        /*
                let task = storageRef.put(file);
                // Update progress bar
                task.on('state_changed',
                    function progress(snapshot)  {
                        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // uploader.value = percentage;
                    },
                    function error(err) {
                        console.log(err.message);
                    },
                    function completed() {}
                );*/
    };

    const uploadImage = async event => {
        event.preventDefault();
        const userName = event.target.username.value;
        if (!userName || !fileUrl) {
            return
        }
        await firebase.firestore().collection('users').doc(userName).set({
            name: userName,
            avatar: fileUrl
        })
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = await firebase.firestore().collection('users').get();
            setUsers(usersCollection.docs.map(doc => {
                return doc.data()
            }))
        };
        fetchUsers();
    }, []);

    return (
        <div className='upload-image'>
            <form onSubmit={uploadImage}>
                <progress value='0' max='100' id='uploader'>0%</progress>
                <input type='file'
                       id='fileButton'
                       accept='image/png, .jpeg, .jpg, image/gif'
                       required
                       onChange={onFileChane} />
            </form>
        </div>
    )
};

export default UploadImage;