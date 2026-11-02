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
    command: "git switch -c feature",
    output:
      "Switched to a new branch 'feature'\nRama creada y activada en un solo paso.",
  },
  {
    command: 'echo "nueva funcion" > feature.txt',
    output: "Archivo feature.txt creado en la rama feature.",
  },
  {
    command: "git add feature.txt",
    output: "feature.txt agregado al area de preparacion.",
  },
  {
    command: 'git commit -m "agrega feature"',
    output:
      "[feature b2c3d4e] agrega feature\n 1 file changed, 1 insertion(+)\ncreate mode 100644 feature.txt",
  },
  {
    command: "git switch main",
    output:
      "Switched to branch 'main'\nVolviste a la rama principal para integrar los cambios.",
  },
  {
    command: "git merge feature",
    output:
      "Updating a1b2c3d..b2c3d4e\nFast-forward\n feature.txt | 1 +\n 1 file changed, 1 insertion(+)\ncreate mode 100644 feature.txt\nLa rama feature se fusiono en main.",
  },
]

export default function ActividadRamasMerge() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea una rama, agrega un cambio, confirma el
          commit, vuelve a main y fusiona la rama con git merge.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para fusionar una rama con merge. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Fusionaste tu rama feature en main."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
