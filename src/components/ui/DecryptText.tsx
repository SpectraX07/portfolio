import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=';

interface DecryptTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

export const DecryptText = ({ text, className = "", speed = 30, delay = 0 }: DecryptTextProps) => {
    const [iteration, setIteration] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!isInView) return;

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setIteration((prev) => {
                    if (prev >= text.length) {
                        clearInterval(interval);
                        return text.length;
                    }
                    return prev + 1;
                });
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isInView, text, speed, delay]);

    return (
        <span ref={ref} className={`font-mono leading-none ${className}`}>
            {text.split("").map((char, index) => {
                if (index < iteration) {
                    return <span key={index}>{char}</span>;
                }
                return (
                    <span 
                        key={index} 
                        className="text-[0.4em] opacity-40 inline-block align-middle mx-[1px]"
                    >
                        {chars[Math.floor(Math.random() * chars.length)]}
                    </span>
                );
            })}
        </span>
    );
};
