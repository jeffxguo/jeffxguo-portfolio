import { projects } from '@/lib/data';
import { ProjectCard } from './project-card';

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-muted/40 py-24 sm:py-32">
      <div className="container">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Work</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
