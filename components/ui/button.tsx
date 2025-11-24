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
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
