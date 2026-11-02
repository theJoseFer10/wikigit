import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Conflictos() {
  const merge = [`git merge feature`]
  const estado = [`git status`]
  const marcadores = [
    `<<<<<<< HEAD`,
    `version de main`,
    `=======`,
    `version de feature`,
    `>>>>>>> feature`,
  ]
  const resolver = [
    `# Edita el archivo y deja solo el contenido final`,
    `git add README.md`,
    `git commit -m "resuelve conflicto en README"`,
  ]
  const abortar = [`git merge --abort`]
  const mergetool = [`git mergetool`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Resolver conflictos.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Un conflicto ocurre cuando dos ramas modificaron las mismas lineas de
          un archivo (o una lo modifico y la otra lo elimino). Git no puede
          decidir que version conservar y te pide que lo resuelvas manualmente.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Cuando aparece el conflicto.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Al fusionar, Git se detiene y deja el archivo marcado en el directorio
          de trabajo.
        </p>
        <div className="p-4">
          <TerminalText lines={merge} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          git status lista los archivos en conflicto.
        </p>
        <div className="p-4">
          <TerminalText lines={estado} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Los marcadores de conflicto.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git inserta marcas en el archivo para mostrar ambas versiones. Debes
          editar el archivo y eliminar los marcadores, dejando el contenido final
          que quieras.
        </p>
        <div className="p-4">
          <TerminalText lines={marcadores} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Resolver y confirmar.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Marca el archivo como resuelto con git add y termina la fusion con un
          commit.
        </p>
        <div className="p-4">
          <TerminalText lines={resolver} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Alternativas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si te arrepientes, puedes cancelar la fusion. Tambien puedes usar una
          herramienta visual para comparar ambas versiones.
        </p>
        <div className="p-4">
          <TerminalText lines={abortar} />
        </div>
        <div className="p-4">
          <TerminalText lines={mergetool} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/ramas-conflictos">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
