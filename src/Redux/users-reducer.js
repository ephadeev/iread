let SIGN_IN = 'SIGN-IN';

let initialState = {
    user: {
        id: null
    }
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
    }
    return state;
};

export const signInActionCreator = (id) => {
    return {
        type: SIGN_IN,
        id: id
    }
};

export default usersReducer;