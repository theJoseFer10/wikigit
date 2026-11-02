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
    command: "git remote add origin https://github.com/usuario/proyecto.git",
    output: "Remoto origin agregado correctamente.",
  },
  {
    command: "git fetch origin",
    output:
      "remote: Enumerating objects: 5, done.\nremote: Counting objects: 100% (5/5), done.\nFrom https://github.com/usuario/proyecto\n * [new branch]      main       -> origin/main\nLos cambios se descargaron pero tu rama local no se modifico.",
  },
  {
    command: "git pull origin main",
    output:
      "From https://github.com/usuario/proyecto\n * branch            main       -> FETCH_HEAD\nUpdating a1b2c3d..b2c3d4e\nFast-forward\n README.md | 1 +\n 1 file changed, 1 insertion(+)\nLos cambios remotos se integraron en tu rama main.",
  },
  {
    command: "git log --oneline --all",
    output:
      "b2c3d4e (HEAD -> main, origin/main) actualiza README\na1b2c3d commit inicial\n\nTu rama local y la remota estan sincronizadas.",
  },
]

export default function ActividadRemotosFetchPull() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal configura un remoto, descarga los cambios con
          git fetch, integra los con git pull y revisa el historial.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para descargar e integrar cambios remotos. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Descargaste e integraste los cambios del remoto."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
