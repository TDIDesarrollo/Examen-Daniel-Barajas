import { useState } from 'react';
import type { Post } from '../../domain/entities/Posts';
import { savePostUseCase } from '../../domain/useCases/savePost';
import { createSavedPostsRepository } from '../../data/repositories/savedPostsRepository';

export const useSavePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const savePost = async (post: Post): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const repository = createSavedPostsRepository();
      const savePost = savePostUseCase(repository);
      await savePost(post);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar post');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { savePost, loading, error };
};