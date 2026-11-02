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
    command: 'echo "version 1.0.0" > README.md',
    output: "README.md preparado para la version 1.0.0.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "prepara version 1.0.0"',
    output:
      "[main (root-commit) a1b2c3d] prepara version 1.0.0\n 1 file changed, 1 insertion(+)\ncreate mode 100644 README.md",
  },
  {
    command: 'git tag -a v1.0.0 -m "Primera version estable"',
    output:
      "Etiqueta anotada v1.0.0 creada sobre el commit actual.\nIncluye autor, fecha y mensaje.",
  },
  {
    command: "git tag",
    output: "v1.0.0",
  },
  {
    command: "git show v1.0.0",
    output:
      "tag v1.0.0\nTagger: guest <guest@nextjs.dev>\nDate:   Sun Nov 1 12:00:00 2026\n\nPrimera version estable\n\ncommit a1b2c3d...",
  },
  {
    command: "git push origin v1.0.0",
    output:
      "To https://github.com/usuario/proyecto.git\n * [new tag]         v1.0.0 -> v1.0.0\nLa etiqueta ya esta publicada y puedes crear una release en GitHub.",
  },
]

export default function ActividadColaboracionReleases() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal prepara un commit de version, crea una
          etiqueta anotada, verificala y publicala en el remoto.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para crear y publicar una etiqueta. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Creaste y publicaste la etiqueta de tu release."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
