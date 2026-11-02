import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Releases() {
  const listar = [`git tag`]
  const ligera = [`git tag v1.0.0`]
  const anotada = [`git tag -a v1.0.0 -m "Primera version estable"`]
  const ver = [`git show v1.0.0`]
  const subirUna = [`git push origin v1.0.0`]
  const subirTodas = [`git push origin --tags`]
  const borrar = [`git tag -d v1.0.0`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Etiquetas y releases.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Las etiquetas (tags) marcan commits importantes, como una version
          publicada. A diferencia de una rama, una etiqueta no se mueve: queda
          fija apuntando a un commit concreto.
        </p>
        <p className="max-w-prose text-muted-foreground">
          En GitHub, una release es una etiqueta con notas, binarios y
          documentacion asociada.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Tipos de etiquetas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La etiqueta ligera es solo un puntero al commit. La anotada guarda
          autor, fecha y mensaje, y es la recomendada para releases.
        </p>
        <div className="p-4">
          <TerminalText lines={ligera} />
        </div>
        <div className="p-4">
          <TerminalText lines={anotada} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Consultar etiquetas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={listar} />
        </div>
        <div className="p-4">
          <TerminalText lines={ver} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Publicar etiquetas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git push no envia etiquetas por defecto. Debes subirlas de forma
          explicita.
        </p>
        <div className="p-4">
          <TerminalText lines={subirUna} />
        </div>
        <div className="p-4">
          <TerminalText lines={subirTodas} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Eliminar una etiqueta.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <div className="p-4">
          <TerminalText lines={borrar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/colaboracion-releases">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
