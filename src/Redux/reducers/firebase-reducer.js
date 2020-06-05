import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE,
    GET_USERS_FROM_FIRESTORE_FAILURE,
    GET_USERS_FROM_FIRESTORE_STARTED,
    SET_USERS_FROM_FIRESTORE
} from '../actions/types';

let initialState = {
    posts: [],
    users: [],
    error: null,
};

const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        // posts
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
        // users
        case GET_USERS_FROM_FIRESTORE_STARTED: {
            return {
                ...state
            }
        }
        case SET_USERS_FROM_FIRESTORE: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case GET_USERS_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        // default
        default: {
            return state
        }
    }
};

export default firebaseReducer;