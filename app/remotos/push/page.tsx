import TerminalText from "@/components/terminal-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GitPush() {
  const primerPush = [`git push -u origin main`]
  const despues = [`git push`]
  const rama = [`git push origin feature`]
  const borrarRemota = [`git push origin --delete feature`]
  const forceLease = [`git push --force-with-lease`]

  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        git push: subir cambios.
      </h1>

      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          git push envia tus commits locales al repositorio remoto para que otras
          personas puedan verlos. Necesitas tener un remoto configurado y
          permisos de escritura sobre el.
        </p>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Primer push y seguimiento.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          La bandera -u vincula tu rama local con la remota. A partir de ahi Git
          recuerda a donde subir y puedes usar solo git push.
        </p>
        <div className="p-4">
          <TerminalText lines={primerPush} />
        </div>
        <div className="p-4">
          <TerminalText lines={despues} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Subir otra rama.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Puedes subir cualquier rama indicando el remoto y el nombre de la rama.
        </p>
        <div className="p-4">
          <TerminalText lines={rama} />
        </div>
        <p className="max-w-prose text-muted-foreground">
          Tambien puedes eliminar una rama del remoto.
        </p>
        <div className="p-4">
          <TerminalText lines={borrarRemota} />
        </div>
      </section>

      <h2 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Si tu push es rechazado.
      </h2>
      <section className="flex flex-1 flex-col p-3">
        <p className="max-w-prose text-muted-foreground">
          Suele ocurrir cuando el remoto tiene commits que tu no tienes. Primero
          haz fetch y pull para integrarlos. Evita usar --force salvo que sepas
          exactamente lo que haces; --force-with-lease es mas seguro porque falla
          si alguien mas subio cambios.
        </p>
        <div className="p-4">
          <TerminalText lines={forceLease} />
        </div>
      </section>

      <Button variant="secondary">
        <Link href="/actividades/remotos-push">Iniciar Actividad.</Link>
      </Button>
    </div>
  )
}
