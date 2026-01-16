import type { Post } from '../entities/Posts';
import type { ISavedPostsRepository } from '../repositories/ISavedPostsRepository';

export const getSavedPostsUseCase = (repository: ISavedPostsRepository) => {
  return async (): Promise<Post[]> => {
    return await repository.getSavedPosts();
  };
};