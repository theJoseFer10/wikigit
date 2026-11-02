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
    command: "git switch -c experimento",
    output:
      "Switched to a new branch 'experimento'\nRama de experimento creada.",
  },
  {
    command: 'echo "funcionalidad aislada" > feature.txt',
    output: "feature.txt creado con la funcionalidad que quieres traer.",
  },
  {
    command: "git add feature.txt",
    output: "feature.txt agregado al area de preparacion.",
  },
  {
    command: 'git commit -m "agrega funcionalidad aislada"',
    output:
      "[experimento b2c3d4e] agrega funcionalidad aislada\n 1 file changed, 1 insertion(+)\ncreate mode 100644 feature.txt",
  },
  {
    command: "git log --oneline",
    output: "b2c3d4e (HEAD -> experimento) agrega funcionalidad aislada\na1b2c3d commit inicial",
  },
  {
    command: "git switch main",
    output: "Switched to branch 'main'",
  },
  {
    command: "git cherry-pick experimento",
    output:
      "[main c3d4e5f] agrega funcionalidad aislada\n Date: Sun Nov 1 12:00:00 2026\n 1 file changed, 1 insertion(+)\ncreate mode 100644 feature.txt\nEl cambio se aplico en main como un commit nuevo.",
  },
  {
    command: "git log -2 --oneline",
    output:
      "c3d4e5f (HEAD -> main) agrega funcionalidad aislada\na1b2c3d commit inicial\n\nSolo trajiste el commit elegido, no toda la rama.",
  },
]

export default function ActividadAvanzadoCherryPick() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un commit en una rama experimental y trae
          solo ese cambio a main con git cherry-pick.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para aplicar un commit con cherry-pick. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Trajiste un commit especifico a tu rama main."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
