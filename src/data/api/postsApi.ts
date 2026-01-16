import type { Post } from "../../domain/entities/Posts"

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok) throw new Error('Error al obtener posts')

    return response.json()
}