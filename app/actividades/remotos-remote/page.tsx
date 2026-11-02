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
    output:
      "Remoto origin agregado.\nTu repositorio local ya conoce la URL del remoto.",
  },
  {
    command: "git remote -v",
    output:
      "origin\thttps://github.com/usuario/proyecto.git (fetch)\norigin\thttps://github.com/usuario/proyecto.git (push)",
  },
]

export default function ActividadRemotosRemote() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un repositorio local con un commit,
          asocia un remoto llamado origin y verifica la configuracion.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para configurar un repositorio remoto. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Tu repositorio local ya tiene un remoto configurado."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
