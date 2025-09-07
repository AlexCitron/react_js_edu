import {createSlice} from "@reduxjs/toolkit";

const initialState = {selectedUserId: null}

const userSliceDetails = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        selectUser: (state, action) => {
            state.selectedUserId = action.payload;
        },
        clearSelection: (state) => {
            state.selectedUserId = null;
        }
    }
})

export default userSliceDetails.reducer
export const {selectUser, clearSelection} = userSliceDetails.actions;

