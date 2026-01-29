import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation"


// Utility function (cn replacement)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "C++", category: "languages" },
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  // Backend
  { name: "Flask", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  // Tools & IDEs
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Docker", category: "tools" } // Fixed: "Dockers" -> "Docker"
];

const categories = ["all", "languages", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [buttonsRef, buttonsVisible] = useScrollAnimation(0.2);
  const [skillsGridRef, skillsGridVisible] = useScrollAnimation(0.1);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div 
        ref={containerRef}
        className={`relative bg-black/70 text-foreground text-center px-8 py-6 rounded-lg shadow-lg mx-auto max-w-4xl my-8 z-1 transition-all duration-1000 ${
          containerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className={`text-white text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-1000 delay-200 ${
            containerVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            My <span className="text-primary"> Skills</span>
          </h2>
          
          <div 
            ref={buttonsRef}
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
              buttonsVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-6'
            }`}
          >
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize transform hover:scale-110", // Fixed: "hover:bd-secondary" -> "hover:bg-secondary"
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/70 text-white hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div 
            ref={skillsGridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${
              skillsGridVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className={`bg-card p-5 rounded-lg shadow-lg card-hover hover:text-primary transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                  skillsGridVisible 
                    ? `opacity-100 translate-y-0` 
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ 
                  transitionDelay: skillsGridVisible ? `${key * 100}ms` : '0ms' 
                }}
              >
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-lg transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: skillsGridVisible ? '85%' : '0%',
                      transitionDelay: skillsGridVisible ? `${key * 100 + 200}ms` : '0ms'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
