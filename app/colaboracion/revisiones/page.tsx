import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Revisiones() {
  const traerPr = [`git fetch origin pull/42/head:review-42`]
  const revisar = [`git switch review-42`, `git log --oneline main..review-42`]
  const comparar = [`git diff main...review-42`]
  const actualizar = [`git fetch origin`, `git push`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Revisiones de codigo.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La revision de codigo es el paso en el que otras personas leen tus
          cambios antes de integrarlos. En plataformas como GitHub se hace
          directamente en el pull request: se comentan lineas, se solicita
          cambios o se aprueba.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Revisar un pull request localmente.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes traer la rama del pull request a tu repositorio local para
          probarla y revisarla con tus herramientas.
        </p>
        <div className="p-4">
          <TerminalText lines={traerPr} />
        </div>
        <div className="p-4">
          <TerminalText lines={revisar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Compara los cambios del PR contra la rama base.
        </p>
        <div className="p-4">
          <TerminalText lines={comparar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Que revisar.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>Que el cambio resuelva el problema o la funcionalidad descrita.</li>
          <li>Legibilidad, nombres claros y consistencia con el proyecto.</li>
          <li>Manejo de errores, validaciones y casos borde.</li>
          <li>Pruebas suficientes y ausencia de secretos o datos sensibles.</li>
          <li>Commits con mensajes comprensibles y bien agrupados.</li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Responder a la revision.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si te piden cambios, haz nuevos commits en la misma rama y subelos. El
          pull request se actualiza automaticamente.
        </p>
        <div className="p-4">
          <TerminalText lines={actualizar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/colaboracion-revisiones">
          Iniciar Actividad.
        </Link>
      </Button>
    </div>
  )
}
