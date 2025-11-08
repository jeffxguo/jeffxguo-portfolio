import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function AboutSection() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-lg text-primary mb-2">Hi, I'm <span className='font-bold text-xl'>Jeffrey Guo</span></p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Full-Stack & AI Developer
          </h1>
          <p className="mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            I'm a Full-Stack and AI Developer with a Master's of Computer Science from the University of Southern California. I have a strong background building unique AI solutions involving ML and LLMs, while
            also creating responsive, scalable, and user-friendly web applications. I'm constantly evolving and always looking for creative ways to develop and hone my skillset.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
               <a href="https://github.com/jeffxguo" target="_blank" rel="noopener noreferrer">
               <Image src="/github-mark-white.svg" alt="GitHub" width={16} height={16} className="mr-2" />
               GitHub
              </a>
            </Button>
             <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/jeffrey-guo-a42503167/" target="_blank" rel="noopener noreferrer">
                <Image src="linkedin.svg" alt="LinkedIn" width={16} height={16} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={250}
              height={250}
              unoptimized
              className="rounded-full object-cover aspect-square shadow-lg"
            />
        </div>
      </div>
    </section>
  );
}
