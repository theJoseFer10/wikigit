import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio Git creado correctamente.",
  },
  {
    command: "echo ",
    match: "prefix",
    output:
      "Archivo README.md creado con tu primer contenido.\nVerifícalo con: cat README.md",
  },
  {
    command: "git add ",
    match: "prefix",
    output:
      "Cambios añadidos al área de preparación (staging area).\nRevisa el estado con: git status",
  },
  {
    command: "git commit -m ",
    match: "prefix",
    output:
      "[main (root-commit) a1b2c3d] mi primer commit\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md\n¡Tu primer commit fue creado correctamente!",
  },
]

export default function ActividadRepositorio() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal ejecuta los comandos para crear un repositorio
          de Git, realizar un cambio con echo y guardarlo con tu primer commit.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para crear un repositorio, hacer un cambio y tu primer commit. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Creaste tu repositorio, hiciste un cambio y tu primer commit."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
