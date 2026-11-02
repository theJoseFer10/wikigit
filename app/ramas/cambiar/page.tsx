import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CambiarRamas() {
  const crear = [`git branch nueva-funcionalidad`]
  const cambiar = [`git switch nueva-funcionalidad`]
  const crearYCambiar = [
    `git switch -c nueva-funcionalidad`,
    `# Equivalente clasico: git checkout -b nueva-funcionalidad`,
  ]
  const lista = [`git branch`]
  const eliminar = [`git branch -d nueva-funcionalidad`]
  const renombrar = [`git branch -m nuevo-nombre`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear y cambiar ramas.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Crear una rama es simplemente crear un puntero nuevo hacia el commit
          actual. Cambiar de rama actualiza HEAD y el directorio de trabajo para
          que trabajes sobre el contenido de esa rama.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear una rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Crea la rama pero no te mueve a ella: sigues en la rama actual.
        </p>
        <div className="p-4">
          <TerminalText lines={crear} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Cambiar de rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={cambiar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear y cambiar en un solo paso.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera -c crea la rama y te mueve a ella inmediatamente.
        </p>
        <div className="p-4">
          <TerminalText lines={crearYCambiar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Ver y limpiar ramas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={lista} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          La bandera -d elimina una rama ya fusionada. Si tiene trabajo sin
          fusionar, Git pedira confirmacion con -D.
        </p>
        <div className="p-4">
          <TerminalText lines={eliminar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Tambien puedes renombrar la rama actual.
        </p>
        <div className="p-4">
          <TerminalText lines={renombrar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/ramas-cambiar">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
