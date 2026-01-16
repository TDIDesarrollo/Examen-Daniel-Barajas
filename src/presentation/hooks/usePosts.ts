import { useEffect, useState } from "react"
import type { Post } from "../../domain/entities/Posts"
import { createPostRepository } from "../../data/repositories/postRepository"
import { getPostsUseCase } from "../../domain/useCases/getPosts"

export const usePosts = (userId?: number, searchTerm?: string) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [allPosts, setAllPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPosts = async() => {
            try {
                const repository = createPostRepository();
                const getPosts = getPostsUseCase(repository)
                const result = await getPosts()
                setAllPosts(result)
                setPosts(result)
            } catch {
                setError('Error al cargar posts')
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    useEffect(() => {
        let filtered = [...allPosts];

        if (userId) {
            filtered = filtered.filter(post => post.userId === userId);
        }

        if (searchTerm && searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(post => 
                post.title.toLowerCase().includes(term) ||
                post.body.toLowerCase().includes(term)
            );
        }

        setPosts(filtered);
    }, [userId, searchTerm, allPosts])

    return {posts, loading, error}
}