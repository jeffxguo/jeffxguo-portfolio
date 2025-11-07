'use client';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { TechnologyIcon } from './icons';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-60 w-full">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            data-ai-hint={project.image.imageHint}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
        <CardDescription className="mt-2 text-base text-muted-foreground">{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <TooltipProvider>
          <div className="flex gap-2 text-muted-foreground">
            {project.technologies.map((tech) => (
              <Tooltip key={tech}>
                <TooltipTrigger>
                  <TechnologyIcon technology={tech} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="flex gap-2">
          {project.links.github && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.links.github} target="_blank">
                <Image src="/github-mark-white.svg" alt="GitHub" width={16} height={16} />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
          {project.links.live && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.links.live} target="_blank">
                <ExternalLink />
                <span className="sr-only">Live Demo</span>
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
