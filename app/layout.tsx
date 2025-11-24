import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

export const metadata = {
  title: "Next.js App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider>
          <header className="p-4 border-b border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </header>

          <main className="p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
