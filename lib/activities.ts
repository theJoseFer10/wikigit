export type Activity = {
  href: string
  title: string
}

export const activities: Activity[] = [
  { href: "/actividades/configuracion", title: "Configuración inicial" },
  { href: "/actividades/repositorio", title: "Crear un repositorio" },
  { href: "/actividades/flujo", title: "Flujo de trabajo básico" },
  { href: "/actividades/estados", title: "Los tres estados" },
  { href: "/actividades/add", title: "git add" },
  { href: "/actividades/commit", title: "git commit" },
  { href: "/actividades/status-log", title: "git status y git log" },
  { href: "/actividades/gitignore", title: "El archivo .gitignore" },
  { href: "/actividades/ramas-introduccion", title: "Introducción a las ramas" },
  { href: "/actividades/ramas-cambiar", title: "Crear y cambiar ramas" },
  { href: "/actividades/ramas-merge", title: "Fusionar (merge)" },
  { href: "/actividades/ramas-rebase", title: "Rebase" },
  { href: "/actividades/ramas-conflictos", title: "Resolver conflictos" },
  { href: "/actividades/remotos-remote", title: "git remote" },
  { href: "/actividades/remotos-fetch-pull", title: "git fetch y git pull" },
  { href: "/actividades/remotos-push", title: "git push" },
  { href: "/actividades/remotos-forks", title: "Trabajar con forks" },
  { href: "/actividades/deshacer-restore", title: "git restore" },
  { href: "/actividades/deshacer-reset", title: "git reset" },
  { href: "/actividades/deshacer-revert", title: "git revert" },
  { href: "/actividades/deshacer-stash", title: "git stash" },
  { href: "/actividades/deshacer-reflog", title: "Reflog" },
  { href: "/actividades/colaboracion-pull-requests", title: "Pull requests" },
  { href: "/actividades/colaboracion-revisiones", title: "Revisiones de código" },
  { href: "/actividades/colaboracion-github-flow", title: "GitHub Flow" },
  { href: "/actividades/colaboracion-releases", title: "Etiquetas y releases" },
  { href: "/actividades/avanzado-cherry-pick", title: "git cherry-pick" },
  { href: "/actividades/avanzado-bisect", title: "git bisect" },
  { href: "/actividades/avanzado-hooks", title: "Hooks de Git" },
  { href: "/actividades/avanzado-submodulos", title: "Submódulos" },
]

export const activityHrefs = activities.map((activity) => activity.href)
