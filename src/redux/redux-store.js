import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:   usersReducer,
    sidebar:     sidebarReducer
});

let store = createStore(reducers);

export default store;