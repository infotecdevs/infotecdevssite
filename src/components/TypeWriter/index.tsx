import { useEffect, useState } from "react";

export const Typewriter = ({ phrases }: any) => {
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        typeNextPhrase();
    }, [index, phrases]);
    const typeNextPhrase = () => {
        const phrase = phrases[index];
        let currentCharacter = 0;

        const typeInterval = setInterval(() => {
            if (currentCharacter <= phrase.length) {
                setCurrentPhrase(phrase.substring(0, currentCharacter));
                currentCharacter++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }, 5000); // Tempo de espera após terminar de escrever a frase
            }
        }, 500); // Velocidade da digitação
    };

    return <p className="min-h-16">{currentPhrase}</p>;
};
