import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitRestore() {
  const descartar = [`git restore README.md`]
  const descartarTodo = [`git restore .`]
  const quitarDelStaging = [`git restore --staged README.md`]
  const desdeCommit = [`git restore --source=HEAD~1 README.md`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git restore: descartar cambios.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git restore devuelve archivos a un estado anterior. Sirve para
          descartar cambios del directorio de trabajo o para quitar archivos del
          area de preparacion sin tocar el historial de commits.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Descartar cambios del directorio de trabajo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Restaura el archivo a como estaba en el ultimo commit. Los cambios no
          confirmados se pierden de forma irreversible.
        </p>
        <div className="p-4">
          <TerminalText lines={descartar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Para descartar todos los cambios del directorio actual, usa el punto.
        </p>
        <div className="p-4">
          <TerminalText lines={descartarTodo} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Quitar archivos del area de preparacion.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera --staged deshace el git add, pero conserva los cambios en el
          directorio de trabajo. Es el equivalente moderno de git reset HEAD.
        </p>
        <div className="p-4">
          <TerminalText lines={quitarDelStaging} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Restaurar desde otro commit.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Con --source puedes indicar la version que quieres recuperar.
        </p>
        <div className="p-4">
          <TerminalText lines={desdeCommit} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Precaucion: git restore puede borrar trabajo no confirmado. Revisa
          siempre git status antes de descartar cambios.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/deshacer-restore">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
