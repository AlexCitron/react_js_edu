import {applyMiddleware, createStore} from "redux"
import userListReducer from "./features/userList/userListSlice.js";
import {thunk} from "redux-thunk";

const store = createStore(userListReducer, applyMiddleware(thunk))

// console.log(store.getState())

export default store;
