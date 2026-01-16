import type { Post } from "../entities/Posts"

export type IPostRepository = {
    getPosts: () => Promise<Post[]>
}