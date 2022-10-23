import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    header: headerReducer
});

let store = createStore(reducers);

window.store = store;
export default store;