import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=';

interface DecryptTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export const DecryptText = ({ text, className = "", speed = 30 }: DecryptTextProps) => {
    const [displayText, setDisplayText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((_, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1;
        }, speed);

        return () => clearInterval(interval);
    }, [isInView, text, speed]);

    return (
        <span ref={ref} className={className}>
            {displayText || text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join("")}
        </span>
    );
};
