import firebase from 'firebase/app';
import {
    ON_CHANGE_EMAIL_SIGN_IN, ON_CHANGE_PASSWORD_SIGN_IN, SIGN_IN_FAILURE,
    SET_AUTHORIZED_USER, SIGN_IN_STARTED, GET_AUTHORIZED_USER_DATA_FAILURE,
    SET_AUTHORIZED_USER_DATA, SIGN_OUT, ON_CHANGE_EMAIL_SIGN_UP,
    ON_CHANGE_PASSWORD_SIGN_UP, SIGN_UP_STARTED, SIGN_UP_FAILURE,
    DELETE_FRIEND, ADD_FRIEND, SET_FIELDS_IN_AUTHORIZED_USER_DATA,
    UPLOAD_IMAGE_STARTED, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILURE
} from '../types';

// auth
export const onChangeEmailFromProps = email => ({type: ON_CHANGE_EMAIL_SIGN_IN, payload: email});
export const onChangePasswordFromProps = pass => ({type: ON_CHANGE_PASSWORD_SIGN_IN, payload: pass});
export const onChangeEmailSignUp = email => ({type: ON_CHANGE_EMAIL_SIGN_UP, payload: email});
export const onChangePasswordSignUp = pass => ({type: ON_CHANGE_PASSWORD_SIGN_UP, payload: pass});

// sign up
const signUpStarted = () => ({type: SIGN_UP_STARTED});
const signUpFailure = error => ({type: SIGN_UP_FAILURE, payload: {error}});
export const signUpFromProps = () => {
    return (dispatch, getState) => {
        dispatch(signUpStarted);
        firebase.auth().createUserWithEmailAndPassword(getState().authorization.emailSignUp, getState().authorization.passwordSignUp)
            .then(response => {
                firebase.firestore().collection('users').doc(`${response.user.uid}`).set({
                    firstName: '',
                    lastName: '',
                    friends: [],
                    image: '',
                    Hometown: ''
                })
                /*firebase.firestore().collection('users').doc(`${response.user.uid}`).get()
                    .then(doc => dispatch(setAuthorizedUserData(doc.data())))
                    .catch(err => dispatch(getAuthorizedUserDataFailure(err.message)))*/
            })
            .catch(err => dispatch(signUpFailure(err.message)))
    }
};

// sign in
const signInStarted = () => ({type: SIGN_IN_STARTED});
export const setAuthorizedUser = user => ({type: SET_AUTHORIZED_USER, payload: user});
const signInFailure = error => ({type: SIGN_IN_FAILURE, payload: {error}});
export const signInFromProps = () => {
    return (dispatch, getState) => {
        dispatch(signInStarted);
        firebase.auth().signInWithEmailAndPassword(getState().authorization.emailSignIn, getState().authorization.passwordSignIn)
            .then(response => {
                dispatch(setAuthorizedUser(response.user));
                firebase.firestore().collection('users').doc(`${response.user.uid}`).get()
                    .then(doc => dispatch(setAuthorizedUserData(doc.data())))
                    .catch(err => dispatch(getAuthorizedUserDataFailure(err.message)))
            })
            .catch(err => dispatch(signInFailure(err.message)))
    }
};

// sign out
export const signOut = () => ({type: SIGN_OUT});

// get authorized user's data
export const setAuthorizedUserData = userData => ({type: SET_AUTHORIZED_USER_DATA, payload: userData});
export const getAuthorizedUserDataFailure = error => ({type: GET_AUTHORIZED_USER_DATA_FAILURE, payload: {error}});

// delete friend
export const deleteFriendFromProps = friendsId => ({type: DELETE_FRIEND, payload: friendsId});

// add friend
export const addFriendFromProps = friendsId => ({type: ADD_FRIEND, payload: friendsId});

// set new fields in authorized user's data
export const setNewFieldsInAuthorizedUserData = (field, data) => ({type: SET_FIELDS_IN_AUTHORIZED_USER_DATA, payload: {field, data}});

// update profile image
const uploadProfileImageStarted = () => ({type: UPLOAD_IMAGE_STARTED});
const uploadProfileImage = fileUrl => ({type: UPLOAD_IMAGE, payload: fileUrl});
const uploadProfileImageFailure = error => ({type: UPLOAD_IMAGE_FAILURE, payload: {error}});
export const uploadProfileImageFromProps = (file, authorizedUserUid) => {
    return dispatch => {
        dispatch(uploadProfileImageStarted);

        // Create a storage ref
        const storageRef = firebase.storage().ref(`users/${authorizedUserUid}/`);

        // Create a file ref
        const fileRef = storageRef.child(file?.name);

        // Upload ref
        fileRef.put(file)
            .then(() => {
                fileRef.getDownloadURL()
                    .then(fileUrl => {
                        dispatch(uploadProfileImage(fileUrl));
                        firebase.firestore().collection('users').doc(authorizedUserUid).update({
                            image: fileUrl
                        }).catch(err => dispatch(uploadProfileImageFailure(err.message)))
                    });
            })
            .catch(err => dispatch(uploadProfileImageFailure(err.message)));
    }
};