export default async function FetchData(url) {
    const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
    return await response.json()
}
