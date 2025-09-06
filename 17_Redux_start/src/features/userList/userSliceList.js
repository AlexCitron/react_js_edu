import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk(
    "userList/fetchUsers",
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return response.json()
    }
    )

const userSliceList = createSlice({
    name: "userList",
    initialState,
    reducers: {
        addUser(state, action) {
        state.users.push({id: state.users.length + 1, ...action.payload})},
        removeUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
}
})

export default userSliceList.reducer
export const {addUser, removeUser} = userSliceList.actions;


