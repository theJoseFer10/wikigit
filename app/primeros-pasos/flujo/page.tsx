import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FlujoDeTrabajo() {
  const estados = [
    `git status`,
    `# Archivos modificados, preparados y sin seguimiento`,
  ]
  const preparar = [`git add archivo.txt`, `# o prepara todos los cambios con:`, `git add .`]
  const confirmar = [`git commit -m "Descripcion breve del cambio"`]
  const historial = [`git log --oneline`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Flujo de trabajo basico en Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El flujo de trabajo basico de Git consiste en modificar archivos,
          preparar esos cambios y registrarlos en un commit. Este ciclo se
          repite cada vez que avanzas en tu proyecto y es la base para
          mantener un historial claro de lo que hiciste y por que.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Las tres areas de Git.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git organiza tu trabajo en tres areas:
        </p>
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">Directorio de trabajo:</span> donde
            editas, creas y borras archivos.
          </li>
          <li>
            <span className="font-semibold">Area de preparacion (staging):</span>{" "}
            donde colocas los cambios que formaran parte del proximo commit.
          </li>
          <li>
            <span className="font-semibold">Repositorio:</span> donde Git guarda
            de forma permanente los commits con su historial.
          </li>
        </ul>
        <p className="max-w-prose text-muted-foreground">
          El recorrido es siempre el mismo: modificas un archivo, lo preparas
          con git add y lo confirmas con git commit.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        El ciclo basico paso a paso.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          1. Revisa el estado de tus archivos.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Antes de preparar nada, consulta que archivos cambiaron y en que
          estado se encuentran.
        </p>
        <div className="p-4">
          <TerminalText lines={estados} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          2. Prepara los cambios.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Agrega al area de preparacion los archivos que quieres incluir en el
          siguiente commit.
        </p>
        <div className="p-4">
          <TerminalText lines={preparar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          3. Confirma los cambios.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Crea un commit con un mensaje que describa el cambio. Ese mensaje te
          ayudara a entender el historial mas adelante.
        </p>
        <div className="p-4">
          <TerminalText lines={confirmar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          4. Consulta el historial.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Verifica que tu commit quedo registrado revisando el historial.
        </p>
        <div className="p-4">
          <TerminalText lines={historial} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/flujo">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
