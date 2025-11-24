'use client';

import Link from "next/link";
import { MountainIcon, User, Code, Mail, Wrench } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { ScrollProgress } from "./scroll-progress";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:hidden">
          <MobileNav />
        </div>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6" />
          <span className="font-bold sm:inline-block">Jeffrey Guo</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <Link
            href="#about"
            className={cn(
              "transition-colors flex items-center gap-2",
              activeSection === "about" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <User className="h-4 w-4" />
            About
          </Link>
          <Link
            href="#projects"
            className={cn(
              "transition-colors flex items-center gap-2",
              activeSection === "projects" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code className="h-4 w-4" />
            Projects
          </Link>
          <Link
            href="#skills"
            className={cn(
              "transition-colors flex items-center gap-2",
              activeSection === "skills" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Wrench className="h-4 w-4" />
            Skills
          </Link>
          <Link
            href="#contact"
            className={cn(
              "transition-colors flex items-center gap-2",
              activeSection === "contact" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
      <ScrollProgress />
    </header>
  );
}
