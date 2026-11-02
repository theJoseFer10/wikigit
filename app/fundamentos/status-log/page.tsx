import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StatusYLog() {
  const status = [
    `git status`,
    `# Muestra archivos modificados, preparados o sin seguimiento`,
  ]
  const statusCorto = [`git status -s`]
  const log = [`git log`]
  const logCorto = [`git log --oneline`]
  const logGrafico = [`git log --oneline --graph --all`]
  const logLimite = [`git log -3 --oneline`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git status y git log.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Estos dos comandos te dan visibilidad sobre tu repositorio: git status
          muestra que esta pasando ahora mismo y git log cuenta lo que ya ocurrio
          en el historial.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git status: el estado actual.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Indica la rama actual y clasifica los archivos en tres grupos:
          cambios preparados, cambios no preparados y archivos sin seguimiento.
        </p>
        <div className="p-4">
          <TerminalText lines={status} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          La bandera -s muestra una version corta y compacta del estado.
        </p>
        <div className="p-4">
          <TerminalText lines={statusCorto} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git log: el historial.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Muestra los commits realizados, con su hash, autor, fecha y mensaje,
          del mas reciente al mas antiguo.
        </p>
        <div className="p-4">
          <TerminalText lines={log} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Variantes utiles de git log.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Una linea por commit.
        </h3>
        <div className="p-4">
          <TerminalText lines={logCorto} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Ver todas las ramas como grafo.
        </h3>
        <div className="p-4">
          <TerminalText lines={logGrafico} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Limitar la cantidad de commits.
        </h3>
        <div className="p-4">
          <TerminalText lines={logLimite} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/status-log">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
