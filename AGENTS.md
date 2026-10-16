<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Wikigit — notas del proyecto

Wiki interactiva de Git construida con Next.js (App Router), shadcn/ui y Tailwind v4.

### Estructura del sidebar

- `lib/nav.ts`: datos de navegación (`navSections`, `footerLinks`), tipados con `NavSection`/`NavItem` e iconos de `lucide-react`.
- `components/app-sidebar.tsx`: client component. Header con la marca, secciones colapsables (auto-expanden la sección activa según `usePathname`), footer y `SidebarRail`.
- `app/layout.tsx`: `SidebarProvider` + `SidebarInset` + header con `SidebarTrigger`.
- `hooks/use-mobile.ts`: usa `useSyncExternalStore`.

### Convenciones

- Los `SidebarMenuButton`/`SidebarMenuSubButton` de este shadcn usan la prop `render` (base-ui `useRender`), **no** `asChild`; para enlaces se pasa `render={<Link href=... />}`.
- Los enlaces de `lib/nav.ts` apuntan a rutas aún no creadas (se irán agregando páginas).
- No editar dentro de los marcadores `nextjs-agent-rules` (los re-escribe `next dev`).

### Pendientes

- Crear las páginas/rutas referenciadas por el sidebar.

### Historial de cambios

- Reestructurado el sidebar: creado `lib/nav.ts` (8 secciones + footer), `components/app-sidebar.tsx` con secciones colapsables y estado activo, `app/layout.tsx` corregido (children duplicado), `hooks/use-mobile.ts` migrado a `useSyncExternalStore`, `app/page.tsx` con placeholder.
