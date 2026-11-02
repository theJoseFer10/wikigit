import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Submodulos() {
  const agregar = [
    `git submodule add https://github.com/usuario/libreria.git libs/libreria`,
  ]
  const clonar = [`git clone --recurse-submodules https://github.com/usuario/proyecto.git`]
  const inicializar = [`git submodule update --init --recursive`]
  const actualizar = [`git submodule update --remote`]
  const estado = [`git submodule status`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Submodulos.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Un submodulo es un repositorio Git dentro de otro repositorio Git. Se
          usa para incluir una dependencia o proyecto externo manteniendo su
          propio historial independiente.
        </p>
        <p className="max-w-prose text-muted-foreground">
          El repositorio principal no guarda los archivos del submodulo: guarda un
          puntero al commit exacto que debe usarse.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Agregar un submodulo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Indica la URL del repositorio y la carpeta donde quieres ubicarlo. Git
          crea el archivo .gitmodules y prepara el cambio para confirmarlo.
        </p>
        <div className="p-4">
          <TerminalText lines={agregar} />
        </div>
        <div className="p-4">
          <TerminalText lines={estado} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Clonar un proyecto con submodulos.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La opcion --recurse-submodules descarga tambien el contenido de cada
          submodulo en el commit registrado.
        </p>
        <div className="p-4">
          <TerminalText lines={clonar} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Si clonaste sin esa opcion, inicializa y actualiza despues.
        </p>
        <div className="p-4">
          <TerminalText lines={inicializar} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actualizar un submodulo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Para traer la ultima version de la rama seguida por el submodulo.
        </p>
        <div className="p-4">
          <TerminalText lines={actualizar} />
        </div>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Ten en cuenta que los submodulos agregan complejidad: cada integrante
          debe inicializarlos y actualizarlos. Para dependencias de paquetes suele
          ser mejor usar el gestor del lenguaje; los submodulos brillan cuando
          necesitas el codigo fuente de otro repositorio.
        </p>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/avanzado-submodulos">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
