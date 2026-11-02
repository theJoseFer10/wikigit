"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react"
import { activityHrefs } from "@/lib/activities"

const STORAGE_KEY = "wikigit:activity-progress"
const EMPTY: string[] = []

type Snapshot = {
  ids: string[]
  loaded: boolean
}

type ProgressContextValue = {
  loaded: boolean
  completed: Set<string>
  completedCount: number
  total: number
  isComplete: (href: string) => boolean
  markComplete: (href: string) => void
  reset: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

const listeners = new Set<() => void>()
let snapshot: Snapshot = { ids: EMPTY, loaded: false }
let initialized = false

const serverSnapshot: Snapshot = { ids: EMPTY, loaded: false }

function readStoredProgress(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return EMPTY
    return parsed.filter(
      (value): value is string =>
        typeof value === "string" && activityHrefs.includes(value)
    )
  } catch {
    return EMPTY
  }
}

function getSnapshot(): Snapshot {
  if (!initialized) {
    initialized = true
    snapshot = { ids: readStoredProgress(), loaded: true }
  }
  return snapshot
}

function getServerSnapshot(): Snapshot {
  return serverSnapshot
}

function emit() {
  listeners.forEach((listener) => listener())
}

function write(ids: string[], loaded = true) {
  snapshot = { ids, loaded }
  initialized = true
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // Si el almacenamiento no esta disponible, el progreso solo vive en memoria.
  }
  emit()
}

function subscribe(listener: () => void) {
  listeners.add(listener)

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return
    initialized = true
    snapshot = { ids: readStoredProgress(), loaded: true }
    listener()
  }

  window.addEventListener("storage", handleStorage)

  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", handleStorage)
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const current = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  const completed = useMemo(() => new Set(current.ids), [current.ids])

  const markComplete = useCallback((href: string) => {
    const latest = getSnapshot()
    if (latest.ids.includes(href)) return
    write([...latest.ids, href])
  }, [])

  const reset = useCallback(() => {
    write([])
  }, [])

  const value = useMemo<ProgressContextValue>(
    () => ({
      loaded: current.loaded,
      completed,
      completedCount: completed.size,
      total: activityHrefs.length,
      isComplete: (href: string) => completed.has(href),
      markComplete,
      reset,
    }),
    [current.loaded, completed, markComplete, reset]
  )

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error("useProgress debe usarse dentro de ProgressProvider")
  }
  return context
}
