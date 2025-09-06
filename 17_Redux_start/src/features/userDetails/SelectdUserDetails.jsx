import {useDispatch, useSelector} from "react-redux";
import ClearSelectionButton from "./ClearSelectionButton.jsx";
import {clearSelection} from "./userDetailSlice.js";

export default function SelectUserDetails() {

    const selectedUserId = useSelector(state => state.userDetail.selectedUserId)
    const users = useSelector(state => state.userList.users);

    const dispatch = useDispatch();

    function handleClearSelection() {
        dispatch(clearSelection())
    }

    if (!selectedUserId) {
        return (
            <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <p className="text-xl my-1 font-semibold" >No users selected</p>
        </div>
        )
    }
    const user = users.find((user) => user.id === selectedUserId);

    if (!user) {
        return (
            <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
                <p className="text-xl my-1 font-semibold" >User not found</p>
            </div>
        )
    }

    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">Selected User</h2>
            <div className="space-y-1 ">
                <p><span className='font-semibold'>Name: </span>{user.name}</p>
                <p><span className='font-semibold'>Email: </span>{user.email}</p>
            </div>
            <ClearSelectionButton onClick={handleClearSelection}/>
        </div>
    )
}