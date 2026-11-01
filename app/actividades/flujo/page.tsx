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
      "Archivo creado y modificado en tu directorio de trabajo.\nAhora forma parte de los cambios pendientes.",
  },
  {
    command: "git status",
    output:
      "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tREADME.md\n\nnothing added to commit but untracked files present",
  },
  {
    command: "git add ",
    match: "prefix",
    output:
      "Cambios movidos al area de preparacion (staging).\nLos archivos quedan listos para el siguiente commit.",
  },
  {
    command: "git commit -m ",
    match: "prefix",
    output:
      "[main (root-commit) a1b2c3d] mi primer commit\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md\nCambios confirmados en el repositorio.",
  },
  {
    command: "git log ",
    match: "prefix",
    output:
      "a1b2c3d (HEAD -> main) mi primer commit\n\nEl historial muestra tu commit registrado correctamente.",
  },
]

export default function ActividadFlujo() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal recorre el flujo de trabajo basico: crea un
          repositorio, modifica un archivo, revisa el estado, prepara el cambio,
          confirma el commit y consulta el historial.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos del flujo de trabajo basico. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Completaste el ciclo: modificar, preparar y confirmar."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
