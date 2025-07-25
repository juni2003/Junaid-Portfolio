import { useEffect, useMemo, useState } from "react";

export const LightBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDarkMode(dark);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `
      radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
      radial-gradient(circle at 70% 40%, rgba(173, 216, 230, 0.4) 0%, transparent 80%),
      linear-gradient(to bottom, #cceaff, #e6f7ff, #f5fcff)
    `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    zIndex: -10,
  }), []);

  return (
    <>
      {/* Main background layer */}
      <div
        style={backgroundStyle}
        className={`
          fixed inset-0 -z-10 
          transition-opacity duration-700 ease-in-out 
          ${isDarkMode ? "opacity-0" : "opacity-100"}
        `}
      />

      {!isDarkMode && (
        <>
          {/* ☀️ SUN & Static Rays */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-9]">
            {/* Glowing Sun */}
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-yellow-300 opacity-90 blur-md shadow-xl" />


            {/* Extra Glow */}
            <div className="absolute top-10 left-10 w-56 h-56 bg-yellow-100 rounded-full blur-3xl opacity-25" />
          </div>

          {/* Blur layer over everything to soften look */}
          <div className="fixed inset-0 z-[-8] backdrop-blur-[25px] bg-white/20 pointer-events-none" />
        </>
      )}
    </>
  );
};
