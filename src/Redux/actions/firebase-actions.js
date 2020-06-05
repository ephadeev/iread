import firebase from 'firebase/app';
import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE,
    GET_USERS_FROM_FIRESTORE_FAILURE,
    GET_USERS_FROM_FIRESTORE_STARTED,
    SET_USERS_FROM_FIRESTORE
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

// users
const getUsersFromFirestoreStarted = () => ({type: GET_USERS_FROM_FIRESTORE_STARTED});
const setUsersFromFirestore = (users) => ({type: SET_USERS_FROM_FIRESTORE, users});
const getUsersFromFirestoreFailure = (error) => ({type: GET_USERS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getUsersFromFirestore = () => {
    return dispatch => {
        dispatch(getUsersFromFirestoreStarted);
        firebase.firestore().collection('users').get()
            .then(response => dispatch(setUsersFromFirestore(response.docs.map(user => user.data()))))
            .catch(err => dispatch(getUsersFromFirestoreFailure(err.message)))
    }
};