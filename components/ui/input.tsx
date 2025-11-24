import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const base =
      "w-full rounded-xl border px-3 py-2 text-sm outline-none transition " +
      "border-gray-300 bg-white text-gray-900 focus:border-black " +
      "dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-white";

    const errorClass = error ? " border-red-500 dark:border-red-500" : "";

    return (
      <label className="block space-y-1">
        {label && (
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {label}
          </span>
        )}

        <input
          ref={ref}
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
