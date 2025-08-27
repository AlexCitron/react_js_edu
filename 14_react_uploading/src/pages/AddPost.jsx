import {Link, useActionData, useNavigation, Form} from "react-router-dom";

export default function AddPost() {
    const actionData = useActionData()
    const {state} = useNavigation();

    console.log(actionData, state);
    return (
        <div className="mt-10">
            <h1 className="text-xl font-semibold text-blue-500 text-center">Create a Post</h1>
            <Form className="mt-5 flex gap-3" method='post' action="/create">
                <input className="border border-blue-400 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter post title"
                    name="title"
                    required
                />
                <button className="bg-blue-200 rounded-md px-3 hover:bg-blue-300 transition duration-250"
                        type="submit"
                        disabled={state === 'submitting'}
                >{state === 'submitting' ? "Sending..." : "Create Post"}</button>
            </Form>
            {actionData && (
                <div className="mt-[1rem] text-green-500">
                    <p className="font-bold">Post created successfully!</p>
                    ID: {actionData.id}, Title: {actionData.title}
                </div>
            )}
            <p className="mt-5 font-semibold">Back to <Link className="underline" to="/">Home</Link></p>
        </div>
    )
}