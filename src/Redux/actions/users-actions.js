import firebase from 'firebase/app';
import {
    GET_USERS_FROM_FIRESTORE_FAILURE, GET_USERS_FROM_FIRESTORE_STARTED, SET_USERS_FROM_FIRESTORE,
} from '../types';

// get users
const getUsersFromFirestoreStarted = () => ({type: GET_USERS_FROM_FIRESTORE_STARTED});
const setUsersFromFirestore = users => ({type: SET_USERS_FROM_FIRESTORE, users});
const getUsersFromFirestoreFailure = error => ({type: GET_USERS_FROM_FIRESTORE_FAILURE, payload: {error}});
export const getUsersFromFirestore = () => {
    return dispatch => {
        dispatch(getUsersFromFirestoreStarted);
        firebase.firestore().collection('users').get()
            .then(response => dispatch(setUsersFromFirestore(response.docs.map(user => {
                return {userId: user.id, ...user.data()}
            }))))
            .catch(err => dispatch(getUsersFromFirestoreFailure(err.message)))
    }
};