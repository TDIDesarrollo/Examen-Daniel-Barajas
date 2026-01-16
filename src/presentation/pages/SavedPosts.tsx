import { useSavedPosts } from "../hooks/useSavedPosts"
import { useUsers } from "../hooks/useUsers"

const SavedPosts = () => {
  const { savedPosts, loading } = useSavedPosts();
  const { users } = useUsers();

  const getUserName = (userId: number) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Usuario desconocido';
  };

  if (loading) return <div>Cargando posts guardados...</div>;

  if (savedPosts.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500 text-lg">No tienes posts guardados todavía</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-start">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Posts Guardados ({savedPosts.length})</h2>
      </div>
      
      <ul className="space-y-6 max-w-3xl w-full">
        {savedPosts.map(post => (
          <li key={post.id} className="p-4 rounded-2xl bg-gray-400/20">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-400 mt-1 mb-2">
              Por: <span className="font-semibold">{getUserName(post.userId)}</span>
            </p>
            <p className="mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SavedPosts