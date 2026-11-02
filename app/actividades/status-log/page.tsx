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
    command: "echo ",
    match: "prefix",
    output: "Archivo creado y modificado en tu directorio de trabajo.",
  },
  {
    command: "git status",
    output:
      "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tREADME.md\n\nnothing added to commit but untracked files present",
  },
  {
    command: "git add ",
    match: "prefix",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: "git commit -m ",
    match: "prefix",
    output:
      "[main (root-commit) a1b2c3d] mi primer commit\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md\nCommit creado correctamente.",
  },
  {
    command: "git log",
    output:
      "commit a1b2c3d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3\nAuthor: guest <guest@nextjs.dev>\nDate:   Sun Nov 1 12:00:00 2026\n\n    mi primer commit\n\nEste es el historial de tu repositorio.",
  },
]

export default function ActividadStatusLog() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio, modifica un archivo,
          revisa su estado con git status, confirma el cambio y consulta el
          historial con git log.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para revisar el estado y el historial. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Aprendiste a leer el estado y el historial de tu repositorio."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
