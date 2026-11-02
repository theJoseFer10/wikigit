import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Gitignore() {
  const crear = [
    `echo "node_modules/" > .gitignore`,
    `echo ".env" >> .gitignore`,
    `echo "*.log" >> .gitignore`,
  ]
  const ejemplo = [
    `# Dependencias`,
    `node_modules/`,
    `# Variables de entorno`,
    `.env`,
    `# Archivos generados`,
    `dist/`,
    `*.log`,
  ]
  const excepcion = [`*.log`, `!importante.log`]
  const verificar = [`git status`]
  const yaRastreado = [`git rm --cached archivo.txt`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        El archivo .gitignore.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El archivo .gitignore indica a Git que archivos y carpetas debe ignorar.
          Se usa para evitar subir al repositorio cosas que no aportan al codigo
          fuente, como dependencias, archivos generados o secretos.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Debe ubicarse en la raiz del repositorio y sus reglas aplican a partir
          de ese directorio.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Crear un .gitignore.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes crearlo desde la terminal agregando una regla por linea.
        </p>
        <div className="p-4">
          <TerminalText lines={crear} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Patrones comunes.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={ejemplo} />
        </div>
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>
            <span className="font-semibold">carpeta/</span> ignora todo el
            contenido de una carpeta.
          </li>
          <li>
            <span className="font-semibold">*.log</span> ignora todos los
            archivos con esa extension.
          </li>
          <li>
            <span className="font-semibold">.env</span> ignora un archivo
            puntual, ideal para secretos.
          </li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Excepciones.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El signo de exclamacion niega una regla anterior. En este ejemplo se
          ignoran todos los .log menos importante.log.
        </p>
        <div className="p-4">
          <TerminalText lines={excepcion} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Verificar y corregir.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git status deja de mostrar los archivos ignorados. Ten en cuenta que
          .gitignore solo afecta a archivos que Git aun no rastrea.
        </p>
        <div className="p-4">
          <TerminalText lines={verificar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Si un archivo ya estaba siendo rastreado, debes quitarlo del indice con
          git rm --cached para que empiece a ignorarse.
        </p>
        <div className="p-4">
          <TerminalText lines={yaRastreado} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/gitignore">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
