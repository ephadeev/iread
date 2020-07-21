import {
    GET_USERS_FROM_FIRESTORE_FAILURE, GET_USERS_FROM_FIRESTORE_STARTED, SET_USERS_FROM_FIRESTORE,
} from '../types';

let initialState = {
    users: [],
    error: null,
    isLoading: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
        // default
        default: {
            return state
        }
    }
};

export default usersReducer;