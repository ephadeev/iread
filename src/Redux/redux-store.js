import {combineReducers, createStore} from "redux";
import activityReducer from "./activity-reducer";
import careersReducer from "./careers-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    activity: activityReducer,
    careers: careersReducer,
    users: usersReducer
});

let store = createStore(reducers);

export default store;