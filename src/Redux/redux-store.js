import {combineReducers, createStore} from "redux";
import activityReducer from "./activity-reducer";
import careersReducer from "./careers-reducer";

let reducers = combineReducers({
    activity: activityReducer,
    careers: careersReducer
});

let store = createStore(reducers);

export default store;