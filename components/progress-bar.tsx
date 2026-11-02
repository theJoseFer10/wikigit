"use client"

import { useProgress } from "@/hooks/use-progress"

export function ProgressBar() {
  const { loaded, completedCount, total } = useProgress()
  const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0
  const visiblePercentage = loaded ? percentage : 0

  return (
    <div className="ml-auto flex items-center gap-3">
      <span className="hidden text-xs text-muted-foreground sm:inline">
        {loaded ? `${completedCount}/${total} actividades` : "Cargando progreso..."}
      </span>
      <div
        className="h-2 w-28 overflow-hidden rounded-full bg-muted sm:w-40"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={loaded ? completedCount : 0}
        aria-label="Progreso de actividades completadas"
      >
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${visiblePercentage}%` }}
        />
      </div>
      <span className="w-9 text-right text-xs font-medium tabular-nums">
        {visiblePercentage}%
      </span>
    </div>
  )
}
