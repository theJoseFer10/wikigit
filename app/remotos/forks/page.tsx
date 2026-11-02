import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Forks() {
  const clonar = [`git clone https://github.com/usuario/proyecto.git`]
  const upstream = [
    `git remote add upstream https://github.com/original/proyecto.git`,
  ]
  const remotos = [`git remote -v`]
  const sincronizar = [`git fetch upstream`, `git merge upstream/main`]
  const subir = [`git push origin main`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Trabajar con forks.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Un fork es una copia de un repositorio ajeno que queda bajo tu propia
          cuenta en plataformas como GitHub. Se usa para contribuir a proyectos
          en los que no tienes permisos de escritura directos.
        </p>
        <p className="max-w-prose text-muted-foreground">
          El flujo tipico es: haces fork, clonas tu copia, trabajas en una rama,
          subes los cambios a tu fork y abres un pull request hacia el proyecto
          original.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Clonar tu fork.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Clonar descarga el repositorio completo y configura origin apuntando a
          tu copia.
        </p>
        <div className="p-4">
          <TerminalText lines={clonar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Agregar el repositorio original como upstream.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Para mantenerte actualizado, agrega el proyecto original con el nombre
          upstream. Asi tienes dos remotos: tu fork y el repositorio base.
        </p>
        <div className="p-4">
          <TerminalText lines={upstream} />
        </div>
        <div className="p-4">
          <TerminalText lines={remotos} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Sincronizar con el original.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Trae los cambios de upstream y fusionalos en tu rama principal local.
        </p>
        <div className="p-4">
          <TerminalText lines={sincronizar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Subir cambios a tu fork.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Empuja los cambios a origin, tu fork. Desde alli puedes abrir el pull
          request hacia el repositorio original.
        </p>
        <div className="p-4">
          <TerminalText lines={subir} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/remotos-forks">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
