export default function introduccion() {
  return (
    <div className="felx flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Introduccion a Git y Github.
      </h1>
      <section className="felx flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Git es un sistema de control de versiones de código abierto para rastrear
          cambios en proyectos de software de forma local, y GitHub
          es una plataforma para alojar repositorios remotos que
          utiliza Git para colaborar y administrar los cambios.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Guia de instalacion de Git.
      </h2>
      <section className="felx flex-1 flex-col p-3">
        <h3 className="font-semibold shimmer-color-mist-600 tracking-tight">
          Windowos.
        </h3>
        <p className="max-w-prose text-muted-foreground">
          En Windows se utiliza Git Bash, un emulador de terminal para ejecutar comandos de Git.
        </p>
        <ul className="flex flex-col space-y-2 p-4 text-gray-700 dark:text-gray-200">
          <li className="cursor-pointer">Descárgalo desde <a className="hover:text-blue-500" href="git-scm.com">git-scm.com</a></li>
          <li className="cursor-pointer">Recomiendo la versión instalable sobre la portable.</li>
          <li className="cursor-pointer">Selecciona la versión para tu tipo de procesador y realiza la instalación como cualquier programa de Windows.</li>
        </ul>
      </section>
    </div>
  )
}
