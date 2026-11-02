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
    command: "git add ",
    match: "prefix",
    output:
      "Cambios agregados al area de preparacion.\nLos archivos quedan listos para el siguiente commit.",
  },
  {
    command: "git status",
    output:
      "On branch main\n\nNo commits yet\n\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n\tnew file:   README.md\n\nLos cambios estan preparados para el commit.",
  },
]

export default function ActividadAdd() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio, modifica un archivo,
          preparalo con git add y verifica el resultado con git status.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para preparar cambios con git add. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Tus cambios quedaron en el area de preparacion."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
