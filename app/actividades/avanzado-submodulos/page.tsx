import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio principal creado correctamente.",
  },
  {
    command:
      "git submodule add https://github.com/usuario/libreria.git libs/libreria",
    output:
      "Cloning into 'libs/libreria'...\nremote: Enumerating objects: 20, done.\nremote: Total 20 (delta 0), reused 0 (delta 0)\nSubmodulo agregado en libs/libreria.\nSe creo el archivo .gitmodules con su configuracion.",
  },
  {
    command: 'git commit -m "agrega submodulo"',
    output:
      "[main (root-commit) a1b2c3d] agrega submodulo\n 2 files changed, 4 insertions(+)\n create mode 100644 .gitmodules\n create mode 160000 libs/libreria\nEl puntero al commit del submodulo quedo registrado.",
  },
  {
    command: "git submodule status",
    output:
      " a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0 libs/libreria (v1.2.0)\n\nEl submodulo esta en el commit registrado.",
  },
  {
    command: "git submodule update --init --recursive",
    output:
      "Submodule path 'libs/libreria': checked out 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0'\nEl contenido del submodulo esta inicializado y actualizado.",
  },
]

export default function ActividadAvanzadoSubmodulos() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal agrega un repositorio externo como submodulo,
          confirma el cambio, revisa su estado e inicializa su contenido.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para agregar y actualizar un submodulo. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Agregaste un submodulo y actualizaste su contenido."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
