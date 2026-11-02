import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Rebase() {
  const rebase = [`git switch feature`, `git rebase main`]
  const interactivo = [`git rebase -i HEAD~3`]
  const continuar = [`git rebase --continue`]
  const abortar = [`git rebase --abort`]
  const saltar = [`git rebase --skip`]
  const grafico = [`git log --oneline --graph --all`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Rebase: reescribir la base.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git rebase toma los commits de tu rama y los vuelve a aplicar sobre
          otra base. El resultado es un historial lineal, como si hubieras
          empezado a trabajar despues de los ultimos cambios de la rama destino.
        </p>
        <p className="max-w-prose text-muted-foreground">
          A diferencia de merge, rebase no crea un commit de fusion: reescribe
          los commits, por lo que cambian sus hashes.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Rebase basico.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Te ubicas en la rama que quieres actualizar y la rebaseas sobre main.
        </p>
        <div className="p-4">
          <TerminalText lines={rebase} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Rebase interactivo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Con -i puedes reordenar, combinar (squash), editar o eliminar los
          ultimos commits antes de aplicarlos.
        </p>
        <div className="p-4">
          <TerminalText lines={interactivo} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Resolver una pausa del rebase.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Si hay conflictos, Git pausa el rebase. Resuelvelos, prepara los
          archivos y continua. Tambien puedes abortar o saltar el commit
          conflictivo.
        </p>
        <div className="p-4">
          <TerminalText lines={continuar} />
        </div>
        <div className="p-4">
          <TerminalText lines={abortar} />
        </div>
        <div className="p-4">
          <TerminalText lines={saltar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Precaución con ramas compartidas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Como rebase reescribe el historial, evitalo en ramas que otras personas
          ya usan. Una buena regla es rebasear solo tu trabajo local y usar merge
          para integrar en ramas compartidas.
        </p>
        <div className="p-4">
          <TerminalText lines={grafico} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/ramas-rebase">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
