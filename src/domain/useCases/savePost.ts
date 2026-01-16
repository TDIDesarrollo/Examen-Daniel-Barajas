import type { Post } from '../entities/Posts';
import type { ISavedPostsRepository } from '../repositories/ISavedPostsRepository';

export const savePostUseCase = (repository: ISavedPostsRepository) => {
  return async (post: Post): Promise<void> => {
    // Lógica de negocio: verificar si ya está guardado
    const isSaved = await repository.isPostSaved(post.id);
    
    if (isSaved) {
      throw new Error('Este post ya está guardado');
    }
    
    await repository.savePost(post);
  };
};