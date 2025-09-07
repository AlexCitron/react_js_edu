import {configureStore} from "@reduxjs/toolkit";
import userSliceList from "./features/userList/userSliceList.js";
import userSliceDetails from "./features/userDetails/userSliceDetails.js";

const store = configureStore({
    reducer: {
        userList: userSliceList,
        userDetails: userSliceDetails,
    }
})

export default store;
