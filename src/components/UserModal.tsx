import type { User } from '../types/user'
import { RxCross1 } from 'react-icons/rx'

interface Props {
  user: User
  onClose: () => void
}

export function UserModal({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          <RxCross1 />
        </button>

        <h2 className="text-xl font-bold mb-4">{user.name}</h2>

        <div className="space-y-2 text-sm mb-6">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>

          <p>
            <strong>Website:</strong>{' '}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {user.website}
            </a>
          </p>

          <div>
            <strong>Dirección:</strong>
            <p className="ml-2">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="ml-2">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          <div>
            <strong>Empresa:</strong>
            <p className="ml-2">{user.company.name}</p>
            <p className="ml-2 italic text-gray-500">
              “{user.company.catchPhrase}”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}