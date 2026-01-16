import { useState } from "react"
import { usePosts } from "../hooks/usePosts"
import { useSavePost } from "../hooks/useSavePost"
import { useUsers } from "../hooks/useUsers"
import PostsFilters from "./PostsFilters"

export const PostsList = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | undefined>()
    const [searchTerm, setSearchTerm] = useState('')
    
    const {posts, loading, error} = usePosts(selectedUserId, searchTerm);
    const {users} = useUsers();
    const {savePost, loading: saving, error: saveError} = useSavePost();

    const getUserName = (userId: number) => {
        const user = users.find(u => u.id === userId);
        return user ? user.name : 'Usuario desconocido';
    };

    const handleSavePost = async (post: typeof posts[0]) => {
        const success = await savePost(post);
        if (success) {
            alert('¡Post guardado exitosamente!');
        }
    };

    if(loading) return <div>Cargando...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl">
                <PostsFilters 
                    selectedUserId={selectedUserId}
                    onUserChange={setSelectedUserId}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
                
                {saveError && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                        {saveError}
                    </div>
                )}

                <div className="mb-4 text-gray-400">
                    Mostrando {posts.length} post{posts.length !== 1 ? 's' : ''}
                </div>

                {posts.length === 0 ? (
                    <div className="text-center p-8 text-gray-500">
                        No se encontraron posts con los filtros aplicados
                    </div>
                ) : (
                    <ul className="space-y-8">
                        {posts.map(post => (
                            <li key={post.id} className="p-4 rounded-2xl hover:bg-gray-400/30 hover:cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-semibold">{post.title}</h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">
                                    Por: <span className="font-semibold">{getUserName(post.userId)}</span>
                                </p>
                                <p>{post.body}</p>
                                <button 
                                    onClick={() => handleSavePost(post)}
                                    disabled={saving}
                                    className="mt-5 bg-blue-950 p-4 rounded-2xl hover:cursor-pointer disabled:opacity-50 hover:bg-blue-900"
                                >
                                    {saving ? 'Guardando...' : 'Guardar post'}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}