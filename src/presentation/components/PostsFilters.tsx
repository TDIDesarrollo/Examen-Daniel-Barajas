import { useUsers } from "../hooks/useUsers"

type PostsFiltersProps = {
  selectedUserId?: number;
  onUserChange: (userId: number | undefined) => void;
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

const PostsFilters = ({ selectedUserId, onUserChange, searchTerm, onSearchChange }: PostsFiltersProps) => {
  const { users, loading } = useUsers();

  const handleClearFilters = () => {
    onUserChange(undefined);
    onSearchChange('');
  };

  const hasActiveFilters = selectedUserId || searchTerm.trim();

  return (
    <div className="mb-8 p-6 bg-gray-400/20 rounded-2xl space-y-4">
      <h2 className="text-2xl font-bold mb-4">Filtros</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">Filtrar por Usuario</label>
          <select
            value={selectedUserId || ''}
            onChange={(e) => onUserChange(e.target.value ? Number(e.target.value) : undefined)}
            disabled={loading}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option value="">Todos los usuarios</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Buscar posts</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título o contenido..."
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-gray-400"
          />
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {selectedUserId && (
              <span className="mr-4">
                Usuario: <strong>{users.find(u => u.id === selectedUserId)?.name}</strong>
              </span>
            )}
            {searchTerm && (
              <span>
                Búsqueda: <strong>"{searchTerm}"</strong>
              </span>
            )}
          </div>
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}

export default PostsFilters