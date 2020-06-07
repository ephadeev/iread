import {
    GET_USERS_STARTED,
    SET_USERS,
    GET_USERS_FAILURE} from '../actions/types';
import axios from 'axios';

let initialState = {
    users: [],
    isLoading: false,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case GET_USERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        default: {
            return state
        }
    }
};

const getUsersStarted = () => ({type: GET_USERS_STARTED});
const setUsers = (users) => ({type: SET_USERS, users});
const getUsersFailure = (error) => ({type: GET_USERS_FAILURE, payload: {error}});

export const getUsers = () => {
    return dispatch => {
        dispatch(getUsersStarted());
        axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
            .then(response => dispatch(setUsers(response.data)))
            .catch(err => dispatch(getUsersFailure(err.message)))
    }
};

export default usersReducer;