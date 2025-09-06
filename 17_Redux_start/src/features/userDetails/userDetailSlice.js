const initialState = {
    selectedUserId: null
}

export default function userDetailReducer(state = initialState, action) {
    switch (action.type) {
        case 'userDetail/selectedUser':
            return {
                ...state,
                selectedUserId: action.payload.id
            }
        case 'userDetail/clearSelection':
            return {
                ...state,
                selectedUserId: null
            }
        default:
            return state;
    }
}

export function selectedUser (userId) {
    return {type:'userDetail/selectedUser', payload: userId};
}

export function clearSelection() {
    return {type: 'userDetail/clearSelection'}
}