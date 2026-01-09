import { useState, useRef, useEffect } from 'react'
import type { User } from '../types/user'
import { useUsers } from '../hooks/useUsers'
import { SearchInput } from '../components/SearchInput'
import { UserCard } from '../components/UserCard'
import { UserModal } from '../components/UserModal'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage'
import { FaFilter } from 'react-icons/fa'
import { FiltersPanel } from '../components/FiltersPanel'

export function UsersPage() {
  const { users, loading, error } = useUsers()

  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const [filters, setFilters] = useState({
    city: '',
    company: '',
  })

  const filtersRef = useRef<HTMLDivElement>(null)

  const uniqueCities = [...new Set(users.map(u => u.address.city))].sort()
  const uniqueCompanies = [...new Set(users.map(u => u.company.name))].sort()

  const activeFiltersCount = Object.values(filters).filter(Boolean).length

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase())
    const matchesCity = !filters.city || user.address.city === filters.city
    const matchesCompany = !filters.company || user.company.name === filters.company
    return matchesSearch && matchesCity && matchesCompany
  })

  // Cerrar filtros al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showFilters && filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setShowFilters(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showFilters])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  const toggleFilters = () => setShowFilters(prev => !prev)
  const handleClearFilters = () => setFilters({ city: '', company: '' })

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Usuarios
        </h1>
        <div className="flex items-center gap-2 mt-1 text-gray-600">
          <span>{users.length}</span>
          <span>·</span>
          <span>Directorio completo</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <SearchInput
          placeholder="Buscar usuario..."
          value={search}
          onChange={setSearch}
        />

        <div className="flex items-center gap-3 ml-auto relative">
          <button
            onClick={toggleFilters}
            className="relative flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 cursor-pointer"
          >
            <FaFilter className="text-gray-400 text-lg" />
            <span className="text-gray-700">Filtros</span>

            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {showFilters && (
            <div ref={filtersRef} className="absolute top-full right-0 mt-2 z-50">
              <FiltersPanel
                filters={filters}
                setFilters={setFilters}
                uniqueCities={uniqueCities}
                uniqueCompanies={uniqueCompanies}
                onClose={() => setShowFilters(false)}
                onClear={handleClearFilters}
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onClick={setSelectedUser}
          />
        ))}
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}