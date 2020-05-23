import axios from 'axios';

let SIGN_IN = 'SIGN-IN';
let GET_USERS = 'GET-USERS';

let initialState = {
    user: {
        id: null
    },
    users: []
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
    } else if (action.type === GET_USERS) {
        return {
            ...state,
            users: axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
                .then(response => response.data)
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

export const getUsersActionCreator = () => {
    return {
        type: GET_USERS
    }
};

export default usersReducer;