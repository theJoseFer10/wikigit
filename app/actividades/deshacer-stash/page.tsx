import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio creado correctamente.",
  },
  {
    command: 'echo "contenido inicial" > README.md',
    output: "Archivo README.md creado en el directorio de trabajo.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "commit inicial"',
    output:
      "[main (root-commit) a1b2c3d] commit inicial\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md",
  },
  {
    command: 'echo "cambio temporal" >> README.md',
    output: "README.md modificado con trabajo en progreso.",
  },
  {
    command: "git stash",
    output:
      "Saved working directory and index state WIP on main: a1b2c3d commit inicial\nEl directorio de trabajo quedo limpio.",
  },
  {
    command: "git stash list",
    output: "stash@{0}: WIP on main: a1b2c3d commit inicial",
  },
  {
    command: "git stash pop",
    output:
      "On branch main\nChanges not staged for commit:\n\tmodified:   README.md\nDropped refs/stash@{0}\nTus cambios volvieron al directorio de trabajo.",
  },
  {
    command: "git status",
    output:
      "On branch main\nChanges not staged for commit:\n\tmodified:   README.md\n\nEl trabajo en progreso esta de vuelta.",
  },
]

export default function ActividadDeshacerStash() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal modifica un archivo, guarda el trabajo en
          progreso con git stash, revisa la pila y recupera los cambios con git
          stash pop.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para guardar y recuperar cambios con git stash. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Guardaste trabajo temporal y lo recuperaste."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
