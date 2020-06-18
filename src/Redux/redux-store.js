import {combineReducers, createStore, applyMiddleware} from 'redux';
import usersReducer from './reducers/users-reducer';
import postsReducer from './reducers/posts-reducer';
import authorizationReducer from './reducers/authorization-reducer';
import editProfileReducer from './reducers/editProfile-reducer';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let reducers = combineReducers({
    authorization: authorizationReducer,
    users: usersReducer,
    posts: postsReducer,
    editProfile: editProfileReducer
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;