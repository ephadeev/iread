import firebase from 'firebase/app';
import {
    GET_POSTS_FROM_FIRESTORE_FAILURE, GET_POSTS_FROM_FIRESTORE_STARTED, SET_POSTS_FROM_FIRESTORE,
    ON_CHANGE_POST, GET_NEW_POST_STARTED, SET_NEW_POST,
    GET_NEW_POST_FAILURE, DELETE_POST,
} from '../types';

// get posts
const getPostsFromFirestoreStarted = () => ({type: GET_POSTS_FROM_FIRESTORE_STARTED});
const setPostsFromFirestore = posts => ({type: SET_POSTS_FROM_FIRESTORE, posts});
const getPostsFromFirestoreFailure = error => ({type: GET_POSTS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getPostsFromFirestore = () => {
    return dispatch => {
        dispatch(getPostsFromFirestoreStarted);
        firebase.firestore().collection('posts').get()
            .then(response => dispatch(setPostsFromFirestore(response.docs.map(post => {
                return {postId: post.id, ...post.data()}
            }))))
            .catch(err => dispatch(getPostsFromFirestoreFailure(err.message)))
    }
};

// create new post
export const onChangePost = post => ({type: ON_CHANGE_POST, payload: post});
const getNewPostStarted = () => ({type: GET_NEW_POST_STARTED});
const setNewPost = post => ({type: SET_NEW_POST, post});
const getNewPostFailure = error => ({type: GET_NEW_POST_FAILURE, payload: {error}});
export const getNewPost = (docId) => {
    return dispatch => {
        dispatch(getNewPostStarted);
        firebase.firestore().collection('posts').doc(docId).get()
            .then(doc => dispatch(setNewPost(doc.data())))
            .catch(err => dispatch(getNewPostFailure(err.message)))
    }
};

// delete post
export const deletePost = postId => ({type: DELETE_POST, payload: postId});