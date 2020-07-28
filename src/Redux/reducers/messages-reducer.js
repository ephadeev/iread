import {
    GET_SENT_MESSAGES_FROM_FIRESTORE_STARTED, SET_SENT_MESSAGES_FROM_FIRESTORE,
    GET_SENT_MESSAGES_FROM_FIRESTORE_FAILURE,
    GET_INCOME_MESSAGES_FROM_FIRESTORE_STARTED, SET_INCOME_MESSAGES_FROM_FIRESTORE,
    GET_INCOME_MESSAGES_FROM_FIRESTORE_FAILURE,
    ON_CHANGE_MESSAGE,
} from '../types';

let initialState = {
    incomeMessages: [],
    sentMessages: [],
    error: null,
    newMessageText: '',
    isLoading: false
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        // get income messages
        case GET_INCOME_MESSAGES_FROM_FIRESTORE_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_INCOME_MESSAGES_FROM_FIRESTORE: {
            return {
                ...state,
                isLoading: false,
                incomeMessages: action.payload
            }
        }
        case GET_INCOME_MESSAGES_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // get sent messages
        case GET_SENT_MESSAGES_FROM_FIRESTORE_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_SENT_MESSAGES_FROM_FIRESTORE: {
            return {
                ...state,
                isLoading: false,
                sentMessages: action.payload,
                newMessageText: ''
            }
        }
        case GET_SENT_MESSAGES_FROM_FIRESTORE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // create new message
        case ON_CHANGE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default messagesReducer;