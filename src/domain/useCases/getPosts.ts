import type { Post } from "../entities/Posts";
import type { IPostRepository } from "../repositories/IPostsRepository";

export const getPostsUseCase = (repository: IPostRepository) => {
    return async (): Promise<Post[]> => {
        const posts = await repository.getPosts();

        return posts
    }
}