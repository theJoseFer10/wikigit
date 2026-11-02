import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio creado. Los archivos nuevos estaran sin seguimiento.",
  },
  {
    command: "echo ",
    match: "prefix",
    output:
      "Archivo creado en el directorio de trabajo.\nEstado: modificado / sin seguimiento.",
  },
  {
    command: "git add ",
    match: "prefix",
    output:
      "Archivo movido al area de preparacion.\nEstado: preparado (staged).",
  },
  {
    command: "git commit -m ",
    match: "prefix",
    output:
      "[main (root-commit) a1b2c3d] mi primer commit\n 1 file changed, 1 insertion(+)\nEstado: confirmado (committed).",
  },
]

export default function ActividadEstados() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal recorre los tres estados de Git: crea un
          repositorio, modifica un archivo, preparalo y confirmalo.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para mover un archivo entre los tres estados. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Recorriste los estados: modificado, preparado y confirmado."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
