export default function AddUserButton({onClick}) {
    return (
        <button
            type="submit"
            className="bg-green-600 rounded-md px-auto text-white py-3 px-2 w-50 hover:bg-green-700
                transition duration-500"
            onClick={onClick}>
            Add user</button>
    )
}