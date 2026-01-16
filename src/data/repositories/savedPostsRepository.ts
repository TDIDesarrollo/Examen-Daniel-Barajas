import type { ISavedPostsRepository } from '../../domain/repositories/ISavedPostsRepository';
import type { Post } from '../../domain/entities/Posts';

const STORAGE_KEY = 'saved_posts';

export const createSavedPostsRepository = (): ISavedPostsRepository => ({
  getSavedPosts: async () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  savePost: async (post: Post) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const posts: Post[] = saved ? JSON.parse(saved) : [];
    
    // Agregar el nuevo post
    posts.push(post);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  },

  isPostSaved: async (postId: number) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;
    
    const posts: Post[] = JSON.parse(saved);
    return posts.some(p => p.id === postId);
  },
});