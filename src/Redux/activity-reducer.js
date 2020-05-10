let ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 0, userId: 0, text: 'Hello! How are you?', isPrivate: false},
        {id: 1, userId: 1, text: 'Im fine thank you!', isPrivate: false},
        {id: 2, userId: 2, text: 'Where are you?', isPrivate: false},
        {id: 3, userId: 3, text: 'Whats uuuuuuup', isPrivate: false},
        {id: 4, userId: 4, text: 'I am going home.', isPrivate: false},
        {id: 5, userId: 5, text: 'Here we home again', isPrivate: false},
        {id: 6, userId: 0, text: 'love this book.', isPrivate: false},
        {id: 7, userId: 0, text: 'nice one', isPrivate: false}
    ],
};

const activityReducer = (state = initialState, action) => {
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