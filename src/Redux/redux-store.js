import {combineReducers, createStore, applyMiddleware} from "redux";
import activityReducer from "./reducers/activity-reducer";
import careersReducer from "./reducers/careers-reducer";
import usersReducer from "./reducers/users-reducer";
import firebaseReducer from "./reducers/firebase-reducer";
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let reducers = combineReducers({
    activity: activityReducer,
    careers: careersReducer,
    users: usersReducer,
    firebase: firebaseReducer,
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;