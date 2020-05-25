import {combineReducers, createStore, applyMiddleware} from "redux";
import activityReducer from "./reducers/activity-reducer";
import careersReducer from "./reducers/careers-reducer";
import usersReducer from "./reducers/users-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    activity: activityReducer,
    careers: careersReducer,
    users: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;