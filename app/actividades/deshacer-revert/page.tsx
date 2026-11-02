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
    command: 'echo "linea a revertir" >> README.md',
    output: "README.md modificado con un cambio que luego revertiras.",
  },
  {
    command: "git add README.md",
    output: "README.md agregado al area de preparacion.",
  },
  {
    command: 'git commit -m "agrega linea temporal"',
    output:
      "[main b2c3d4e] agrega linea temporal\n 1 file changed, 1 insertion(+)",
  },
  {
    command: "git log --oneline",
    output: "b2c3d4e (HEAD -> main) agrega linea temporal\na1b2c3d commit inicial",
  },
  {
    command: "git revert HEAD --no-edit",
    output:
      "[main c3d4e5f] Revert \"agrega linea temporal\"\n 1 file changed, 1 deletion(-)\nSe creo un commit nuevo que deshace el cambio anterior.",
  },
  {
    command: "git log -2 --oneline",
    output:
      "c3d4e5f (HEAD -> main) Revert \"agrega linea temporal\"\nb2c3d4e agrega linea temporal\n\nEl commit original sigue en el historial y la reversa se agrego encima.",
  },
]

export default function ActividadDeshacerRevert() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un commit con un cambio, reviertelo con
          git revert y comprueba que el historial conserva ambos commits.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para revertir un commit. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Deshiciste un commit sin borrar el historial."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
