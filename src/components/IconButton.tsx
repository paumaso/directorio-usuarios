import type { ReactNode } from 'react'

interface IconButtonProps {
  icon: ReactNode
  text: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'delete'
}

export function IconButton({
  icon,
  text,
  onClick,
  variant = 'primary',
}: IconButtonProps) {
  const baseStyles =
    'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition cursor-pointer'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    delete: 'bg-red-600 text-white hover:bg-red-700',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}
