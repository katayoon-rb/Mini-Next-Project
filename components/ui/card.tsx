import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  const base =
    "rounded-2xl border p-6 shadow-sm transition-colors " +
    "bg-white text-gray-900 border-gray-200 " +
    "hover:border-gray-300 " +
    "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 " +
    "dark:hover:border-gray-700";

  return <div className={`${base} ${className}`} {...props} />;
}
