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
    command: "git fetch origin pull/42/head:review-42",
    output:
      "From https://github.com/usuario/proyecto\n * [new ref]         refs/pull/42/head -> review-42\nLa rama del pull request se trajo como review-42.",
  },
  {
    command: "git switch review-42",
    output:
      "Switched to branch 'review-42'\nAhora puedes probar los cambios del pull request.",
  },
  {
    command: "git log --oneline main..review-42",
    output:
      "b2c3d4e mejora la validacion del formulario\nc3d4e5f agrega mensajes de error\n\nEstos son los commits que propone el pull request.",
  },
  {
    command: "git diff main...review-42",
    output:
      "diff --git a/formulario.js b/formulario.js\n+  if (!email) {\n+    mostrarError(\"El correo es obligatorio\")\n+  }",
  },
]

export default function ActividadColaboracionRevisiones() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal trae una rama de pull request, cambiate a ella
          y revisa sus commits y diferencias respecto a main.
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos para revisar un pull request localmente. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Revisaste los cambios de un pull request sin salir de la terminal."
          expectedCommands={expectedCommands}
        />
      </section>
    </div>
  )
}
