import {
    ON_CHANGE_MESSAGE,
    GET_INCOME_MESSAGES_FROM_FIRESTORE_STARTED, SET_INCOME_MESSAGES_FROM_FIRESTORE,
    GET_INCOME_MESSAGES_FROM_FIRESTORE_FAILURE,
    GET_SENT_MESSAGES_FROM_FIRESTORE_STARTED, SET_SENT_MESSAGES_FROM_FIRESTORE,
    GET_SENT_MESSAGES_FROM_FIRESTORE_FAILURE,
} from '../types';

// get income messages
const getIncomeMessagesFromFirestoreStarted = () => ({type: GET_INCOME_MESSAGES_FROM_FIRESTORE_STARTED});
const setIncomeMessagesFromFirestore = posts => ({type: SET_INCOME_MESSAGES_FROM_FIRESTORE, payload: posts});
const getIncomeMessagesFromFirestoreFailure = error => ({type: GET_INCOME_MESSAGES_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getIncomeMessagesFromFirestore = (user1Uid, user2Uid) => {
    return dispatch => {
        dispatch(getIncomeMessagesFromFirestoreStarted);

        // TODO: handle this after completely removing of firebase
        // let messagesRef = firebase.firestore().collection('messages');
        //
        // let getIncomeMessagesQuery = messagesRef
        //     .where('receiver_id', '==', `${user2Uid}`)
        //     .where('sender_id', '==', `${user1Uid}`);
        //
        // getIncomeMessagesQuery.onSnapshot(response => dispatch(setIncomeMessagesFromFirestore(response.docs.map(message => {
        //     return {...message.data(), isIncomingMessage: true}
        // }))), err => dispatch(getIncomeMessagesFromFirestoreFailure(err.message)));
    }
};

// get sent messages
const getSentMessagesFromFirestoreStarted = () => ({type: GET_SENT_MESSAGES_FROM_FIRESTORE_STARTED});
const setSentMessagesFromFirestore = posts => ({type: SET_SENT_MESSAGES_FROM_FIRESTORE, payload: posts});
const getSentMessagesFromFirestoreFailure = error => ({type: GET_SENT_MESSAGES_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getSentMessagesFromFirestore = (user1Uid, user2Uid) => {
    return dispatch => {
        dispatch(getSentMessagesFromFirestoreStarted);

        // TODO: handle this after completely removing of firebase
        // let messagesRef = firebase.firestore().collection('messages');
        // let getSentMessagesQuery = messagesRef
        //     .where('receiver_id', '==', `${user1Uid}`)
        //     .where('sender_id', '==', `${user2Uid}`);
        //
        // getSentMessagesQuery.onSnapshot(response => dispatch(setSentMessagesFromFirestore(response.docs.map(message => {
        //     return {...message.data(), isIncomingMessage: false}
        // }))), err => dispatch(getSentMessagesFromFirestoreFailure(err.message)));
    }
};

// create new message
export const onChaneMessage = message => ({type: ON_CHANGE_MESSAGE, payload: message});