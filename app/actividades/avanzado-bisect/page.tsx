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
    command: 'echo "version estable" > app.txt',
    output: "app.txt creado con una version que funciona.",
  },
  {
    command: "git add .",
    output: "Cambios agregados al area de preparacion.",
  },
  {
    command: 'git commit -m "version estable"',
    output:
      "[main (root-commit) a1b2c3d] version estable\n 1 file changed, 1 insertion(+)\ncreate mode 100644 app.txt",
  },
  {
    command: 'echo "cambio sospechoso" >> app.txt',
    output: "app.txt modificado con un cambio que podria introducir un bug.",
  },
  {
    command: "git add app.txt",
    output: "app.txt agregado al area de preparacion.",
  },
  {
    command: 'git commit -m "cambio sospechoso"',
    output:
      "[main b2c3d4e] cambio sospechoso\n 1 file changed, 1 insertion(+)\nAhora main podria estar rota.",
  },
  {
    command: "git bisect start",
    output:
      "Iniciando la busqueda binaria.\nMarca un commit malo y uno bueno para comenzar.",
  },
  {
    command: "git bisect bad",
    output:
      "El commit actual (b2c3d4e) esta marcado como malo.",
  },
  {
    command: "git bisect good HEAD~1",
    output:
      "El commit a1b2c3d esta marcado como bueno.\nBisect se movio al punto medio para que lo pruebes.",
  },
  {
    command: "git bisect reset",
    output:
      "Volviendo a la rama original main.\nLa busqueda termino y puedes revisar el resultado de bisect.",
  },
]

export default function ActividadAvanzadoBisect() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal usa git bisect para iniciar una busqueda entre
          un commit bueno y uno malo, y luego vuelve a tu rama original.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para buscar un commit con git bisect. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Aprendiste a iniciar y cerrar una busqueda con git bisect."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
