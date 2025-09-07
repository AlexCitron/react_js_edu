export default async function createPostHandler({request}) {

    const formData = await request.formData();
    const title  = formData.get("title");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        })

    if (!response.ok) {
        throw new Error("Failed to create Post");
    }
    return await response.json();
}