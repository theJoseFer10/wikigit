import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ProgressBar } from "@/components/progress-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProgressProvider } from "@/hooks/use-progress";
import "./globals.css";

const themeScript = `(function(){try{var t=localStorage.getItem("wikigit:theme");var d=t==="dark"||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WikiGit — Wiki interactiva de Git",
  description:
    "Aprende Git con guías interactivas, ejemplos y referencia de comandos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ProgressProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger />
                <ProgressBar />
                <ThemeToggle />
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
