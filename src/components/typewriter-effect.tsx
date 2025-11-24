'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TypewriterEffectProps {
    text: string;
    className?: string;
    cursorClassName?: string;
}

export function TypewriterEffect({
    text,
    className,
    cursorClassName,
}: TypewriterEffectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const characters = Array.from(text);

    return (
        <h1
            ref={ref}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ display: "none" }}
                    animate={isInView ? { display: "inline" } : {}}
                    transition={{
                        duration: 0,
                        delay: index * 0.05,
                    }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={`inline-block h-[1em] w-[2px] align-middle bg-primary ml-1 ${cursorClassName}`}
            />
        </h1>
    );
}
