// import React from "react";
import { useState, useEffect } from "react";

function useTypingEffect(words, typingSpeed = 100, erasingSpeed = 50, delay = 1500) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIdx, setWordIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);

    useEffect(() => {
        let timeout;
        const currentWord = words[wordIdx];

        if (!isDeleting && charIdx < currentWord.length) {
            timeout = setTimeout(() => setCharIdx(charIdx + 1), typingSpeed);
        } else if (isDeleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx(charIdx - 1), erasingSpeed);
        } else if (!isDeleting && charIdx === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && charIdx === 0) {
            setIsDeleting(false);
            setWordIdx((wordIdx + 1) % words.length);
        }

        setText(currentWord.substring(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, isDeleting, wordIdx, words, typingSpeed, erasingSpeed, delay]);

    return text;
}

export default useTypingEffect;