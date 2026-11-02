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
    command: 'echo "cambio no deseado" >> README.md',
    output: "README.md modificado con un cambio que no quieres conservar.",
  },
  {
    command: "git add README.md",
    output: "El cambio no deseado quedo preparado por error.",
  },
  {
    command: "git status",
    output:
      "On branch main\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n\tmodified:   README.md",
  },
  {
    command: "git restore --staged README.md",
    output:
      "README.md quitado del area de preparacion.\nEl cambio sigue presente en el directorio de trabajo.",
  },
  {
    command: "git restore README.md",
    output:
      "README.md restaurado al estado del ultimo commit.\nEl cambio no deseado fue descartado.",
  },
  {
    command: "git diff",
    output:
      "(sin salida)\nNo hay diferencias: tu directorio de trabajo esta limpio.",
  },
]

export default function ActividadDeshacerRestore() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal prepara un cambio por error, quitalo del
          staging con git restore --staged y descarta el cambio del archivo con
          git restore.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para descartar cambios con git restore. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Quitaste el cambio del staging y restauraste el archivo."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
