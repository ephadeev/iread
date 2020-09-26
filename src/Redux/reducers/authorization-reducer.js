import {
    ON_CHANGE_EMAIL_SIGN_IN, ON_CHANGE_PASSWORD_SIGN_IN, SIGN_IN_STARTED,
    SET_AUTHORIZED_USER, SIGN_IN_FAILURE, SET_AUTHORIZED_USER_DATA,
    GET_AUTHORIZED_USER_DATA_FAILURE, SIGN_OUT, ON_CHANGE_EMAIL_SIGN_UP,
    ON_CHANGE_PASSWORD_SIGN_UP, SIGN_UP_STARTED, SIGN_UP_FAILURE,
    DELETE_FRIEND, ADD_FRIEND, SET_FIELDS_IN_AUTHORIZED_USER_DATA,
    UPLOAD_IMAGE_STARTED, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILURE
} from '../types';

let initialState = {
    authorizedUser: null,
    authorizedUserData: {},
    error: null,
    isLoading: false,
    emailSignIn: '',
    passwordSignIn: '',
    emailSignUp: '',
    passwordSignUp: '',
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
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
        // delete friend
        case DELETE_FRIEND: {
            return {
                ...state,
                authorizedUserData: {
                    ...state.authorizedUserData,
                    friends: [...state.authorizedUserData.friends.filter(friend => friend !== action.payload)]
                }
            }
        }
        // add friend
        case ADD_FRIEND: {
            return {
                ...state,
                authorizedUserData: {
                    ...state.authorizedUserData,
                    friends: [...state.authorizedUserData.friends, action.payload]
                }
            }
        }
        // set new fields in authorized user's data
        case SET_FIELDS_IN_AUTHORIZED_USER_DATA: {
            return {
                ...state,
                authorizedUserData: {
                    ...state.authorizedUserData,
                    [action.payload.field]: action.payload.data
                }
            }
        }
        // update profile image
        case UPLOAD_IMAGE_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case UPLOAD_IMAGE: {
            return {
                ...state,
                isLoading: false,
                authorizedUserData: {
                    ...state.authorizedUserData,
                    image: action.payload
                }
            }
        }
        case UPLOAD_IMAGE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // default
        default: {
            return state
        }
    }
};

export default authorizationReducer;