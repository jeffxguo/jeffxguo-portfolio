'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, User, Code, Mail, Wrench } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const activeSection = useActiveSection();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-[250px]">
                <SheetHeader className="text-left">
                    <SheetTitle asChild>
                        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                            <span className="font-bold">Jeffrey Guo</span>
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col gap-4 mt-8">
                        <Link
                            href="#about"
                            onClick={() => setOpen(false)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-colors",
                                activeSection === "about" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <User className="h-4 w-4" />
                            About
                        </Link>
                        <Link
                            href="#projects"
                            onClick={() => setOpen(false)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-colors",
                                activeSection === "projects" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Code className="h-4 w-4" />
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            onClick={() => setOpen(false)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-colors",
                                activeSection === "skills" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Wrench className="h-4 w-4" />
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className={cn(
                                "flex items-center gap-2 text-sm font-medium transition-colors",
                                activeSection === "contact" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <Mail className="h-4 w-4" />
                            Contact
                        </Link>
                    </div>
                    <div className="mt-auto pb-8 pr-6">
                        <Separator className="mb-4" />
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Theme</span>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
