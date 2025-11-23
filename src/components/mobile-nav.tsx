'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MountainIcon, User, Code, Mail, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] flex flex-col">
                <SheetHeader>
                    <SheetTitle className="text-left flex items-center gap-2">
                        <MountainIcon className="h-6 w-6" />
                        <span className="font-bold">Jeffrey Guo</span>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col flex-1 mt-8">
                    <nav className="flex flex-col gap-2">
                        <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                            <Link href="#about">
                                <User className="mr-2 h-4 w-4" />
                                About
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                            <Link href="#projects">
                                <Code className="mr-2 h-4 w-4" />
                                Projects
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                            <Link href="#skills">
                                <Wrench className="mr-2 h-4 w-4" />
                                Skills
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start" asChild onClick={() => setOpen(false)}>
                            <Link href="#contact">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact
                            </Link>
                        </Button>
                    </nav>
                    <div className="mt-auto">
                        <Separator className="mb-4" />
                        <div className="flex items-center justify-between px-2">
                            <span className="text-sm font-medium">Theme</span>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
