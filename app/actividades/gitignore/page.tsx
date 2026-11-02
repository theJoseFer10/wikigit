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
    output:
      "Regla agregada al archivo .gitignore.\nGit ignorara los archivos que coincidan con el patron.",
  },
  {
    command: "git status",
    output:
      "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\t.gitignore\n\nLos archivos ignorados no aparecen en la lista.",
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
      "[main (root-commit) a1b2c3d] configura gitignore\n 1 file changed, 1 insertion(+)\ncreate mode 100644 .gitignore\nEl .gitignore quedo registrado en el repositorio.",
  },
]

export default function ActividadGitignore() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio, agrega una regla a
          .gitignore con echo, verifica con git status y confirma el archivo.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para crear y confirmar un .gitignore. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Configuraste tu .gitignore y lo guardaste en el repositorio."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
