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
    command: 'git commit -m "primer commit"',
    output:
      "[main (root-commit) a1b2c3d] primer commit\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md",
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
      "[main b2c3d4e] segundo commit\n 1 file changed, 1 insertion(+)\nAhora hay dos commits en el historial.",
  },
  {
    command: "git log --oneline",
    output: "b2c3d4e (HEAD -> main) segundo commit\na1b2c3d primer commit",
  },
  {
    command: "git reset --soft HEAD~1",
    output:
      "El puntero de main volvio al primer commit.\nLos cambios del segundo commit quedaron preparados (staged).",
  },
  {
    command: "git status",
    output:
      "On branch main\nChanges to be committed:\n\tmodified:   README.md\n\nEl commit desaparecio del historial pero los cambios siguen en staging.",
  },
  {
    command: "git reset --hard HEAD",
    output:
      "HEAD is now at a1b2c3d primer commit\nLos cambios preparados se descartaron. El directorio de trabajo quedo limpio.",
  },
  {
    command: "git log -1 --oneline",
    output: "a1b2c3d (HEAD -> main) primer commit",
  },
]

export default function ActividadDeshacerReset() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea dos commits, elimina el ultimo con un
          reset suave, revisa el estado y luego descarta los cambios con reset
          --hard.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para deshacer commits con git reset. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Usaste reset --soft y reset --hard correctamente."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
