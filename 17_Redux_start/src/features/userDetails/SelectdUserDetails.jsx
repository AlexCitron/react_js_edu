import ClearSelectionButton from "./ClearSelectionButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {clearSelection} from "./userSliceDetails.js";

export default function SelectUserDetails() {

    /*The required states are fetched from the state storage*/
    const selectedUserId = useSelector((state) => state.userDetails.selectedUserId);
    const users = useSelector(state => state.userList.users);

    /*dispatch*/
    const dispatch = useDispatch();

    /*Handlers section*/
    function handleClearSelection() {
        dispatch(clearSelection())
    }

    /*If a user is not selected, the system shows the following message "No users selected"*/
    if (!selectedUserId) {
        return (
            <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <p className="text-xl my-1 font-semibold" >No users selected</p>
        </div>
        )
    }
    const user = users.find((user) => user.id === selectedUserId);

    /*If a user is not found, the system shows the following message "User not found"*/
    if (!user) {
        return (
            <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
                <p className="text-xl my-1 font-semibold" >User not found</p>
            </div>
        )
    }

    /*User info section*/
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