import {combineReducers, createStore} from "redux";
// import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    // profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;