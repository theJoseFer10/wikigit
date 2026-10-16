export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold shimmer-color-mist-600 tracking-tight">
        Wiki interactiva de Git
      </h1>
      <p className="max-w-prose text-muted-foreground">
        WikiGit es un proyecto de código abierto para poder ayudar a personas con interés en
        aprender a usar este sistema de control de versiones. Este sitio es una guía interactiva
        en la que aprenderás conceptos y teorías sobre Git y al mismo tiempo podrás ponerlos en
        práctica dentro del mismo sitio, esto gracias a un emulador de terminal implementado.
        Mucha suerte en tu camino como desarrollador y gracias por usar nuestra plataforma.
      </p>
    </div>
  )
}
