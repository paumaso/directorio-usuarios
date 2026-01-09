interface FiltersPanelProps {
  filters: {
    city: string
    company: string
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      city: string
      company: string
    }>
  >
  uniqueCities: string[]
  uniqueCompanies: string[]
  onClose: () => void
  onClear: () => void
}

export function FiltersPanel({
  filters,
  setFilters,
  uniqueCities,
  uniqueCompanies,
  onClose,
  onClear,
}: FiltersPanelProps) {
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, city: e.target.value }))
  }

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, company: e.target.value }))
  }

  const hasActiveFilters = filters.city !== '' || filters.company !== ''

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-medium text-lg text-gray-800">Filtrar usuarios</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ciudad
          </label>
          <select
            value={filters.city}
            onChange={handleCityChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Todas las ciudades</option>
            {uniqueCities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Empresa
          </label>
          <select
            value={filters.company}
            onChange={handleCompanyChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Todas las empresas</option>
            {uniqueCompanies.map(company => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="w-full mt-3 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  )
}