"use client"

export type Theme = "light" | "dark" | "system"

export type ThemeSnapshot = {
  theme: Theme
  resolved: "light" | "dark"
}

const STORAGE_KEY = "wikigit:theme"

const listeners = new Set<() => void>()
const serverSnapshot: ThemeSnapshot = { theme: "system", resolved: "light" }

let theme: Theme = "system"
let loaded = false
let snapshot: ThemeSnapshot = serverSnapshot

function systemPrefersDark(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

function resolveSnapshot(next: Theme): ThemeSnapshot {
  const resolved =
    next === "system" ? (systemPrefersDark() ? "dark" : "light") : next
  return { theme: next, resolved }
}

function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored
    }
  } catch {
    // Sin acceso al almacenamiento, seguimos el tema del sistema.
  }
  return "system"
}

function applyToDocument(next: ThemeSnapshot) {
  document.documentElement.classList.toggle("dark", next.resolved === "dark")
}

function emit() {
  listeners.forEach((listener) => listener())
}

export function getThemeSnapshot(): ThemeSnapshot {
  if (!loaded) {
    loaded = true
    theme = readStoredTheme()
    snapshot = resolveSnapshot(theme)
  }
  return snapshot
}

export function getThemeServerSnapshot(): ThemeSnapshot {
  return serverSnapshot
}

export function subscribeTheme(listener: () => void) {
  listeners.add(listener)

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  const handleSystemChange = () => {
    if (theme !== "system") return
    snapshot = resolveSnapshot(theme)
    applyToDocument(snapshot)
    listener()
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return
    loaded = false
    getThemeSnapshot()
    applyToDocument(snapshot)
    listener()
  }

  mediaQuery.addEventListener("change", handleSystemChange)
  window.addEventListener("storage", handleStorage)

  return () => {
    listeners.delete(listener)
    mediaQuery.removeEventListener("change", handleSystemChange)
    window.removeEventListener("storage", handleStorage)
  }
}

export function setTheme(next: Theme) {
  loaded = true
  theme = next
  snapshot = resolveSnapshot(next)

  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Si no se puede guardar, el cambio aplica solo a esta sesion.
  }

  applyToDocument(snapshot)
  emit()
}

export function toggleTheme() {
  const current = getThemeSnapshot()
  setTheme(current.resolved === "dark" ? "light" : "dark")
}
