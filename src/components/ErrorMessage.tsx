interface Props {
  message: string;
}

export function ErrorMessage({ message }: Props) {
  return (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-600 font-semibold text-lg">
        {message}
      </p>
    </div>
  );
}