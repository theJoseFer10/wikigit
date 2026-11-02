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
    command: "ls .git/hooks",
    output:
      "applypatch-msg.sample\ncommit-msg.sample\npre-commit.sample\npre-push.sample\npre-rebase.sample\n\nLos archivos .sample son ejemplos que puedes activar.",
  },
  {
    command: 'echo "#!/bin/sh" > .git/hooks/pre-commit',
    output:
      "Archivo .git/hooks/pre-commit creado.\nEste script se ejecutara antes de cada commit.",
  },
  {
    command: "chmod +x .git/hooks/pre-commit",
    output:
      "Permisos de ejecucion otorgados al hook.\nGit solo ejecuta hooks que son ejecutables.",
  },
  {
    command: 'echo "contenido" > README.md',
    output: "README.md creado para probar el hook.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "prueba con hook"',
    output:
      "El hook pre-commit se ejecuto antes de confirmar.\n[main (root-commit) a1b2c3d] prueba con hook\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md",
  },
]

export default function ActividadAvanzadoHooks() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal crea un hook pre-commit, dale permisos de
          ejecucion y realiza un commit para ponerlo en funcionamiento.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para crear y probar un hook de Git. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Creaste un hook pre-commit y lo viste ejecutarse."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
