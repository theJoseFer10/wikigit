"use client"

import { useSyncExternalStore } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getThemeServerSnapshot,
  getThemeSnapshot,
  subscribeTheme,
  toggleTheme,
} from "@/lib/theme"

export function ThemeToggle() {
  const { theme, resolved } = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  )

  const label =
    theme === "system"
      ? `Tema del sistema (${resolved === "dark" ? "oscuro" : "claro"})`
      : `Tema ${resolved === "dark" ? "oscuro" : "claro"}`

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`${label}. Cambiar tema`}
      title={`${label}. Clic para cambiar`}
    >
      {theme === "system" ? (
        <Monitor className="size-4" />
      ) : resolved === "dark" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </Button>
  )
}
