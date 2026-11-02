"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, GitBranch } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { navSections, type NavSection } from "@/lib/nav"

function SectionGroup({ section }: { section: NavSection }) {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()
  const hasActive = section.items.some((item) => pathname.startsWith(item.href))
  const [open, setOpen] = useState(hasActive)
  const [prevHasActive, setPrevHasActive] = useState(hasActive)

  if (hasActive !== prevHasActive) {
    setPrevHasActive(hasActive)
    if (hasActive) setOpen(true)
  }

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => setOpen((value) => !value)}
            isActive={hasActive}
            tooltip={section.title}
            aria-expanded={open}
          >
            <section.icon />
            <span className="truncate">{section.title}</span>
            <ChevronRight
              className={cn(
                "ml-auto transition-transform duration-200",
                open && "rotate-90"
              )}
            />
          </SidebarMenuButton>
          {open && (
            <SidebarMenuSub>
              {section.items.map((item) => (
                <SidebarMenuSubItem key={item.href}>
                  <SidebarMenuSubButton
                    render={<Link href={item.href} />}
                    isActive={pathname === item.href}
                    onClick={() => setOpenMobile(false)}
                  >
                    <span>{item.title}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

export function AppSidebar() {
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              render={<Link href="/" />}
              onClick={() => setOpenMobile(false)}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GitBranch className="size-4" />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate font-semibold">WikiGit</span>
                <span className="truncate text-xs text-sidebar-foreground/70">
                  Wiki interactiva de Git
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        {navSections.map((section) => (
          <SectionGroup key={section.title} section={section} />
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
