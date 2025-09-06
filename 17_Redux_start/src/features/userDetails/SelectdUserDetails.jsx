export default function SelectUserDetails() {
    return (
        <div className="my-5 w-full bg-white shadow rounded-md p-3 space-y-2">
            <h2 className="text-xl my-1 font-bold">Selected User</h2>
            <div className="space-y-1 ">
                <p><span className='font-semibold'>Name: </span>name</p>
                <p><span className='font-semibold'>Email: </span>email</p>
            </div>
            <button
                className="bg-orange-400 rounded-md text-white py-2 px-3 hover:bg-orange-500
                transition duration-500"
                onClick={() => {console.log('click')}}
            >Clear Selection</button>
        </div>
    )
}