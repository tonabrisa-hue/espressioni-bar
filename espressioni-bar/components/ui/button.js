export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md inline-flex items-center justify-center transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
