import {combineReducers, createStore, applyMiddleware} from 'redux';
import usersReducer from './reducers/users-reducer';
import postsReducer from './reducers/posts-reducer';
import messagesReducer from './reducers/messages-reducer';
import authorizationReducer from './reducers/authorization-reducer';
import editProfileReducer from './reducers/editProfile-reducer';
import themesReducer from './reducers/themes-reducer';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let reducers = combineReducers({
    authorization: authorizationReducer,
    users: usersReducer,
    posts: postsReducer,
    messages: messagesReducer,
    editProfile: editProfileReducer,
    themes: themesReducer
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;