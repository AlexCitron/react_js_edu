export default function LoadUsersButton({onClick}) {
    return (
        <button
            className="bg-green-600 rounded-md text-white mt-2 py-2 px-3 hover:bg-green-700
                transition duration-500"
            onClick={onClick}
        >Load Users</button>
    )
}