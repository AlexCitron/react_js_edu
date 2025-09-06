import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "./userListSlice.js";
import OperationButton from "./userListOperationButtons.jsx";
import LoadUsersButton from "./LoadUsersButton.jsx";

export default function UsersList() {

    const users = useSelector(({ users }) => users);
    const loading = useSelector(({ loading }) => loading);
    const error = useSelector(({ error }) => error);

    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteUser(id))
    }

    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">User List</h2>
            <LoadUsersButton onClick={() => console.log("Click")} />

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            <ul className='mt-2 space-y-2'>
                {users.map(({id, name, email}) => (
                    <li key={id} className="flex justify-between">
                        <p>{name}: {email}</p>
                        <div className="flex gap-2">
                            <OperationButton color="blue" onClick={() => console.log('Click')}>Select</OperationButton>
                            <OperationButton color="red" onClick={() => handleDelete(id)}>Delete</OperationButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}