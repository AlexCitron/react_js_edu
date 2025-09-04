export default function AddUserForm( ) {
    return (
        <div className="border border-gray-200 mt-10 ">
            <input placeholder='Name' type='text' />
            <input placeholder='Email' type='email' />
            <button>Add user</button>
        </div>
    )
}