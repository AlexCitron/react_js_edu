const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default  function userListReducer(state = initialState, action) {
    switch (action.type) {
        case "userList/addUser": {
            return {...state, users: [...state.users,
                    {
                        id: state.users.length + 1,
                        name: action.payload.name.trim(),
                        email: action.payload.email.trim()
                    }
                    ]
            };
        }
        case "userList/deleteUser": {
            return {...state, users: [...state.users.filter((u) => u.id !== action.payload)]};
        }
        default: return state;
    }
}