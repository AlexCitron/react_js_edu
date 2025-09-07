export default function Input({placeholder, value, type, onChange}) {
    return (
        <>
            <input
                value={value}
                className="bg-white border-1 border-gray-400 rounded-md px-5 w-full
                focus:outline-3 focus:outline-blue-500 focus:border-0 "
                placeholder={ placeholder }
                type={type}
                onChange={onChange}
                required/>
        </>
    )
}