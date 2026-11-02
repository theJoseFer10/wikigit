import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Merge() {
  const pasos = [
    `git switch main`,
    `git merge nueva-funcionalidad`,
  ]
  const sinFastForward = [`git merge --no-ff nueva-funcionalidad`]
  const abortar = [`git merge --abort`]
  const grafico = [`git log --oneline --graph --all`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Fusionar ramas con merge.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git merge integra los cambios de una rama en otra. Primero te ubicas
          en la rama que recibira los cambios y luego ejecutas el merge indicando
          la rama que quieres incorporar.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Fusion simple.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          En este ejemplo los cambios de nueva-funcionalidad se incorporan a main.
        </p>
        <div className="p-4">
          <TerminalText lines={pasos} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Fast-forward y three-way.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">Fast-forward:</span> la rama destino no
            avanzo desde que se creo la otra, asi que Git solo mueve el puntero.
          </li>
          <li>
            <span className="font-semibold">Three-way merge:</span> ambas ramas
            avanzaron, por lo que Git crea un commit de fusion con dos padres.
          </li>
        </ul>
        <p className="max-w-prose text-muted-foreground">
          La bandera --no-ff fuerza un commit de fusion aunque sea posible un
          fast-forward, dejando registro explicito de la rama integrada.
        </p>
        <div className="p-4">
          <TerminalText lines={sinFastForward} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Si algo sale mal.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes cancelar una fusion en curso y volver al estado anterior.
        </p>
        <div className="p-4">
          <TerminalText lines={abortar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Despues de fusionar, revisa el resultado en el grafo de commits.
        </p>
        <div className="p-4">
          <TerminalText lines={grafico} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/ramas-merge">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
