'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';
import { FadeIn } from './fade-in';

import dynamic from 'next/dynamic';
import { TypewriterEffect } from './typewriter-effect';

const ParticlesBackground = dynamic(
  () => import('./particles-background').then((mod) => mod.ParticlesBackground),
  { ssr: false }
);

import { useState } from 'react';

// ... imports

export function AboutSection() {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);

  return (
    <section id="about" className="container py-24 sm:py-32 relative">
      <ParticlesBackground />
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <p className="text-lg text-primary mb-2">Hi, I'm <span className='font-bold text-xl'>Jeffrey Guo</span></p>
          <TypewriterEffect
            text="Full-Stack & AI Developer"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          />
          <p className="mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            I'm a Full-Stack and AI Developer with a Master's of Computer Science from the University of Southern California. I have a strong background building unique AI solutions involving ML and LLMs, while
            also creating responsive, scalable, and user-friendly web applications. I'm constantly evolving and always looking for creative ways to develop and hone my skillset.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/jeffxguo" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/jeffxguo" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path><circle cx="1.75" cy="1.75" r="1.75"></circle></svg>
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-4 w-4" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Read.cv</title><path d="M20.8315 3.36707L8.66861 0.10804C6.98928 -0.34192 5.26312 0.65467 4.81314 2.334L0.94304 16.7773C0.49306 18.4568 1.48966 20.1829 3.16899 20.6328L15.3319 23.892C17.0112 24.3419 18.7373 23.3453 19.1874 21.666L23.0574 7.22254C23.5073 5.54321 22.5108 3.81705 20.8315 3.36707ZM6.33349 2.74138C6.55849 1.90171 7.42156 1.40341 8.26123 1.62841L20.4241 4.88744C21.2637 5.11242 21.762 5.9755 21.537 6.81516L17.6669 21.2586C17.4421 22.0983 16.5789 22.5966 15.7393 22.3715L3.57639 19.1125C2.73671 18.8875 2.23842 18.0245 2.4634 17.1849L6.33349 2.74138ZM8.9669 5.07654C8.54705 4.96404 8.11552 5.2132 8.00302 5.63302C7.89054 6.05285 8.13968 6.4844 8.55952 6.59689L17.6817 9.04116C18.1015 9.15366 18.5331 8.90451 18.6455 8.48468C18.7581 8.06483 18.5089 7.6333 18.0891 7.52081L8.9669 5.07654ZM6.98458 9.43392C7.09708 9.01409 7.52862 8.76493 7.94844 8.87743L17.0706 11.3217C17.4904 11.4342 17.7395 11.8657 17.6271 12.2856C17.5146 12.7054 17.0831 12.9546 16.6632 12.8421L7.54107 10.3978C7.12124 10.2853 6.87208 9.85375 6.98458 9.43392ZM6.93 12.6783C6.51017 12.5658 6.07862 12.815 5.96614 13.2348C5.85364 13.6546 6.1028 14.0861 6.52263 14.1987L11.8439 15.6246C12.2637 15.737 12.6952 15.4879 12.8077 15.0679C12.9202 14.6481 12.6711 14.2167 12.2513 14.1041L6.93 12.6783Z" /></svg>                View Resume
              </a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="right" className="mx-auto" trigger={isAvatarLoaded}>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={250}
            height={250}
            unoptimized
            className="rounded-full object-cover aspect-square shadow-lg"
            onLoad={() => setIsAvatarLoaded(true)}
          />
        </FadeIn>
      </div>
    </section>
  );
}
