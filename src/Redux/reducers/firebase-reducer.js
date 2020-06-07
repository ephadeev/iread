import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE,
    GET_USERS_FROM_FIRESTORE_FAILURE,
    GET_USERS_FROM_FIRESTORE_STARTED,
    SET_USERS_FROM_FIRESTORE,
    ON_CHANGE_POST,
    ON_CHANGE_EMAIL,
    ON_CHANGE_PASSWORD,
    SIGN_IN_STARTED,
    SET_AUTHORIZED_USER,
    SIGN_IN_FAILURE,
    SET_AUTHORIZED_USER_DATA,
    GET_AUTHORIZED_USER_DATA_FAILURE
} from '../actions/types';

let initialState = {
    authorizedUser: null,
    authorizedUserData: null,
    posts: [],
    users: [],
    error: null,
    newPostText: '',
    isLoading: false,
    email: '',
    password: ''
};

const firebaseReducer = (state = initialState, action) => {
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
        // get users
        case GET_USERS_FROM_FIRESTORE_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_USERS_FROM_FIRESTORE: {
            return {
                ...state,
                isLoading: false,
                users: [...action.users]
            }
        }
        case GET_USERS_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // auth
        case ON_CHANGE_EMAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
        case ON_CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload
            }
        }
        // sign in
        case SIGN_IN_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_AUTHORIZED_USER: {
            return {
                ...state,
                isLoading: false,
                authorizedUser: action.payload
            }
        }
        case SIGN_IN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // get authorized user's data
        case SET_AUTHORIZED_USER_DATA: {
            return {
                ...state,
                authorizedUserData: action.payload
            }
        }
        case GET_AUTHORIZED_USER_DATA_FAILURE: {
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