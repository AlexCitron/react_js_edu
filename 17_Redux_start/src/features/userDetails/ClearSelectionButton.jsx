export default function ClearSelectionButton({onClick}) {
    return (
        <button
            className="bg-orange-400 rounded-md text-white py-2 px-3 hover:bg-orange-500
                transition duration-500"
            onClick={onClick}
        >Clear Selection</button>
    )
}