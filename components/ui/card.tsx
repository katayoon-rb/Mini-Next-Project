export function Card({ className = "", ...props }) {
  const base =
    "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900";

  return <div className={`${base} ${className}`} {...props} />;
}
