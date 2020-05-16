let SIGN_IN = 'SIGN-IN';

let initialState = {
    user: {
        id: null
    }
};

const usersReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN) {
        state.user.id = action.id;
        return state
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

//app 30
//wall 8
//header 33