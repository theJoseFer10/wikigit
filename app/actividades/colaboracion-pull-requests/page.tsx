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
    command: 'echo "nueva funcion" > feature.txt',
    output: "Archivo feature.txt creado con el cambio propuesto.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "agrega nueva funcion"',
    output:
      "[main (root-commit) a1b2c3d] agrega nueva funcion\n 1 file changed, 1 insertion(+)\ncreate mode 100644 feature.txt",
  },
  {
    command: "git switch -c feature/nueva-funcion",
    output:
      "Switched to a new branch 'feature/nueva-funcion'\nRama de trabajo creada para el pull request.",
  },
  {
    command: "git push -u origin feature/nueva-funcion",
    output:
      "To https://github.com/usuario/proyecto.git\n * [new branch]      feature/nueva-funcion -> feature/nueva-funcion\nBranch 'feature/nueva-funcion' set up to track 'origin/feature/nueva-funcion'.\nYa puedes abrir el pull request en GitHub.",
  },
]

export default function ActividadColaboracionPullRequests() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal prepara los cambios de una funcionalidad, crea
          una rama descriptiva y subela al remoto para abrir un pull request.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para preparar y publicar una rama de pull request. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Tu rama esta publicada y lista para el pull request."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
