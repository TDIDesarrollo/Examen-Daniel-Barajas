import type { IPostRepository } from "../../domain/repositories/IPostsRepository";
import { fetchPosts } from "../api/postsApi";

export const createPostRepository = (): IPostRepository => ({
    getPosts: async () => {
        const data = await fetchPosts();
        return data
    }
})