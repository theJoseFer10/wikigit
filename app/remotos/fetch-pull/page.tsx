import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FetchPull() {
  const fetch = [`git fetch origin`]
  const verRemota = [`git log --oneline origin/main`]
  const pull = [`git pull origin main`]
  const pullRebase = [`git pull --rebase origin main`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git fetch y git pull.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Estos comandos traen al repositorio local los cambios que existen en el
          remoto. La diferencia esta en que hacen con esos cambios una vez
          descargados.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git fetch: descargar sin fusionar.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          fetch actualiza tus referencias remotas (como origin/main) pero no toca
          tu rama de trabajo. Es una forma segura de revisar que hay de nuevo
          antes de integrar.
        </p>
        <div className="p-4">
          <TerminalText lines={fetch} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Luego puedes comparar tu rama con la remota.
        </p>
        <div className="p-4">
          <TerminalText lines={verRemota} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git pull: descargar y fusionar.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          pull equivale a ejecutar fetch seguido de merge. Trae los cambios del
          remoto y los integra en tu rama actual.
        </p>
        <div className="p-4">
          <TerminalText lines={pull} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Si prefieres un historial lineal, puedes pedir que integre con rebase
          en lugar de merge.
        </p>
        <div className="p-4">
          <TerminalText lines={pullRebase} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Cuando usar cada uno.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>Usa fetch si quieres revisar antes de integrar.</li>
          <li>Usa pull si confias en los cambios y quieres actualizarte rapido.</li>
          <li>Si hay conflictos, resolucion igual que en un merge normal.</li>
        </ul>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/remotos-fetch-pull">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
