export default function UsersList() {
    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">User List</h2>
            <button
                className="bg-green-500 rounded-md text-white mt-2 py-2 px-3 hover:bg-green-600
                transition duration-500"
                onClick={() => {console.log('click')}}
            >Load Users</button>
            <ul className='mt-2 space-y-2'>
                <li className="flex justify-between">
                    <p>Name: email</p>
                    <div className="flex gap-2">
                        <button
                            className="bg-blue-500 py-1 px-2 rounded sm text-white hover:bg-blue-600
                                        transition duration-500"
                            onClick={() => {console.log('click')}}
                        >Select</button>
                        <button
                            className="bg-red-500 py-1 px-2 rounded sm text-white hover:bg-red-600
                                        transition duration-500"
                            onClick={() => {console.log('click')}}>Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}