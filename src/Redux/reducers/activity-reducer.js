import {ADD_POST} from '../actions/types';

let initialState = {
    posts: [
        {id: 0, userId: 0, text: 'Hello! How are you?', isPrivate: false},
        {id: 1, userId: 1, text: 'Im fine thank you!', isPrivate: false},
        {id: 2, userId: 2, text: 'Where are you?', isPrivate: false},
        {id: 3, userId: 3, text: 'Whats uuuuuuup', isPrivate: false},
        {id: 4, userId: 4, text: 'I am going home.', isPrivate: false},
        {id: 5, userId: 5, text: 'Here we home again', isPrivate: false},
        {id: 6, userId: 0, text: 'love this book.', isPrivate: false},
        {id: 7, userId: 0, text: 'nice one', isPrivate: false}],
    users: [
        {name: 'Richard Hendricks', image: 'https://www.kinopoisk.ru/images/sm_actor/1615667.jpg'},
        {name: 'Nelson Bighetti', image: 'https://www.kinopoisk.ru/images/sm_actor/1852968.jpg'},
        {name: 'Bertram Gilfoyle', image: 'https://www.kinopoisk.ru/images/sm_actor/11897.jpg'},
        {name: 'Dinesh Chugtai', image: 'https://www.kinopoisk.ru/images/sm_actor/1833413.jpg'},
        {name: 'Monica Hall', image: 'https://www.kinopoisk.ru/images/sm_actor/731114.jpg'},
        {name: 'Jared', image: 'https://www.kinopoisk.ru/images/sm_actor/1085386.jpg'}]
};

const activityReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let stateCopy = {...state};
        stateCopy.posts = [...state.posts];
        let post = {
            id: 8,
            userId: 0,
            text: action.text,
            isPrivate: false
        };
        stateCopy.posts.push(post);
        return stateCopy;
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