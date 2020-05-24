import axios from 'axios';

let SIGN_IN = 'SIGN-IN';
let SET_USERS = 'SET-USERS';

let initialState = {
    user: {
        id: null
    },
    users: [],
    isLoading: true
};

const usersReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN) {
        return {
            ...state,
            user: {
                ...state.user,
                id: action.id
            }
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: action.users
        }
    }
    return state;
};

export const signInActionCreator = (id) => {
    return {
        type: SIGN_IN,
        id: id
    }
};

const setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = (dispatch) => {
    // dispatch(isLoading(true));
    axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
        .then(response => {
            // dispatch(isLoading(false));
            // response.data - array of users
            dispatch(setUsers(response.data)); // Uncaught (in promise) TypeError: dispatch is not a function

        })
};

export default usersReducer;