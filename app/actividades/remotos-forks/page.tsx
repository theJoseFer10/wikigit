import TerminalEmulator, {
  type ExpectedCommand,
} from "@/components/terminal-emulator"

const expectedCommands: ExpectedCommand[] = [
  {
    command: "git clone https://github.com/usuario/proyecto.git",
    output:
      "Cloning into 'proyecto'...\nremote: Enumerating objects: 12, done.\nremote: Total 12 (delta 0), reused 0 (delta 0)\nUnpacking objects: 100% (12/12), done.\norigin configurado apuntando a tu fork.",
  },
  {
    command:
      "git remote add upstream https://github.com/original/proyecto.git",
    output:
      "Remoto upstream agregado.\nAhora puedes traer los cambios del proyecto original.",
  },
  {
    command: "git remote -v",
    output:
      "origin\thttps://github.com/usuario/proyecto.git (fetch)\norigin\thttps://github.com/usuario/proyecto.git (push)\nupstream\thttps://github.com/original/proyecto.git (fetch)\nupstream\thttps://github.com/original/proyecto.git (push)",
  },
  {
    command: "git fetch upstream",
    output:
      "From https://github.com/original/proyecto\n * [new branch]      main       -> upstream/main\nLos cambios del proyecto original se descargaron.",
  },
  {
    command: "git merge upstream/main",
    output:
      "Updating a1b2c3d..b2c3d4e\nFast-forward\n README.md | 1 +\n 1 file changed, 1 insertion(+)\nTu fork quedo sincronizado con el proyecto original.",
  },
  {
    command: "git push origin main",
    output:
      "To https://github.com/usuario/proyecto.git\n   a1b2c3d..b2c3d4e  main -> main\nTu fork actualizado ya esta publicado en GitHub.",
  },
]

export default function ActividadRemotosForks() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal clona tu fork, agrega el repositorio original
          como upstream, sincroniza los cambios y subelos a tu copia.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para sincronizar un fork. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Sincronizaste tu fork con el proyecto original."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
