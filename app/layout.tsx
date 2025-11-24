import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

export const metadata = {
  title: "Mini Next.js 14 App – Dashboard, Form & Dark Mode",
  description:
    "A minimal and modern Next.js 14 application showcasing a reusable UI system, dark/light theme switching, server-side rendering, API fetching, and form validation.",
  keywords: [
    "Next.js 14", "React 19", "Dark Mode", "Theme Toggle", "Dashboard",
    "API Fetch", "React Hook Form", "Zod Validation", "TailwindCSS"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <ThemeProvider>
          <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
              <nav className="flex gap-3 text-sm">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </nav>
              <ThemeToggle />
            </div>
          </header>
          <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
