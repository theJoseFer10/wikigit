import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const marcadores = [
  "<<<<<<< HEAD",
  "version main",
  "=======",
  "version feature",
  ">>>>>>> feature",
].join("\n")

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio creado correctamente.",
  },
  {
    command: 'echo "version main" > README.md',
    output: "README.md creado con la version de main.",
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
    command: 'echo "version feature" > README.md',
    output: "README.md modificado en la rama feature.",
  },
  {
    command: "git add README.md",
    output: "README.md agregado al area de preparacion en feature.",
  },
  {
    command: 'git commit -m "cambio en feature"',
    output:
      "[feature b2c3d4e] cambio en feature\n 1 file changed, 1 insertion(+), 1 deletion(-)",
  },
  {
    command: "git switch main",
    output: "Switched to branch 'main'",
  },
  {
    command: "git merge feature",
    output:
      `Auto-merging README.md\nCONFLICT (content): Merge conflict in README.md\nAutomatic merge failed; fix conflicts and then commit the result.\n\nMarcadores en README.md:\n${marcadores}`,
  },
  {
    command: "git add --all",
    output:
      "Archivos marcados como resueltos.\nYa puedes confirmar la fusion con git commit.",
  },
  {
    command: 'git commit -m "resuelve conflicto"',
    output:
      "[main d4e5f6a] resuelve conflicto\nConflicto resuelto y fusion completada.",
  },
]

export default function ActividadRamasConflictos() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal provoca un conflicto modificando la misma
          linea en dos ramas, resuelvelo con git add y confirma la fusion.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para provocar y resolver un conflicto. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Provocaste y resolviste un conflicto de fusion."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
