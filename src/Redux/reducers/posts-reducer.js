import {
    GET_POSTS_FROM_FIRESTORE_FAILURE, GET_POSTS_FROM_FIRESTORE_STARTED, SET_POSTS_FROM_FIRESTORE,
    ON_CHANGE_POST, DELETE_POST,
} from '../types';

let initialState = {
    posts: [],
    error: null,
    newPostText: '',
    isLoading: false,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        // get posts
        case GET_POSTS_FROM_FIRESTORE_STARTED: {
            return {
                ...state,
                isLoading: true,
                newPostText: ''
            }
        }
        case SET_POSTS_FROM_FIRESTORE: {
            return {
                ...state,
                isLoading: false,
                posts: [...action.posts],
                newPostText: ''
            }
        }
        case GET_POSTS_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // create post
        case ON_CHANGE_POST: {
            return {
                ...state,
                newPostText: action.payload
            }
        }
        // delete post
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(post => post.postId !== action.payload)]
            }
        }
        // default
        default: {
            return state
        }
    }
};

export default postsReducer;