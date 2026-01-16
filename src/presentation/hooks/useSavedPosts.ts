import { useState, useEffect } from 'react';
import type { Post } from '../../domain/entities/Posts';
import { getSavedPostsUseCase } from '../../domain/useCases/getSavedPosts';
import { createSavedPostsRepository } from '../../data/repositories/savedPostsRepository';

export const useSavedPosts = () => {
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const loadSavedPosts = async () => {
      setLoading(true);
      const repository = createSavedPostsRepository();
      const getSavedPosts = getSavedPostsUseCase(repository);
      const posts = await getSavedPosts();
      setSavedPosts(posts);
      setLoading(false);
    };
    loadSavedPosts();
  }, []);

  return { savedPosts, loading };
};