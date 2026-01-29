import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Code, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export const AboutSection = () => {
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [textRef, textVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div 
        ref={containerRef}
        className={`relative bg-black/70 text-muted-foreground text-center px-8 py-6 rounded-lg shadow-lg mx-auto max-w-4xl my-8 z-1 transition-all duration-1000 ${
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
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              ref={textRef}
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                textVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform -translate-x-8'
              }`}
            >
              <h3 className="text-white text-2xl font-semibold">
                <span className="text-primary">Full-Stack</span> Developer & <span className="text-primary">AI</span> Enthusiast
              </h3>

              <p className="text-white">
                I'm a final-year Computer Science student with hands-on experience in building full-stack web platforms,
                 AI-based systems, and interactive user interfaces. My key strengths include React, Flask, Python, and modern JS frameworks.
              </p>

              <p className="text-white">
                I've worked on real-time applications, recommendation engines, and NLP/vision-based tools.
                   I enjoy solving complex technical challenges and creating user-focused solutions that work at scale.
                   I'm always looking to collaborate on meaningful projects or join innovative teams where I can grow and contribute as a developer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>

                <a
                  href="/CV/Junaid_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div 
              ref={cardsRef}
              className={`grid grid-cols-1 gap-6 transition-all duration-1000 delay-600 ${
                cardsVisible 
                  ? 'opacity-100 transform translate-x-0' 
                  : 'opacity-0 transform translate-x-8'
              }`}
            >
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  description: "Building interactive full-stack applications using React, Flask, Node.js, and MongoDB.",
                  delay: "delay-700"
                },
                {
                  icon: User,
                  title: "AI & Machine Learning Projects",
                  description: "Developing intelligent systems using ML Algorithms, NLP, computer vision, and recommendation models.",
                  delay: "delay-900"
                },
                {
                  icon: Briefcase,
                  title: "UI-Focused Development",
                  description: "Creating clean, responsive, and intuitive interfaces using React, TailwindCSS, and Figma.",
                  delay: "delay-1100"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`gradient-border p-6 card-hover transition-all duration-1000 transform hover:scale-105 ${
                    cardsVisible 
                      ? `opacity-100 translate-y-0 ${item.delay}` 
                      : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 transform transition-transform duration-300 hover:rotate-12">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
