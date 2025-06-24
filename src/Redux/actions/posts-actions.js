import {
    GET_POSTS_FROM_FIRESTORE_FAILURE, GET_POSTS_FROM_FIRESTORE_STARTED, SET_POSTS_FROM_FIRESTORE,
    ON_CHANGE_POST, DELETE_POST,
} from '../types';

// get posts
const getPostsFromFirestoreStarted = () => ({type: GET_POSTS_FROM_FIRESTORE_STARTED});
const setPostsFromFirestore = posts => ({type: SET_POSTS_FROM_FIRESTORE, posts});
const getPostsFromFirestoreFailure = error => ({type: GET_POSTS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getPostsFromFirestore = () => {
    return dispatch => {
        dispatch(getPostsFromFirestoreStarted);

        // TODO: handle this after completely removing of firebase
        // firebase.firestore().collection('posts')
        //     .onSnapshot(response => dispatch(setPostsFromFirestore(response.docs.map(post => {
        //         return {postId: post.id, ...post.data()}
        //     }))), err => dispatch(getPostsFromFirestoreFailure(err.message)))
    }
};

// create new post
export const onChangePost = post => ({type: ON_CHANGE_POST, payload: post});

// delete post
export const deletePost = postId => ({type: DELETE_POST, payload: postId});