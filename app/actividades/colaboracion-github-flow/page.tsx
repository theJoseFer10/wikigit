import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git init",
    output:
      "Initialized empty Git repository in /home/guest/proyecto/.git/\nRepositorio local creado correctamente.",
  },
  {
    command: "git remote add origin https://github.com/usuario/proyecto.git",
    output: "Remoto origin configurado.",
  },
  {
    command: 'echo "mejora del buscador" > buscador.txt',
    output: "Archivo buscador.txt creado con la mejora.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "mejora el buscador"',
    output:
      "[main (root-commit) a1b2c3d] mejora el buscador\n 1 file changed, 1 insertion(+)\ncreate mode 100644 buscador.txt",
  },
  {
    command: "git switch -c feature/mejora-buscador",
    output:
      "Switched to a new branch 'feature/mejora-buscador'\nRama corta creada para el cambio.",
  },
  {
    command: "git push -u origin feature/mejora-buscador",
    output:
      "To https://github.com/usuario/proyecto.git\n * [new branch]      feature/mejora-buscador -> feature/mejora-buscador\nRama publicada para abrir el pull request.",
  },
  {
    command: "git switch main",
    output: "Switched to branch 'main'",
  },
  {
    command: "git merge feature/mejora-buscador",
    output:
      "Updating a1b2c3d..b2c3d4e\nFast-forward\n buscador.txt | 1 +\n 1 file changed, 1 insertion(+)\nEl cambio revisado se integro en main.",
  },
  {
    command: "git push origin main",
    output:
      "To https://github.com/usuario/proyecto.git\n   a1b2c3d..b2c3d4e  main -> main\nmain actualizada en el remoto y lista para desplegar.",
  },
]

export default function ActividadColaboracionGithubFlow() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal recorre GitHub Flow: crea una rama, publicala,
          integra el cambio en main y sube la rama principal.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos del flujo GitHub Flow. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Completaste un ciclo de GitHub Flow de principio a fin."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
