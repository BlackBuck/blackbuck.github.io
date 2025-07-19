import React, { useEffect, useState } from 'react';

interface TypingProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typing: React.FC<TypingProps> = ({ text, speed = 100, className }) => {
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (typing) {
            if (index < text.length) {
                interval = setTimeout(() => {
                    setDisplayed(text.slice(0, index + 1));
                    setIndex(index + 1);
                }, speed);
            } else {
                interval = setTimeout(() => setTyping(false), 1000);
            }
        } else {
            if (index > 0) {
                interval = setTimeout(() => {
                    setDisplayed(text.slice(0, index - 1));
                    setIndex(index - 1);
                }, speed);
            } else {
                interval = setTimeout(() => setTyping(true), 500);
            }
        }
        return () => clearTimeout(interval);
    }, [index, typing, text, speed]);

    return (
        <span className={className}>
            {displayed}
            <span style={{
                display: 'inline-block',
                width: '1ch',
                opacity: showCursor ? 1 : 0
            }}>|</span>
        </span>
    );
};

export default Typing;