import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio creado. La rama inicial es main.",
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
      "[main (root-commit) a1b2c3d] commit inicial\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md\nAhora main apunta al primer commit.",
  },
  {
    command: "git branch",
    output:
      "* main\n\nEl asterisco indica que estas en main. Aun no hay otras ramas.",
  },
  {
    command: "git log --oneline --graph --all",
    output:
      "* a1b2c3d (HEAD -> main) commit inicial\n\nEste es el grafo de tu historia por ahora.",
  },
]

export default function ActividadRamasIntroduccion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio con un commit inicial y
          explora tus ramas e historial para entender como funciona main y HEAD.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para explorar ramas. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Ya sabes identificar tu rama actual y visualizar el historial."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
