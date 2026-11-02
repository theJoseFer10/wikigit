import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Bisect() {
  const iniciar = [
    `git bisect start`,
    `git bisect bad`,
    `git bisect good a1b2c3d`,
  ]
  const probar = [
    `# Prueba el commit actual y marca el resultado`,
    `git bisect good`,
    `# o`,
    `git bisect bad`,
  ]
  const terminar = [`git bisect reset`]
  const automatizar = [
    `git bisect run npm test`,
    `# Repite la busqueda automaticamente`,
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git bisect: encontrar el commit culpable.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          bisect hace una busqueda binaria en el historial para encontrar el
          commit que introdujo un error. En lugar de revisar commit por commit,
          Git te va llevando al punto medio entre una version buena y una mala.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Iniciar la busqueda.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Indica un estado malo (normalmente el actual) y uno bueno conocido.
        </p>
        <div className="p-4">
          <TerminalText lines={iniciar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Probar cada punto medio.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git se mueve a un commit intermedio. Tu lo pruebas y le dices si el
          error esta presente (bad) o no (good). El proceso se repite hasta
          aislar el commit responsable.
        </p>
        <div className="p-4">
          <TerminalText lines={probar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Automatizar la busqueda.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si tienes una prueba que falla con el bug, bisect run ejecuta el comando
          en cada commit y decide solo.
        </p>
        <div className="p-4">
          <TerminalText lines={automatizar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Terminar y volver a tu rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Al finalizar, Git te muestra el primer commit malo. No olvides salir del
          modo bisect.
        </p>
        <div className="p-4">
          <TerminalText lines={terminar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/avanzado-bisect">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
