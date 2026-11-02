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
    command: "git branch nueva-rama",
    output:
      "Rama nueva-rama creada apuntando al commit actual.\nSigues situado en main.",
  },
  {
    command: "git switch nueva-rama",
    output:
      "Switched to branch 'nueva-rama'\nHEAD ahora apunta a nueva-rama.",
  },
  {
    command: "git branch",
    output:
      "* nueva-rama\n  main\n\nEl asterisco marca tu nueva rama activa.",
  },
]

export default function ActividadRamasCambiar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio, crea una rama nueva,
          cambiate a ella y verifica en que rama estas trabajando.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para crear y cambiar de rama. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Creaste y cambiaste de rama correctamente."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
