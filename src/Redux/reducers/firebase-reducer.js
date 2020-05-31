import firebase from 'firebase/app';
import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE
} from '../actions/types';

let initialState = {
    posts: [],
    error: null,
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_FROM_FIRESTORE_STARTED: {
            return {
                ...state,
            }
        }
        case SET_POSTS_FROM_FIRESTORE: {
            return {
                ...state,
                posts: [...action.posts]
            }
        }
        case GET_POSTS_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state
        }
    }
};

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

export default firebaseReducer;