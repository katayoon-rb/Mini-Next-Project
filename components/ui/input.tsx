import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const base =
      "w-full rounded-xl border px-3 py-2 text-sm outline-none " +
      "transition-colors focus:ring-2 focus:ring-offset-1 " +
      "bg-white text-gray-900 border-gray-300 focus:border-black focus:ring-gray-300 " +
      "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 " +
      "dark:focus:border-white dark:focus:ring-gray-700 dark:focus:ring-offset-black";

    const errorClass = error ? " border-red-500 focus:ring-red-400 dark:border-red-500 dark:focus:ring-red-500" : "";

    return (
      <label className="block space-y-1">
        {label && (
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {label}
          </span>
        )}

        <input ref={ref}
          className={`${base}${errorClass} ${className}`}
          {...props}
        />

        {error && (
          <span className="text-xs text-red-600 dark:text-red-400">
            {error}
          </span>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";
