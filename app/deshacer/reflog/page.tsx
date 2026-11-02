import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Reflog() {
  const reflog = [`git reflog`]
  const recuperar = [
    `git reset --hard HEAD@{1}`,
    `# Vuelve al estado anterior registrado en el reflog`,
  ]
  const revivir = [`git switch -c recuperada HEAD@{2}`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Reflog: recuperar casi todo.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El reflog es un registro local de todos los movimientos de HEAD y de
          las ramas: commits, resets, merges, rebases y cambios de rama. Es tu
          red de seguridad cuando un comando parece haber borrado trabajo.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Ver el reflog.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Cada linea muestra a donde apuntaba HEAD, en que operacion y con un
          mensaje. Las referencias como HEAD@{1} indican el estado anterior.
        </p>
        <div className="p-4">
          <TerminalText lines={reflog} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Recuperar un estado anterior.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si hiciste un reset --hard por error, puedes volver al estado que
          aparece en el reflog.
        </p>
        <div className="p-4">
          <TerminalText lines={recuperar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear una rama desde un punto del reflog.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          En lugar de moverte directamente, puedes crear una rama nueva en ese
          punto para conservar tanto el estado recuperado como el actual.
        </p>
        <div className="p-4">
          <TerminalText lines={revivir} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Ten en cuenta que el reflog es local y temporal: Git lo limpia con el
          tiempo segun su configuracion de recolector de basura.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/deshacer-reflog">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
