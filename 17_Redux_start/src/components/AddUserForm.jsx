import Input from "./Input.jsx";

export default function AddUserForm( ) {
    return (
        <div className="mt-10 flex gap-3 justify-start ">
            <Input placeholder='Name' type='text' />
            <Input placeholder='Email' type='email' />
            <button
                className="bg-green-500 rounded-md w-1/10 text-white py-3 hover:bg-green-600
                transition duration-500"
                onClick={() => {console.log('click')}}
            >Add user</button>
        </div>
    )
}