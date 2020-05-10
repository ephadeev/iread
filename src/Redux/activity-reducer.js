let ADD_POST = 'ADD-POST';

const activityReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let post = {
            id: 8,
            userId: 0,
            text: action.text,
            isPrivate: false
        };
        state.posts.push(post);
        return state;
    }
    return state;
};

export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text: text
    }
};

export default activityReducer;