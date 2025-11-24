import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium " +
    "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "focus:ring-black dark:focus:ring-white dark:focus:ring-offset-black";

  const styles =
    variant === "primary"
      ? // Primary button
        "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      : // Secondary button
        "bg-gray-200 text-gray-900 hover:bg-gray-300 " +
        "dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
