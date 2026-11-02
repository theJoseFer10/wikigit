import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitCommit() {
  const commit = [`git commit -m "Agrega validacion del formulario"`]
  const commitTodo = [`git commit -am "Corrige estilos del boton"`]
  const historial = [`git log --oneline`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git commit: confirmar cambios.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git commit guarda de forma permanente los cambios que estan en el area
          de preparacion. Cada commit es una fotografia del proyecto en un momento
          concreto e incluye un mensaje que describe lo que se hizo.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Solo se confirman los cambios preparados con git add. Los archivos
          modificados que no fueron preparados quedan fuera del commit.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear un commit.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera -m permite escribir el mensaje directamente en el comando.
          Sin ella, Git abrira tu editor de texto para redactarlo.
        </p>
        <div className="p-4">
          <TerminalText lines={commit} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Buenas practicas para el mensaje.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>Escribe en imperativo: &quot;Agrega&quot;, &quot;Corrige&quot;, &quot;Elimina&quot;.</li>
          <li>Resume el cambio en una linea corta y clara.</li>
          <li>Evita mensajes genericos como &quot;cambios&quot; o &quot;arreglos&quot;.</li>
          <li>Un commit debe representar un cambio logico y cohesivo.</li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Atajo para archivos ya rastreados.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera -am prepara y confirma en un solo paso, pero solo funciona
          con archivos que Git ya conoce (no incluye archivos nuevos).
        </p>
        <div className="p-4">
          <TerminalText lines={commitTodo} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Revisar los commits creados.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={historial} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/commit">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
