type Resource = {
  title: string
  href: string
  description: string
}

type ResourceGroup = {
  title: string
  resources: Resource[]
}

const groups: ResourceGroup[] = [
  {
    title: "Documentacion oficial",
    resources: [
      {
        title: "Documentacion de Git",
        href: "https://git-scm.com/doc",
        description:
          "Referencia oficial de comandos, guias y manuales de Git.",
      },
      {
        title: "Pro Git (espanol)",
        href: "https://git-scm.com/book/es/v2",
        description:
          "Libro gratuito y completo sobre Git, desde lo basico hasta lo avanzado.",
      },
      {
        title: "Documentacion de GitHub",
        href: "https://docs.github.com/es",
        description:
          "Guias sobre repositorios, pull requests, acciones y colaboracion.",
      },
    ],
  },
  {
    title: "Aprender practicando",
    resources: [
      {
        title: "Learn Git Branching",
        href: "https://learngitbranching.js.org/",
        description:
          "Tutorial interactivo con visualizaciones para practicar ramas, rebase y merges.",
      },
      {
        title: "GitHub Skills",
        href: "https://skills.github.com/",
        description:
          "Ejercicios guiados dentro de GitHub para aprender flujos de trabajo reales.",
      },
      {
        title: "Oh My Git!",
        href: "https://ohmygit.org/",
        description:
          "Juego de codigo abierto para entender el funcionamiento interno de Git.",
      },
    ],
  },
  {
    title: "Referencia rapida",
    resources: [
      {
        title: "Cheat sheet de GitHub Education",
        href: "https://education.github.com/git-cheat-sheet-education.pdf",
        description:
          "PDF con los comandos esenciales de Git en una sola pagina.",
      },
      {
        title: "Git reference",
        href: "https://git-scm.com/docs",
        description:
          "Listado completo de comandos con su sintaxis y opciones.",
      },
    ],
  },
]

export default function Recursos() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Recursos recomendados.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Enlaces utiles para seguir aprendiendo Git y resolver dudas despues de
          terminar la wiki.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="flex flex-1 flex-col gap-2 p-3">
          <h2 className="text-xl font-semibold shimmer-color-mist-600 tracking-tight">
            {group.title}
          </h2>
          <ul className="flex max-w-prose flex-col gap-3">
            {group.resources.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 hover:text-blue-500"
                >
                  {resource.title}
                </a>
                <p className="text-muted-foreground">{resource.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
