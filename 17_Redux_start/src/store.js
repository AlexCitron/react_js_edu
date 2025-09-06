import { createStore } from "redux"
import userListReducer from "./features/userList/userListSlice.js";

const store = createStore(userListReducer)

console.log(store.getState())

export default store;
