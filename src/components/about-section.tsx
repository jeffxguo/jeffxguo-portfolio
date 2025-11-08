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
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><title>Read.cv</title><path d="M20.8315 3.36707L8.66861 0.10804C6.98928 -0.34192 5.26312 0.65467 4.81314 2.334L0.94304 16.7773C0.49306 18.4568 1.48966 20.1829 3.16899 20.6328L15.3319 23.892C17.0112 24.3419 18.7373 23.3453 19.1874 21.666L23.0574 7.22254C23.5073 5.54321 22.5108 3.81705 20.8315 3.36707ZM6.33349 2.74138C6.55849 1.90171 7.42156 1.40341 8.26123 1.62841L20.4241 4.88744C21.2637 5.11242 21.762 5.9755 21.537 6.81516L17.6669 21.2586C17.4421 22.0983 16.5789 22.5966 15.7393 22.3715L3.57639 19.1125C2.73671 18.8875 2.23842 18.0245 2.4634 17.1849L6.33349 2.74138ZM8.9669 5.07654C8.54705 4.96404 8.11552 5.2132 8.00302 5.63302C7.89054 6.05285 8.13968 6.4844 8.55952 6.59689L17.6817 9.04116C18.1015 9.15366 18.5331 8.90451 18.6455 8.48468C18.7581 8.06483 18.5089 7.6333 18.0891 7.52081L8.9669 5.07654ZM6.98458 9.43392C7.09708 9.01409 7.52862 8.76493 7.94844 8.87743L17.0706 11.3217C17.4904 11.4342 17.7395 11.8657 17.6271 12.2856C17.5146 12.7054 17.0831 12.9546 16.6632 12.8421L7.54107 10.3978C7.12124 10.2853 6.87208 9.85375 6.98458 9.43392ZM6.93 12.6783C6.51017 12.5658 6.07862 12.815 5.96614 13.2348C5.85364 13.6546 6.1028 14.0861 6.52263 14.1987L11.8439 15.6246C12.2637 15.737 12.6952 15.4879 12.8077 15.0679C12.9202 14.6481 12.6711 14.2167 12.2513 14.1041L6.93 12.6783Z"/></svg>                View Resume
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
