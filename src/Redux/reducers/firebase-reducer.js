import {
    GET_POSTS_FROM_FIRESTORE_FAILURE,
    GET_POSTS_FROM_FIRESTORE_STARTED,
    SET_POSTS_FROM_FIRESTORE,
    GET_USERS_FROM_FIRESTORE_FAILURE,
    GET_USERS_FROM_FIRESTORE_STARTED,
    SET_USERS_FROM_FIRESTORE,
    ON_CHANGE_POST,
    ON_CHANGE_EMAIL_SIGN_IN,
    ON_CHANGE_PASSWORD_SIGN_IN,
    SIGN_IN_STARTED,
    SET_AUTHORIZED_USER,
    SIGN_IN_FAILURE,
    SET_AUTHORIZED_USER_DATA,
    GET_AUTHORIZED_USER_DATA_FAILURE,
    GET_NEW_POST_STARTED,
    SET_NEW_POST,
    GET_NEW_POST_FAILURE,
    DELETE_POST,
    SIGN_OUT,
    ON_CHANGE_EMAIL_SIGN_UP,
    ON_CHANGE_PASSWORD_SIGN_UP,
    SIGN_UP_STARTED, SIGN_UP_FAILURE,
} from '../actions/types';

let initialState = {
    authorizedUser: null,
    authorizedUserData: null,
    posts: [],
    users: [],
    error: null,
    newPostText: '',
    isLoading: false,
    emailSignIn: '',
    passwordSignIn: '',
    emailSignUp: '',
    passwordSignUp: ''
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
        case ON_CHANGE_EMAIL_SIGN_IN: {
            return {
                ...state,
                emailSignIn: action.payload
            }
        }
        case ON_CHANGE_PASSWORD_SIGN_IN: {
            return {
                ...state,
                passwordSignIn: action.payload
            }
        }
        case ON_CHANGE_EMAIL_SIGN_UP: {
            return {
                ...state,
                emailSignUp: action.payload
            }
        }
        case ON_CHANGE_PASSWORD_SIGN_UP: {
            return {
                ...state,
                passwordSignUp: action.payload
            }
        }
        // sign up
        case SIGN_UP_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
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
                authorizedUser: action.payload,
                emailSignIn: '',
                passwordSignIn: '',
                emailSignUp: '',
                passwordSignUp: ''
            }
        }
        case SIGN_IN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // sign out
        case SIGN_OUT: {
            return {
                ...state,
                authorizedUser: null,
                authorizedUserData: null
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