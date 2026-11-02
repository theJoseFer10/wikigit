import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitReset() {
  const suave = [
    `git reset --soft HEAD~1`,
    `# Elimina el ultimo commit y deja sus cambios preparados`,
  ]
  const mixto = [
    `git reset HEAD~1`,
    `# Elimina el ultimo commit y deja los cambios sin preparar`,
  ]
  const duro = [
    `git reset --hard HEAD~1`,
    `# Elimina el commit y descarta todos los cambios`,
  ]
  const unstage = [`git reset HEAD README.md`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git reset: mover el historial.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git reset mueve el puntero de la rama actual a otro commit. Segun la
          bandera que uses, los cambios pueden conservarse preparados, quedar sin
          preparar o perderse definitivamente.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Es una operacion local: no reescribe commits que ya estan en un remoto
          compartido. Para eso se usa git revert.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Reset suave (--soft).
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Retrocede el historial pero mantiene los cambios en el area de
          preparacion, listos para volver a confirmarse.
        </p>
        <div className="p-4">
          <TerminalText lines={suave} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Reset mixto (predeterminado).
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Retrocede el historial y deja los cambios en el directorio de trabajo,
          pero sin preparar.
        </p>
        <div className="p-4">
          <TerminalText lines={mixto} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Reset duro (--hard).
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Retrocede el historial y descarta todos los cambios del directorio de
          trabajo. Es peligroso: el trabajo no confirmado se pierde.
        </p>
        <div className="p-4">
          <TerminalText lines={duro} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Quitar un archivo del staging.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={unstage} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/deshacer-reset">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
