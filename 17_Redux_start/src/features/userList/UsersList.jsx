import OperationButton from "./userListOperationButtons.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, removeUser} from "./userSliceList.js";
import {selectUser} from "../userDetails/userSliceDetails.js";

export default function UsersList() {

    /*The required states are fetched from the state storage*/
    const users = useSelector(state => state.userList.users);
    const loading = useSelector(state => state.userList.loading);
    const error = useSelector(state => state.userList.error);

    /*dispatch*/
    const dispatch = useDispatch();

    /*Handlers section*/
    function handleLoadUsers() {
        dispatch(fetchUsers());
    }

    function handleDelete(id) {
        dispatch(removeUser(id));
    }

    function handleSelectUser(id) {
        dispatch(selectUser(id));
    }

    /*Users list section*/
    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">User List</h2>
            <button
                className="bg-green-500 rounded-md text-white mt-2 py-2 px-3 hover:bg-green-600
                transition duration-500"
                onClick={handleLoadUsers}
            >Load Users</button>

            {/*show loading while loading*/}
            {loading && <p>Loading...</p>}

            {/*show an error message if an error occurred*/}
            {error && <p><strong>Error:</strong> {error}</p>}

            {/*Users list mapped*/}
            <ul className='mt-2 space-y-2'>
                {users?.map(({id, name, email}) => (
                    <li key={id} className="flex justify-between">
                        <p>{name}: {email}</p>
                        <div className="flex gap-2">
                            <OperationButton color="blue" onClick={() => handleSelectUser(id)}>Select</OperationButton>
                            <OperationButton color="red" onClick={() => handleDelete(id)}>Delete</OperationButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}