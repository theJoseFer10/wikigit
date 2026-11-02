import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitAdd() {
  const unArchivo = [`git add README.md`]
  const todo = [`git add .`]
  const carpeta = [`git add src/`]
  const verificar = [`git status`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git add: preparar cambios.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          El comando git add mueve los cambios desde el directorio de trabajo al
          area de preparacion (staging area). Los archivos que agregas quedan
          listos para incluirse en el proximo commit.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Preparar un cambio no lo guarda en el historial: solo lo marca para el
          siguiente commit. Si modificas el archivo despues de hacer git add,
          deberas agregarlo de nuevo.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Formas de usar git add.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Preparar un solo archivo.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Indica la ruta del archivo que quieres preparar.
        </p>
        <div className="p-4">
          <TerminalText lines={unArchivo} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Preparar todos los cambios.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          El punto representa el directorio actual e incluye todos los archivos
          nuevos, modificados y eliminados.
        </p>
        <div className="p-4">
          <TerminalText lines={todo} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Preparar una carpeta completa.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Tambien puedes preparar todos los cambios dentro de un directorio.
        </p>
        <div className="p-4">
          <TerminalText lines={carpeta} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Verificar que se preparo.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Despues de agregar, git status muestra los archivos en la seccion
          &quot;Changes to be committed&quot;.
        </p>
        <div className="p-4">
          <TerminalText lines={verificar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/add">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
