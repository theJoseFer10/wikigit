import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LosTresEstados() {
  const verEstado = [`git status`]
  const preparar = [`git add README.md`]
  const confirmar = [`git commit -m "Agrega README inicial"`]
  const modificar = [`echo "Nueva linea" >> README.md`, `git status`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Los tres estados de Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git clasifica cada archivo de tu proyecto segun el estado en el que se
          encuentra. Entender estos tres estados es clave para saber que comandos
          usar y en que momento.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Los tres estados.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">Modificado (working directory):</span>{" "}
            el archivo cambio pero aun no se ha preparado para el commit.
          </li>
          <li>
            <span className="font-semibold">Preparado (staging area):</span> el
            cambio fue marcado con git add y formara parte del proximo commit.
          </li>
          <li>
            <span className="font-semibold">Confirmado (repositorio):</span> el
            cambio quedo guardado permanentemente en el historial con git commit.
          </li>
        </ul>
        <p className="max-w-prose text-muted-foreground">
          Ademas existe un cuarto estado inicial: los archivos{" "}
          <span className="font-semibold">sin seguimiento (untracked)</span>, que
          Git todavia no conoce porque nunca fueron agregados.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Como se mueve un archivo entre estados.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Consultar el estado actual.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          git status te muestra en que estado esta cada archivo.
        </p>
        <div className="p-4">
          <TerminalText lines={verEstado} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Pasar de modificado a preparado.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Con git add llevas los cambios del directorio de trabajo al area de
          preparacion.
        </p>
        <div className="p-4">
          <TerminalText lines={preparar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Pasar de preparado a confirmado.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Con git commit guardas los cambios preparados en el repositorio.
        </p>
        <div className="p-4">
          <TerminalText lines={confirmar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Volver a modificar.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Si editas un archivo ya confirmado, vuelve al estado modificado y el
          ciclo comienza otra vez.
        </p>
        <div className="p-4">
          <TerminalText lines={modificar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/estados">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
