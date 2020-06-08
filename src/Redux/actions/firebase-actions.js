import firebase from 'firebase/app';
import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE,
    GET_USERS_FROM_FIRESTORE_FAILURE,
    GET_USERS_FROM_FIRESTORE_STARTED,
    SET_USERS_FROM_FIRESTORE,
    ON_CHANGE_EMAIL,
    ON_CHANGE_PASSWORD,
    ON_CHANGE_POST,
    SIGN_IN_FAILURE,
    SET_AUTHORIZED_USER,
    SIGN_IN_STARTED,
    GET_AUTHORIZED_USER_DATA_FAILURE,
    SET_AUTHORIZED_USER_DATA
} from './types';

// get posts
const getPostsFromFirestoreStarted = () => ({type: GET_POSTS_FROM_FIRESTORE_STARTED});
const setPostsFromFirestore = (posts) => ({type: SET_POSTS_FROM_FIRESTORE, posts});
const getPostsFromFirestoreFailure = (error) => ({type: GET_POSTS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getPostsFromFirestore = () => {
    return dispatch => {
        dispatch(getPostsFromFirestoreStarted);
        firebase.firestore().collection('posts').get()
            .then(response => dispatch(setPostsFromFirestore(response.docs.map(post => post.data()))))
            .catch(err => dispatch(getPostsFromFirestoreFailure(err.message)))
    }
};

// get users
const getUsersFromFirestoreStarted = () => ({type: GET_USERS_FROM_FIRESTORE_STARTED});
const setUsersFromFirestore = users => ({type: SET_USERS_FROM_FIRESTORE, users});
const getUsersFromFirestoreFailure = error => ({type: GET_USERS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getUsersFromFirestore = () => {
    return dispatch => {
        dispatch(getUsersFromFirestoreStarted);
        firebase.firestore().collection('users').get()
            .then(response => dispatch(setUsersFromFirestore(response.docs.map(user => user.data()))))
            .catch(err => dispatch(getUsersFromFirestoreFailure(err.message)))
    }
};

// auth
export const onChangeEmailFromProps = (email) => ({type: ON_CHANGE_EMAIL, payload: email});
export const onChangePasswordFromProps = (pass) => ({type: ON_CHANGE_PASSWORD, payload: pass});

// sign in
const signInStarted = () => ({type: SIGN_IN_STARTED});
export const setAuthorizedUser = (user) => ({type: SET_AUTHORIZED_USER, payload: user});
const signInFailure = error => ({type: SIGN_IN_FAILURE, payload: {error}});

// get authorized user's data
const setAuthorizedUserData = (userData) => ({type: SET_AUTHORIZED_USER_DATA, payload: userData});
const getAuthorizedUserDataFailure = error => ({type: GET_AUTHORIZED_USER_DATA_FAILURE, payload: {error}});

// auth redux thunk
export const signInFromProps = () => {
    return (dispatch, getState) => {
        dispatch(signInStarted);
        firebase.auth().signInWithEmailAndPassword(getState().firebase.email, getState().firebase.password)
            .then(response => {
                dispatch(setAuthorizedUser(response.user));
                firebase.firestore().collection('users').doc(`${response.user.uid}`).get()
                    .then(doc => dispatch(setAuthorizedUserData(doc.data())))
                    .catch(err => dispatch(getAuthorizedUserDataFailure(err.message)))
            })
            .catch(err => dispatch(signInFailure(err.message)))
    }
};

// create post
export const onChangePost = post => ({type: ON_CHANGE_POST, payload: post});
export const addPostFromProps = (text, userId) => {
    firebase.firestore().collection('posts').add({
        text: text,
        isPrivate: false,
        userId: userId
    })
        .then((docRef) => console.log('Document written with ID: ', docRef.id))
        .catch((error) => console.log('Error adding document: ', error))
};