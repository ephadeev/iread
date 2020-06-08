import {combineReducers, createStore, applyMiddleware} from "redux";
import usersReducer from "./reducers/users-reducer";
import firebaseReducer from "./reducers/firebase-reducer";
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let reducers = combineReducers({
    users: usersReducer,
    firebase: firebaseReducer,
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;