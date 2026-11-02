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
    command: 'echo "cambio feature" >> README.md',
    output: "README.md modificado en la rama feature.",
  },
  {
    command: 'git commit -am "trabajo en feature"',
    output:
      "[feature b2c3d4e] trabajo en feature\n 1 file changed, 1 insertion(+)\nCambio confirmado en feature.",
  },
  {
    command: "git switch main",
    output: "Switched to branch 'main'",
  },
  {
    command: 'echo "cambio main" >> README.md',
    output: "README.md modificado en main.",
  },
  {
    command: 'git commit -am "trabajo en main"',
    output:
      "[main c3d4e5f] trabajo en main\n 1 file changed, 1 insertion(+)\nAhora main avanzo y feature quedo desactualizada.",
  },
  {
    command: "git switch feature",
    output: "Switched to branch 'feature'",
  },
  {
    command: "git rebase main",
    output:
      "Successfully rebased and updated refs/heads/feature.\nTus commits de feature se reaplicaron sobre main y el historial quedo lineal.",
  },
]

export default function ActividadRamasRebase() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea una rama feature, avanza tambien main y
          luego rebasea feature sobre main para obtener un historial lineal.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para rebasear una rama sobre main. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Rebasaste feature sobre main con exito."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
