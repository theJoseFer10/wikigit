type Command = {
  cmd: string
  desc: string
}

type CommandGroup = {
  title: string
  commands: Command[]
}

const groups: CommandGroup[] = [
  {
    title: "Configuracion",
    commands: [
      { cmd: 'git config --global user.name "Nombre"', desc: "Define el nombre de usuario." },
      { cmd: 'git config --global user.email "correo"', desc: "Define el correo electronico." },
      { cmd: "git config --list", desc: "Muestra la configuracion actual." },
    ],
  },
  {
    title: "Repositorios",
    commands: [
      { cmd: "git init", desc: "Crea un repositorio en el directorio actual." },
      { cmd: "git clone <url>", desc: "Clona un repositorio remoto." },
      { cmd: "git clone --recurse-submodules <url>", desc: "Clona incluyendo submodulos." },
    ],
  },
  {
    title: "Cambios basicos",
    commands: [
      { cmd: "git status", desc: "Muestra el estado de los archivos." },
      { cmd: "git add <archivo>", desc: "Prepara un archivo para el commit." },
      { cmd: "git add .", desc: "Prepara todos los cambios." },
      { cmd: 'git commit -m "mensaje"', desc: "Confirma los cambios preparados." },
      { cmd: "git diff", desc: "Muestra cambios no preparados." },
    ],
  },
  {
    title: "Ramas",
    commands: [
      { cmd: "git branch", desc: "Lista las ramas locales." },
      { cmd: "git switch -c <rama>", desc: "Crea y cambia a una rama nueva." },
      { cmd: "git switch <rama>", desc: "Cambia a una rama existente." },
      { cmd: "git merge <rama>", desc: "Fusiona una rama en la actual." },
      { cmd: "git rebase <rama>", desc: "Reaplica tus commits sobre otra rama." },
      { cmd: "git branch -d <rama>", desc: "Elimina una rama fusionada." },
    ],
  },
  {
    title: "Remotos",
    commands: [
      { cmd: "git remote -v", desc: "Lista los remotos configurados." },
      { cmd: "git remote add origin <url>", desc: "Agrega un remoto llamado origin." },
      { cmd: "git fetch origin", desc: "Descarga cambios sin fusionarlos." },
      { cmd: "git pull origin main", desc: "Descarga y fusiona cambios." },
      { cmd: "git push -u origin main", desc: "Sube una rama y configura el seguimiento." },
      { cmd: "git push", desc: "Sube los commits de la rama actual." },
    ],
  },
  {
    title: "Deshacer cambios",
    commands: [
      { cmd: "git restore <archivo>", desc: "Descarta cambios del directorio de trabajo." },
      { cmd: "git restore --staged <archivo>", desc: "Quita un archivo del staging." },
      { cmd: "git reset --soft HEAD~1", desc: "Elimina el ultimo commit y conserva los cambios preparados." },
      { cmd: "git reset --hard HEAD~1", desc: "Elimina el ultimo commit y descarta los cambios." },
      { cmd: "git revert <commit>", desc: "Crea un commit que deshace otro." },
      { cmd: "git stash", desc: "Guarda trabajo temporal." },
      { cmd: "git stash pop", desc: "Recupera el ultimo stash." },
      { cmd: "git reflog", desc: "Muestra el historial de movimientos de HEAD." },
    ],
  },
  {
    title: "Inspeccion y avanzado",
    commands: [
      { cmd: "git log --oneline --graph --all", desc: "Historial compacto y grafico." },
      { cmd: "git show <commit>", desc: "Muestra los detalles de un commit." },
      { cmd: "git tag -a v1.0.0 -m \"mensaje\"", desc: "Crea una etiqueta anotada." },
      { cmd: "git cherry-pick <commit>", desc: "Aplica un commit especifico en la rama actual." },
      { cmd: "git bisect start", desc: "Inicia una busqueda binaria de un bug." },
      { cmd: "git submodule add <url> <ruta>", desc: "Agrega un repositorio como submodulo." },
    ],
  },
]

export default function CheatSheet() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Cheat sheet de Git.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Referencia rapida de los comandos mas usados, agrupados por tema. Usa
          el buscador de tu navegador para encontrar uno en concreto.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="flex flex-1 flex-col gap-2 p-3">
          <h2 className="text-xl font-semibold shimmer-color-mist-600 tracking-tight">
            {group.title}
          </h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-2 font-medium">Comando</th>
                  <th className="px-4 py-2 font-medium">Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {group.commands.map((command) => (
                  <tr key={command.cmd} className="border-t">
                    <td className="whitespace-nowrap px-4 py-2 font-mono text-xs text-foreground">
                      {command.cmd}
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {command.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  )
}
