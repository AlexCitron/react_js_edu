import Input from "./Input.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "./userListSlice.js";


export default function AddUserForm( ) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    function handleSubmit (e) {
        e.preventDefault();

        const newUser = {name, email};

        dispatch(addUser(newUser));
        setName("")
        setEmail("")
    }

    return (
        <div className="mt-10 flex gap-3 ">
            <Input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button
                type="submit"
                className="bg-green-500 rounded-md px-auto text-white py-3 px-2 w-50 hover:bg-green-600
                transition duration-500"
                onClick={handleSubmit}>
            Add user</button>
        </div>
    )
}