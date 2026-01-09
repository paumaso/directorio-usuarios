import type { User } from '../types/user';

interface Props {
  user: User;
  onClick: (user: User) => void;
}

export function UserCard({ user, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(user)}
      className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition"
    >
      <h2 className="font-semibold text-lg">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">{user.address.city}</p>
    </div>
  );
}