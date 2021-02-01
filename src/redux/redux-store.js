import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:   usersReducer,
    sidebar:     sidebarReducer,
    auth:        authReducer
});


let store = createStore(reducers);

export default store;