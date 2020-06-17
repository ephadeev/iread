import {
    GET_POSTS_FROM_FIRESTORE_FAILURE, GET_POSTS_FROM_FIRESTORE_STARTED, SET_POSTS_FROM_FIRESTORE,
    ON_CHANGE_POST, GET_NEW_POST_STARTED, SET_NEW_POST,
    GET_NEW_POST_FAILURE, DELETE_POST,
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
                isLoading: true
            }
        }
        case SET_POSTS_FROM_FIRESTORE: {
            return {
                ...state,
                isLoading: false,
                posts: [...action.posts]
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
        case GET_NEW_POST_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_NEW_POST: {
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, action.post],
                newPostText: ''
            }
        }
        case GET_NEW_POST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
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