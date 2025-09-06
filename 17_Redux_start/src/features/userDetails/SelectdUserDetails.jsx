import ClearSelectionButton from "./ClearSelectionButton.jsx";

export default function SelectUserDetails() {

    function handleClearSelection() {
        console.log("click")
    }

    // if (!selectedUserId) {
    //     return (
    //         <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
    //         <p className="text-xl my-1 font-semibold" >No users selected</p>
    //     </div>
    //     )
    // }
    // const user = users.find((user) => user.id === selectedUserId);
    //
    // if (!user) {
    //     return (
    //         <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
    //             <p className="text-xl my-1 font-semibold" >User not found</p>
    //         </div>
    //     )
    // }

    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">Selected User</h2>
            <div className="space-y-1 ">
                <p><span className='font-semibold'>Name: </span>name</p>
                <p><span className='font-semibold'>Email: </span>email</p>
            </div>
            <ClearSelectionButton onClick={handleClearSelection}/>
        </div>
    )
}