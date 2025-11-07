import Link from "next/link";
import { MountainIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-6 text-sm font-medium w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold sm:inline-block">Jeffrey Guo</span>
          </Link>
          <div className="flex-1"></div>
           <Link
            href="#about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
