export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-white text-black px-6 py-3 rounded-2xl font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
