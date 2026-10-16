import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  GitBranch,
  GitCommitHorizontal,
  GitFork,
  GitPullRequest,
  Library,
  ListTree,
  RotateCcw,
  Rocket,
  Tag,
  Webhook,
  Wrench,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
}

export type NavSection = {
  title: string
  icon: LucideIcon
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: "Primeros pasos",
    icon: Rocket,
    items: [
      { title: "Introducción a Git", href: "/primeros-pasos/introduccion" },
      { title: "Configuración inicial", href: "/primeros-pasos/configuracion" },
      { title: "Crear un repositorio", href: "/primeros-pasos/repositorio" },
      { title: "Flujo de trabajo básico", href: "/primeros-pasos/flujo" },
    ],
  },
  {
    title: "Fundamentos",
    icon: GitCommitHorizontal,
    items: [
      { title: "Los tres estados", href: "/fundamentos/estados" },
      { title: "git add", href: "/fundamentos/add" },
      { title: "git commit", href: "/fundamentos/commit" },
      { title: "git status y git log", href: "/fundamentos/status-log" },
      { title: "El archivo .gitignore", href: "/fundamentos/gitignore" },
    ],
  },
  {
    title: "Ramas",
    icon: GitBranch,
    items: [
      { title: "Introducción a las ramas", href: "/ramas/introduccion" },
      { title: "Crear y cambiar ramas", href: "/ramas/cambiar" },
      { title: "Fusionar (merge)", href: "/ramas/merge" },
      { title: "Rebase", href: "/ramas/rebase" },
      { title: "Resolver conflictos", href: "/ramas/conflictos" },
    ],
  },
  {
    title: "Repositorios remotos",
    icon: GitFork,
    items: [
      { title: "git remote", href: "/remotos/remote" },
      { title: "git fetch y git pull", href: "/remotos/fetch-pull" },
      { title: "git push", href: "/remotos/push" },
      { title: "Trabajar con forks", href: "/remotos/forks" },
    ],
  },
  {
    title: "Deshacer cambios",
    icon: RotateCcw,
    items: [
      { title: "git restore", href: "/deshacer/restore" },
      { title: "git reset", href: "/deshacer/reset" },
      { title: "git revert", href: "/deshacer/revert" },
      { title: "git stash", href: "/deshacer/stash" },
      { title: "Reflog: recuperar todo", href: "/deshacer/reflog" },
    ],
  },
  {
    title: "Colaboración",
    icon: GitPullRequest,
    items: [
      { title: "Pull requests", href: "/colaboracion/pull-requests" },
      { title: "Revisiones de código", href: "/colaboracion/revisiones" },
      { title: "GitHub Flow", href: "/colaboracion/github-flow" },
      { title: "Etiquetas y releases", href: "/colaboracion/releases" },
    ],
  },
  {
    title: "Comandos avanzados",
    icon: Wrench,
    items: [
      { title: "git cherry-pick", href: "/avanzado/cherry-pick" },
      { title: "git bisect", href: "/avanzado/bisect" },
      { title: "Hooks de Git", href: "/avanzado/hooks" },
      { title: "Submódulos", href: "/avanzado/submodulos" },
    ],
  },
  {
    title: "Referencias",
    icon: Library,
    items: [
      { title: "Cheat sheet", href: "/referencias/cheat-sheet" },
      { title: "Glosario", href: "/referencias/glosario" },
      { title: "Recursos recomendados", href: "/referencias/recursos" },
    ],
  },
]

export const footerLinks = [
  { title: "Índice", href: "/referencias/cheat-sheet", icon: ListTree },
  { title: "Etiquetas", href: "/referencias/glosario", icon: Tag },
  { title: "Integraciones", href: "/avanzado/hooks", icon: Webhook },
  { title: "Explorar", href: "/referencias/recursos", icon: Boxes },
]
