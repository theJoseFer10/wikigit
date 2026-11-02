import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitStash() {
  const guardar = [`git stash`]
  const listar = [`git stash list`]
  const recuperar = [`git stash pop`]
  const aplicar = [`git stash apply`]
  const eliminar = [`git stash drop`]
  const incluirNuevos = [`git stash -u`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git stash: guardar trabajo temporal.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git stash guarda tus cambios sin confirmar en una pila y deja el
          directorio de trabajo limpio. Es util cuando necesitas cambiar de rama
          o hacer otra tarea sin confirmar cambios a medias.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Guardar cambios.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={guardar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Por defecto no incluye archivos nuevos sin seguimiento. Usa -u para
          incluirlos.
        </p>
        <div className="p-4">
          <TerminalText lines={incluirNuevos} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Ver la pila de stashes.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={listar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Recuperar cambios.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          pop aplica los cambios y los elimina de la pila. apply los aplica pero
          los conserva alli.
        </p>
        <div className="p-4">
          <TerminalText lines={recuperar} />
        </div>
        <div className="p-4">
          <TerminalText lines={aplicar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Eliminar un stash.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={eliminar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/deshacer-stash">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
