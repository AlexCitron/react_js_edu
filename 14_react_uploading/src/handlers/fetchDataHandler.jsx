export default async function fetchDataHandler(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch  posts");
    }
    return await response.json();
}
