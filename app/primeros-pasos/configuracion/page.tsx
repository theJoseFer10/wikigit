import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Configuracion() {
  const lineasGit1 = [`git config --global user.name "Tu Nombre"`];
  const lineasGit2 = [`git config --global user.email "Tu Correo Electronico"`];
  const lineasGit3 = [`git config --global core.editor "code --wait"`];
  const lineasGit4 = [`#Windows.`, `git config --global core.autocrlf true`];
  const lineasGit5 = [`#Mac y Linux`, `git config --global core.autocrlf input`];
  const lineasGit6 = [`git config --list`];

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Configuracion inicial de Git.
      </h1>

      <section className="felx flex-1 flex-col p-3">
        <p className="max-w-prose text-mutedtext-muted-foreground">
          La configuración inicial de Git consiste en definir tu
          identidad (nombre y correo electrónico) mediante la terminal
          para que quede registrada en cada cambio o commit que
          realices.
        </p>
      </section>
      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Comandos basicos de la configuracion de Git.
      </h2>
      <section className="felx flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Los siguientes comandos son para configurar tu nombre de usuario y correo electronico en git
        </p>
        <div className="p-4">
          <TerminalText lines = { lineasGit1}/>
        </div>

        <div className="p-4">
          <TerminalText lines = { lineasGit2}/>
        </div>
        <p className="max-w-prose text-muted-foreground">
          (La bandera --global aplica estos datos a todos los repositorios de tu equipo).
        </p>

      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Configuraciones opcionales recomendadas
      </h2>
      <section>
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Definir un editor de de texto, por ejemplo visual studio code.
        </h3>
        <div className="p-4">
          <TerminalText lines={ lineasGit3 }/>
        </div>

        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Configurar el manejo de saltos de línea (según tu sistema operativo):
        </h3>
        <div className="p-4">
          <TerminalText lines={ lineasGit4 }/>
        </div>
        <div className="p-4">
          <TerminalText lines={ lineasGit5 }/>
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Verificar configuracion.
      </h2>
      <section>
        <div className="p-4">
          <TerminalText lines={ lineasGit6 }/>
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/configuracion">
          Iniciar Actividad.
        </Link>
      </Button>
    </div>
  )
}
