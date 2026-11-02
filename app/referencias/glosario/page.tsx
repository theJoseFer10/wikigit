type Term = {
  name: string
  definition: string
}

const terms: Term[] = [
  {
    name: "Repositorio",
    definition:
      "Espacio donde Git guarda los archivos del proyecto y todo su historial de cambios. Incluye la carpeta oculta .git.",
  },
  {
    name: "Commit",
    definition:
      "Registro permanente de un conjunto de cambios. Tiene un hash unico, autor, fecha y mensaje.",
  },
  {
    name: "Rama (branch)",
    definition:
      "Puntero movil a un commit que permite desarrollar trabajo en paralelo sin afectar otras lineas.",
  },
  {
    name: "HEAD",
    definition:
      "Puntero especial que indica la rama o commit en el que estas trabajando actualmente.",
  },
  {
    name: "Staging area (indice)",
    definition:
      "Area intermedia donde se colocan los cambios con git add antes de confirmarlos con git commit.",
  },
  {
    name: "Working directory",
    definition:
      "Los archivos tal como los ves y editas en tu sistema de archivos.",
  },
  {
    name: "Untracked",
    definition:
      "Archivo que Git aun no rastrea porque nunca fue agregado con git add.",
  },
  {
    name: "Remote",
    definition:
      "Copia del repositorio alojada en un servidor. El remoto principal suele llamarse origin.",
  },
  {
    name: "Upstream",
    definition:
      "Rama remota que tu rama local sigue, o el repositorio original de un fork.",
  },
  {
    name: "Fetch",
    definition:
      "Descarga los cambios del remoto sin integrarlos en tu rama de trabajo.",
  },
  {
    name: "Pull",
    definition:
      "Descarga los cambios del remoto y los integra en la rama actual (fetch + merge).",
  },
  {
    name: "Push",
    definition:
      "Envia tus commits locales al repositorio remoto.",
  },
  {
    name: "Merge",
    definition:
      "Fusiona los cambios de una rama en otra. Puede ser fast-forward o crear un commit de fusion.",
  },
  {
    name: "Fast-forward",
    definition:
      "Tipo de fusion en la que Git solo avanza el puntero de la rama porque no hubo trabajo divergente.",
  },
  {
    name: "Rebase",
    definition:
      "Reaplica los commits de una rama sobre otra base, reescribiendo sus hashes y produciendo un historial lineal.",
  },
  {
    name: "Conflicto",
    definition:
      "Situacion en la que dos cambios afectan las mismas lineas y Git no puede decidir cual conservar.",
  },
  {
    name: "Stash",
    definition:
      "Pila donde puedes guardar temporalmente cambios sin confirmar y recuperarlos despues.",
  },
  {
    name: "Reflog",
    definition:
      "Registro local de todos los movimientos de HEAD y las ramas. Permite recuperar commits aparentemente perdidos.",
  },
  {
    name: "Tag",
    definition:
      "Etiqueta fija que apunta a un commit, usada normalmente para marcar versiones.",
  },
  {
    name: "Fork",
    definition:
      "Copia de un repositorio ajeno bajo tu propia cuenta, usada para contribuir sin permisos de escritura.",
  },
  {
    name: "Pull request",
    definition:
      "Solicitud para integrar los cambios de una rama en otra, con revision y discusion previa.",
  },
  {
    name: "Hook",
    definition:
      "Script que Git ejecuta automaticamente antes o despues de acciones como commit o push.",
  },
  {
    name: "Submodulo",
    definition:
      "Repositorio Git incluido dentro de otro repositorio, con su propio historial independiente.",
  },
  {
    name: "Gitignore",
    definition:
      "Archivo que indica a Git que archivos y carpetas debe ignorar.",
  },
]

export default function Glosario() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Glosario de Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Definiciones de los terminos que aparecen a lo largo de la wiki.
        </p>
      </section>

      <section className="flex flex-1 flex-col p-3">
        <dl className="flex max-w-prose flex-col gap-4">
          {terms.map((term) => (
            <div key={term.name}>
              <dt className="font-semibold text-foreground">{term.name}</dt>
              <dd className="text-muted-foreground">{term.definition}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
