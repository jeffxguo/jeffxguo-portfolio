import Link from "next/link";
import { MountainIcon, User, Code, Mail, Wrench } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function Header() {
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
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            About
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
          >
            <Wrench className="h-4 w-4" />
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
