const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default  function userListReducer(state = initialState, action) {
    switch (action.type) {
        case "userList/fetchData":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "userList/fetchSuccess":
            return {
                ...state,
                loading: false,
                users: action.payload,
            }
        case "userList/fetchError":
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

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
            return {...state, users: [...state.users.filter(({id}) => id !== action.payload)]};
        }

        default: return state;
    }
}

export function fetchData () {
    return async function (dispatch) {
        dispatch({type:'userList/fetchData'});
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok) {
                throw new Error("Could not fetch data");
            }
            const data = await response.json();
            dispatch({type:'userList/fetchSuccess', payload: data});
        } catch (e) {
            dispatch({type:'userList/fetchError', payload: e.message});
        }
    }
}

export function addUser (user) {
    return { type: "userList/addUser", payload: user };
}

export function deleteUser (id) {
    return { type: "userList/deleteUser", payload: id };
}