import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IntroduccionRamas() {
  const listar = [`git branch`]
  const todas = [`git branch -a`]
  const grafico = [`git log --oneline --graph --all`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Introduccion a las ramas.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Una rama (branch) es un puntero movil a un commit. Gracias a las ramas
          puedes trabajar en una nueva funcionalidad o corregir un error sin
          tocar el codigo principal, y luego integrar tu trabajo cuando este
          listo.
        </p>
        <p className="max-w-prose text-muted-foreground">
          Cada vez que haces un commit, la rama actual avanza para apuntar al
          nuevo commit. La rama inicial suele llamarse main (o master en
          repositorios antiguos).
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        HEAD: donde estas parado.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          HEAD es un puntero especial que indica la rama activa. Cuando cambias
          de rama, HEAD se mueve con ella y tu directorio de trabajo se actualiza
          para reflejar el estado de esa rama.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Por que usar ramas.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <ul className="flex max-w-prose flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li>Aislan el trabajo en curso sin afectar la rama principal.</li>
          <li>Permiten experimentar y descartar cambios con facilidad.</li>
          <li>Facilitan la colaboracion y la revision de cambios.</li>
          <li>Mantienen un historial ordenado por funcionalidad.</li>
        </ul>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Comandos para explorar ramas.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Listar ramas locales.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          El asterisco marca la rama en la que estas actualmente.
        </p>
        <div className="p-4">
          <TerminalText lines={listar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Listar ramas locales y remotas.
        </h3>
        <div className="p-4">
          <TerminalText lines={todas} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Ver la historia como un grafo.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          Este comando dibuja las ramas y sus puntos de union.
        </p>
        <div className="p-4">
          <TerminalText lines={grafico} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/ramas-introduccion">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
