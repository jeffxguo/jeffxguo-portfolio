'use client';

import { useEffect, useState } from 'react';

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const sections = ['about', 'projects', 'skills', 'contact'];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(sectionId);
                            }
                        });
                    },
                    {
                        rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
                    }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return activeSection;
}
