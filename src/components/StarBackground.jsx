import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check and watch dark mode status
    useEffect(() => {
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
        const isDark = matchDark.matches || document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);

        const observer = new MutationObserver(() => {
            const dark = document.documentElement.classList.contains("dark");
            setIsDarkMode(dark);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    // Run star/meteor logic only in dark mode
    useEffect(() => {
        if (!isDarkMode) return;

        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isDarkMode]);

    // Skip rendering in light mode completely
    if (!isDarkMode) return null;

    // STAR GENERATION
    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    // METEOR GENERATION
    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    // RENDER FOR DARK MODE
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
            {/* Planet & SVG overlays */}
            <img src="/planet-left.svg" alt="Planet Left" className="absolute bottom-0 left-8 w-64 opacity-50 pointer-events-none z-0" />
            <img src="/planet-right.svg" alt="Planet Right" className="absolute top-0 right-10 w-80 opacity-30 pointer-events-none z-0" />
            <img src="/satellite.svg" alt="Satellite" className="absolute top-20 left-4 w-20 opacity-50 pointer-events-none z-0" />
            <img src="/rocket.svg" alt="Rocket" className="absolute bottom-4 right-4 w-24 opacity-50 pointer-events-none z-0" />

            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

            {/* Meteors */}
            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        opacity: 0,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`,
                        animationFillMode: "forwards",
                    }}
                />
            ))}
        </div>
    );
};
