import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hooks() {
  const listar = [`ls .git/hooks`]
  const ejemplo = [
    `#!/bin/sh`,
    `echo "Ejecutando verificaciones antes del commit..."`,
    `npm test`,
  ]
  const crear = [
    `echo "#!/bin/sh" > .git/hooks/pre-commit`,
    `chmod +x .git/hooks/pre-commit`,
  ]
  const saltar = [`git commit --no-verify -m "commit sin hooks"`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Hooks de Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Los hooks son scripts que Git ejecuta automaticamente antes o despues de
          ciertas acciones, como un commit, un push o una recepcion en el servidor.
          Sirven para automatizar validaciones y tareas.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Donde viven.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Los hooks del lado del cliente estan en .git/hooks. Git incluye ejemplos
          con la extension .sample que puedes activar quitandola y dando permisos
          de ejecucion.
        </p>
        <div className="p-4">
          <TerminalText lines={listar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Hooks utiles.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">pre-commit:</span> valida el codigo o
            ejecuta pruebas antes de confirmar. Si falla, el commit se cancela.
          </li>
          <li>
            <span className="font-semibold">commit-msg:</span> valida el formato
            del mensaje del commit.
          </li>
          <li>
            <span className="font-semibold">pre-push:</span> ejecuta pruebas antes
            de subir cambios.
          </li>
          <li>
            <span className="font-semibold">post-checkout / post-merge:</span>{" "}
            tareas despues de cambiar de rama o fusionar.
          </li>
        </ul>
        <p className="max-w-prose text-muted-foreground">
          Ejemplo de contenido de un pre-commit:
        </p>
        <div className="p-4">
          <TerminalText lines={ejemplo} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear y activar un hook.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El archivo debe llamarse exactamente como el hook y tener permisos de
          ejecucion.
        </p>
        <div className="p-4">
          <TerminalText lines={crear} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Saltar los hooks.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes omitirlos de forma puntual con --no-verify. Usalo solo cuando
          sepas lo que haces.
        </p>
        <div className="p-4">
          <TerminalText lines={saltar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Herramientas como Husky permiten versionar y compartir hooks con todo el
          equipo, ya que .git/hooks no se sube al repositorio.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/avanzado-hooks">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
