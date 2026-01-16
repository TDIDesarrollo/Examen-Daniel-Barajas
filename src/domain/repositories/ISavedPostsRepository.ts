import type { Post } from "../entities/Posts";

export type ISavedPostsRepository = {
  getSavedPosts: () => Promise<Post[]>;
  savePost: (post: Post) => Promise<void>;
  isPostSaved: (postId: number) => Promise<boolean>;
};