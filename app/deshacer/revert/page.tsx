import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitRevert() {
  const revertirHead = [`git revert HEAD`]
  const sinEditar = [`git revert HEAD --no-edit`]
  const revertirCommit = [`git revert a1b2c3d`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git revert: deshacer sin borrar historia.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git revert crea un commit nuevo que aplica el cambio inverso de otro
          commit. No elimina ni reescribe el historial, por lo que es la opcion
          segura cuando el commit ya fue publicado y otras personas lo tienen.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Revertir el ultimo commit.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git abre tu editor para que escribas el mensaje del commit de reversa.
        </p>
        <div className="p-4">
          <TerminalText lines={revertirHead} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Si no quieres editar el mensaje, usa --no-edit.
        </p>
        <div className="p-4">
          <TerminalText lines={sinEditar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Revertir un commit especifico.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes indicar el hash del commit que quieres deshacer.
        </p>
        <div className="p-4">
          <TerminalText lines={revertirCommit} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        revert frente a reset.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>reset reescribe el historial local; revert agrega un commit nuevo.</li>
          <li>revert es seguro en ramas compartidas; reset no lo es.</li>
          <li>Si hay conflictos, se resuelven igual que en un merge.</li>
        </ul>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/deshacer-revert">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
