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
    command: 'echo "segunda linea" >> README.md',
    output: "README.md modificado con una segunda linea.",
  },
  {
    command: "git add README.md",
    output: "README.md agregado al area de preparacion.",
  },
  {
    command: 'git commit -m "segundo commit"',
    output:
      "[main b2c3d4e] segundo commit\n 1 file changed, 1 insertion(+)\nAhora hay dos commits.",
  },
  {
    command: "git reset --hard HEAD~1",
    output:
      "HEAD is now at a1b2c3d commit inicial\nEl segundo commit desaparecio del historial. Parece perdido, pero el reflog lo recuerda.",
  },
  {
    command: "git reflog",
    output:
      "a1b2c3d (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1\nb2c3d4e HEAD@{1}: commit: segundo commit\na1b2c3d HEAD@{2}: commit (initial): commit inicial",
  },
  {
    command: "git reset --hard HEAD@{1}",
    output:
      "HEAD is now at b2c3d4e segundo commit\nRecuperaste el commit que parecia perdido.",
  },
  {
    command: "git log --oneline",
    output:
      "b2c3d4e (HEAD -> main) segundo commit\na1b2c3d commit inicial\n\nEl historial volvio a incluir tu segundo commit.",
  },
]

export default function ActividadDeshacerReflog() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal borra un commit con reset --hard, revisa el
          reflog y recuperalo volviendo al estado anterior.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para recuperar un commit con git reflog. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Recuperaste un commit perdido con el reflog."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
