import TerminalEmulator from "@/components/terminal-emulator"

export default function ActividadConfiguracion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Actividad.
      </h1>

      <section className="flex flex-1 flex-col gap-3 p-3">
        <p className="max-w-prose text-muted-foreground">
          En la siguiente terminal ejecuta los comandos para realizar una
          configuracion inicial de git (nombre de usuario y correo electronico).
        </p>

        <TerminalEmulator
          title="bash — actividad"
          welcomeMessage='Ejecuta los comandos de configuración inicial de git. Escribe "help" si necesitas ayuda.'
          completionMessage="¡Listo! Configuración inicial de git completada."
          expectedCommands={[
            { command: "git config --global user.name", match: "prefix" },
            { command: "git config --global user.email", match: "prefix" },
          ]}
        />
      </section>
    </div>
  )
}
