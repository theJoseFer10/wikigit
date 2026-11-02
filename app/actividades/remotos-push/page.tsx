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
    command: "git push -u origin main",
    output:
      "Enumerating objects: 3, done.\nWriting objects: 100% (3/3), done.\nTo https://github.com/usuario/proyecto.git\n * [new branch]      main -> main\nBranch 'main' set up to track 'origin/main'.\nTu rama local ahora sigue a la remota.",
  },
  {
    command: "git push",
    output:
      "Everything up-to-date\nGit recuerda el destino gracias a la configuracion -u.",
  },
]

export default function ActividadRemotosPush() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un commit, configura el remoto, sube tu
          rama main con seguimiento y verifica que los pushes posteriores sean
          directos.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para subir tus cambios con git push. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Tu rama main esta publicada en el remoto."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
