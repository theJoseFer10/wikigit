import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Repositorio() {
  const comandos = [`git init`, `#Crear un primer commit (ejemplo)`, `echo "# Mi proyecto" > README.md`,`git add .`, `git commit -m "mi primer commit"`]


  return (
    <div className="felx flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Creacion de repositorios en Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-mutedtext-muted-foreground">
          Un repositorio Git (o repo) es un espacio de
          almacenamiento que contiene todos los archivos
          de un proyecto, junto con el historial completo
          de cambios que ha sufrido cada uno a lo largo
          del tiempo.
        </p>
      </section>
      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Caracteristicas principales.
      </h2>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground p-1">
          Control de versiones: Registra quién, cuándo
          y por qué se modificó cada línea de código,
          permitiendo volver a versiones anteriores
          si es necesario.
        </p>

        <p className="max-w-prose text-muted-foreground p-1">
          Carpeta oculta .git: Cuando se crea o inicializa
          un repositorio en una carpeta, Git genera un
          subdirectorio llamado .git donde almacena todos
          los metadatos y la base de datos del historial.
        </p>

        <p className="max-w-prose text-muted-foreground p-1">
          Ramas (branches): Permiten trabajar en nuevas
          funciones o corregir errores en paralelo sin
          alterar el código principal.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Creacion de repositorio de git y primer commit de ejemplo.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <TerminalText lines={comandos} />
      </section>

      <Button variant="secondary">
        <Link href="/actividades/repositorio">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
