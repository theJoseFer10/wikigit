import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GithubFlow() {
  const rama = [`git switch -c feature/mejora-buscador`]
  const publicar = [`git push -u origin feature/mejora-buscador`]
  const integrar = [
    `git switch main`,
    `git pull origin main`,
    `git merge feature/mejora-buscador`,
    `git push origin main`,
  ]
  const limpiar = [`git branch -d feature/mejora-buscador`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        GitHub Flow.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          GitHub Flow es un flujo de trabajo ligero basado en ramas cortas y pull
          requests. La idea central es que main siempre debe estar en un estado
          desplegable y que todo cambio llegue ahi mediante una rama revisada.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Los pasos del flujo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ol className="flex max-w-prose list-decimal flex-col space-y-2 p-4 pl-8 text-gray-700 dark:text-gray-200">
          <li>Actualiza main desde el remoto.</li>
          <li>Crea una rama descriptiva para tu cambio.</li>
          <li>Haz commits pequenos y claros.</li>
          <li>Sube la rama y abre un pull request.</li>
          <li>Revisa, discute y corrige.</li>
          <li>Fusiona en main y despliega.</li>
          <li>Elimina la rama.</li>
        </ol>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear y publicar la rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={rama} />
        </div>
        <div className="p-4">
          <TerminalText lines={publicar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Integrar en main.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Asegurate de tener main actualizada antes de fusionar y subir.
        </p>
        <div className="p-4">
          <TerminalText lines={integrar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Limpiar la rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={limpiar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Este flujo funciona muy bien en equipos pequenos y en proyectos con
          despliegue continuo. Para versiones con ramas de larga duracion existen
          otros modelos, como Git Flow.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/colaboracion-github-flow">
          Iniciar Actividad.
        </Link>
      </Button>
    </div>
  )
}
