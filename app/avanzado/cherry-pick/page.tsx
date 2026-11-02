import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CherryPick() {
  const basico = [`git cherry-pick a1b2c3d`]
  const desdeRama = [`git cherry-pick feature/experimento`]
  const sinCommit = [`git cherry-pick -n a1b2c3d`]
  const resolver = [
    `git cherry-pick --continue`,
    `# o para cancelar: git cherry-pick --abort`,
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git cherry-pick.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          cherry-pick aplica en tu rama actual el cambio introducido por un commit
          especifico de otra rama. Es util para traer una correccion puntual sin
          fusionar toda la rama.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Git no copia el commit original: crea un commit nuevo con el mismo
          cambio y un hash distinto.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Elegir el commit.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes indicar el hash del commit o el nombre de una rama para tomar su
          ultimo commit.
        </p>
        <div className="p-4">
          <TerminalText lines={basico} />
        </div>
        <div className="p-4">
          <TerminalText lines={desdeRama} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Aplicar sin confirmar.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Con -n los cambios quedan en el area de preparacion para que los
          ajustes o combines antes de confirmar.
        </p>
        <div className="p-4">
          <TerminalText lines={sinCommit} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Conflictos y control.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si hay conflictos, resuelvelos, prepara los archivos y continua. Tambien
          puedes cancelar la operacion completa.
        </p>
        <div className="p-4">
          <TerminalText lines={resolver} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Usa cherry-pick con criterio: abusar de el puede duplicar cambios y
          complicar el historial. Si necesitas toda la rama, es mejor merge o
          rebase.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/avanzado-cherry-pick">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
