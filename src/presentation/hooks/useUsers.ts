import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
}

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch {
                console.error('Error al cargar usuarios')
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    return {users, loading}
}