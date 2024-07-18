import React, { useEffect, useRef, useState } from 'react';
import StarCircle from './icons/StarCircle';

const MarqueeComponent: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
    const [animationDuration, setAnimationDuration] = useState<number>(15);

    useEffect(() => {
        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setLastScrollTop(st <= 0 ? 0 : st);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        if (marqueeElement) {
            const computedStyle = window.getComputedStyle(marqueeElement);
            const currentTransform = computedStyle.transform;
            const matrixValues = currentTransform.match(/matrix.*\((.+)\)/);
            if (matrixValues) {
                const translateX = parseFloat(matrixValues[1].split(', ')[4]);

                if (scrollDirection === 'up') {
                    setAnimationDuration(translateX / 50); // Ajustar a duração com base na posição atual
                    marqueeElement.style.animationDirection = 'reverse';
                } else {
                    setAnimationDuration((2000 - translateX) / 50); // Ajustar a duração com base na posição atual
                    marqueeElement.style.animationDirection = 'normal';
                }

                marqueeElement.style.animationPlayState = 'running';
            }
        }
    }, [scrollDirection]);

    const items = (
        <div className="flex justify-center items-center gap-10">
            <span className="whitespace-nowrap monument text-2xl">FRONT END DEVELOPER</span>
            <div className="w-12 h-12 roda-roda border-gray-500 flex justify-center items-center">
                <StarCircle />
            </div>
            <span className="whitespace-nowrap monument text-2xl">UX DESIGNER</span>
            <div className="w-12 h-12 roda-roda border-gray-500 flex justify-center items-center mr-10">
                <StarCircle />
            </div>
        </div>
    );

    return (
        <div className="absolute bottom-0 bg-gray-100 p-7 w-full marquee-container">
            <div
                className="marquee"
                ref={marqueeRef}
                style={{
                    animationDuration: `${animationDuration}s`
                }}
            >
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
                {items}
            </div>
        </div>
    );
};

export default MarqueeComponent;
