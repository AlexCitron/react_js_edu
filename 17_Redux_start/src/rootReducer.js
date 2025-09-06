import {combineReducers} from "redux";
import userListReducer from "./features/userList/userListSlice.js";
import userDetailReducer from "./features/userDetails/userDetailSlice.js";


const rootReducer = combineReducers({
    userDetail: userDetailReducer,
    userList: userListReducer,

})

export default rootReducer;