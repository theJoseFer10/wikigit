import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitRemote() {
  const listar = [`git remote -v`]
  const agregar = [
    `git remote add origin https://github.com/usuario/proyecto.git`,
  ]
  const detalle = [`git remote show origin`]
  const renombrar = [`git remote rename origin upstream`]
  const cambiarUrl = [
    `git remote set-url origin https://github.com/usuario/nuevo-repo.git`,
  ]
  const eliminar = [`git remote remove origin`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git remote: repositorios remotos.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Un repositorio remoto es una copia de tu proyecto alojada en un
          servidor, como GitHub, GitLab o Bitbucket. Git guarda una lista de
          remotos con un nombre corto y una URL para poder sincronizar cambios.
        </p>
        <p className="max-w-prose text-muted-foreground">
          El remoto principal suele llamarse origin. No es un nombre obligatorio,
          pero es la convencion mas usada.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Ver los remotos configurados.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera -v muestra el nombre y la URL de cada remoto, tanto para
          lectura (fetch) como para escritura (push).
        </p>
        <div className="p-4">
          <TerminalText lines={listar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Agregar un remoto.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Asocia tu repositorio local con uno remoto indicando un nombre y la URL.
        </p>
        <div className="p-4">
          <TerminalText lines={agregar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Para ver mas detalles, como las ramas rastreadas, usa git remote show.
        </p>
        <div className="p-4">
          <TerminalText lines={detalle} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Administrar remotos.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes renombrar un remoto o cambiar su URL sin perder la configuracion
          de seguimiento.
        </p>
        <div className="p-4">
          <TerminalText lines={renombrar} />
        </div>
        <div className="p-4">
          <TerminalText lines={cambiarUrl} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Si ya no necesitas un remoto, puedes eliminarlo.
        </p>
        <div className="p-4">
          <TerminalText lines={eliminar} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/remotos-remote">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
