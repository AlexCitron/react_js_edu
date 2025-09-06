import {applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk";
import rootReducer from "./rootReducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store.getState())

export default store;
