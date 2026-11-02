import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PullRequests() {
  const rama = [
    `git switch -c feature/login`,
    `# Trabaja y confirma tus cambios en la rama`,
  ]
  const subir = [`git push -u origin feature/login`]
  const integrar = [
    `git switch main`,
    `git pull origin main`,
    `git merge feature/login`,
  ]
  const limpiar = [
    `git push origin --delete feature/login`,
    `git branch -d feature/login`,
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Pull requests.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Un pull request (PR) es una solicitud para integrar los cambios de una
          rama en otra, normalmente en un repositorio remoto. Permite revisar el
          codigo, discutir cambios y dejar registro antes de fusionar.
        </p>
        <p className="max-w-prose text-muted-foreground">
          En GitLab se llaman merge requests, pero el concepto es el mismo. La
          plataforma (GitHub, GitLab, Bitbucket) agrega la interfaz; Git aporta
          las ramas, los commits y la fusion.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Flujo tipico de un pull request.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          1. Crea una rama de trabajo.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Nunca trabajes directamente sobre main. Crea una rama descriptiva.
        </p>
        <div className="p-4">
          <TerminalText lines={rama} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          2. Sube la rama al remoto.
        </h3>
        <div className="p-4">
          <TerminalText lines={subir} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          3. Abre el pull request.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Desde la plataforma, elige la rama base y la rama con tus cambios,
          escribe un titulo y una descripcion clara, y solicita revision.
        </p>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          4. Revisa e integra.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Tras la aprobacion, la fusion puede hacerse desde la plataforma o de
          forma local con git.
        </p>
        <div className="p-4">
          <TerminalText lines={integrar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          5. Limpia la rama.
        </h3>
        <div className="p-4">
          <TerminalText lines={limpiar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/colaboracion-pull-requests">
          Iniciar Actividad.
        </Link>
      </Button>
    </div>
  )
}
