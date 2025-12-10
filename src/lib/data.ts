import type { ImagePlaceholder } from './placeholder-images';
import { Technology } from '@/components/icons';
import { PlaceHolderImages } from './placeholder-images';
import { googleAI } from '@genkit-ai/google-genai';



export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  image: ImagePlaceholder;
  links: {
    github?: string;
    live?: string;
  };
};

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const projects: Project[] = [
  {
    title: 'AI Video Content Repurposing Engine',
    description: 'An all-in-one AI Chrome Extension that transforms YouTube videos into structured blog posts. Built with React and Google Cloud Run, it uses Gemini 1.5 Flash to analyze video content and generate SEO-ready articles in seconds.',
    technologies: ['Python', 'React', 'Next.js', 'Docker', 'Google Cloud Platform', 'Firebase'],
    image: findImage('ai-repurposer'),
    links: {
      github: 'https://github.com/jeffxguo/Video-to-Blog-Post-Converter',
      live: 'https://chromewebstore.google.com/detail/youtube-to-blog-converter/ckohibcnencacjnmhnjkopokcmmomeho',
    },
  },
  {
    title: 'Video Keyframes to Summary Neural Network',
    description: 'A Natural Language Processing pipeline to automatically generate video summaries by extracting important keyframes, captioning them, then stitching them together.',
    technologies: ['Python', 'Pytorch'],
    image: findImage('video-keyframes'),
    links: {
      github: 'https://github.com/jeffxguo/NLPVideoDescription',
    },
  },
  {
    title: 'Concert with Friends',
    description: 'A full-stack React web application designed for users to form groups and attend concerts together.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Mongoose'],
    image: findImage('concert-with-friends'),
    links: {
      github: 'https://github.com/jeffxguo/Concert-with-Friends',
    },
  },
  {
    title: 'Audio-Visual Look-At-Me Model',
    description: 'A multi-modal model which identifies whether each person is looking at the camera-wearer in an egocentric video.',
    technologies: ['Python', 'Pytorch', 'Scikit-learn'],
    image: findImage('av-conv'),
    links: {
    },
  },
  {
    title: 'URL Shortener',
    description: 'Shortens long URLs and stores the shortened versions through AWS.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    image: findImage('url-shortener'),
    links: {
      github: 'https://github.com/jeffxguo/url-shortener',
    }
  }
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "C++", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Vite", "Tailwind CSS", "PyTorch", "Scikit-learn", "TensorFlow", "pandas", "NumPy", "Matplotlib", "Mongoose"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Google Cloud Platform", "Firebase", "PostgreSQL", "MongoDB", "Google AI", "OAuth2"],
  },
  {
    title: "Concepts",
    skills: ["Responsive Design", "RESTful APIs", "Full-Stack Development", "Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"],
  },
];
