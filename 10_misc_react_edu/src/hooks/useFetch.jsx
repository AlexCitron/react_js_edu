import { useState, useEffect  } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData(url) {
            try{
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`HTTP ERROR: ${response.status}`)
                }
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData(url)
    }, [url])

    return {data, loading, error}
}