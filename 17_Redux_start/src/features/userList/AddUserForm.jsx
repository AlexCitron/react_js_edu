import Input from "./Input.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "./userListSlice.js";
import AddUserButton from "./AddUserButton.jsx";


export default function AddUserForm( ) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    function handleSubmit (e) {
        e.preventDefault();

        const newUser = {name, email};
        if (!name || !email) {
            return
        }
        dispatch(addUser(newUser));
        setName("")
        setEmail("")
    }

    return (
        <div className="mt-10 flex gap-3 ">
            <Input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <AddUserButton onClick={handleSubmit} />
        </div>
    )
}