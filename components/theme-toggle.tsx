"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme();
  
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "Dark" : "Light"}
    </Button>
  );
}
