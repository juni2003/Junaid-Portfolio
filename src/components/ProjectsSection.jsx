import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer (FIXED VERSION)
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the stored variable
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const projects = [
  {
    id: 1,
    title: "Metro Ticketing System",
    description: "A web-based metro ticketing platform with real-time fare calculations, routing, and ticket validation. Users can register, log in, and print tickets. Built with a clean frontend in React and TailwindCSS.",
    image: "/projects/Project1.png",
    tags: ["React", "MongoDB", "Node.js", "Express.js"], // Fixed spacing
    demoUrl: "https://www.youtube.com/watch?v=JMxPkxq1eaM",
    githubUrl: "https://github.com/juni2003/Metro-Ticketing-System-Project",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "An intelligent movie recommender built using TF-IDF and KNN. Backend built in Flask and served to a React-based frontend. Integrated the TMDB API for rich movie metadata and visuals. Designed for personalized user experience with filtering and trending suggestions.",
    image: "/projects/Project2.png",
    tags: ["Python", "Flask", "React", "TMDB API", "TailwindCSS"], // Fixed spacing
    demoUrl: "https://youtu.be/rD4_kNMJ-KY",
    githubUrl: "https://github.com/juni2003/Movie-Recommendation-System",
  },
  {
    id: 3,
    title: "AI Meme Generator",
    description:
      "A meme generator that combines NLP and computer vision. Generates relevant meme captions using NLP techniques and matches them with the best template via CLIP. Features a GUI built with Tkinter and image APIs for templates.",
    image: "/projects/Project3.png",
    tags: ["Python", "spaCy", "CLIP Model", "Tkinter"], // Fixed spacing
    demoUrl: "https://www.youtube.com/watch?v=6eGE0wVo5eg",
    githubUrl: "https://github.com/juni2003/AI-Meme-Generator",
  },
  {
    id: 4,
    title: "Flappy Bird For 2 Players",
    description:
      "A desktop-based Flappy Bird game clone for 2 players built with SFML. Features object-oriented design, dynamic scoring, and smooth collision handling. A personal project to enhance C++ and game logic understanding.",
    image: "/projects/Project4.png",
    tags: ["C++", "SFML", "Game Development", "OOP"], // Fixed: removed irrelevant tags
    demoUrl: "#",
    githubUrl: "https://github.com/juni2003/Flappy-Bird-2-player-game",
  },
  {
    id: 5,
    title: "VisiHealth AI",
    description:
      "An explainable Medical Visual Question Answering system that provides answers with visual evidence and medical reasoning. Combines a custom CNN for ROI detection, fine-tuned BioBERT for clinical text understanding, and knowledge graph integration for transparent, clinically meaningful AI decisions.",
    image: "/projects/Visihealth.jpg",
    tags: ["Python", "PyTorch", "BioBERT", "Medical AI", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [projectsGridRef, projectsGridVisible] = useScrollAnimation(0.1);
  const [buttonRef, buttonVisible] = useScrollAnimation(0.3);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div 
        ref={containerRef}
        className={`relative bg-black/70 text-foreground text-center px-8 py-6 rounded-lg shadow-lg mx-auto max-w-6xl my-8 z-1 transition-all duration-1000 ${
          containerVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 delay-200 ${
              headerVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
              Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-white mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project was carefully
              crafted with attention to detail, performance, and user experience.
            </p>
          </div>

          <div 
            ref={projectsGridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
              projectsGridVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className={`group bg-card rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:z-20 -mt-4 cursor-pointer ${
                  projectsGridVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: projectsGridVisible ? `${key * 150 + 600}ms` : '0ms'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} // Added key prop
                        className="px-2 py-1 text-xs text-primary font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-1"> {project.title}</h3>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer" // Added rel attribute
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            ref={buttonRef}
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              buttonVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-6'
            }`}
          >
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer" // Added rel attribute
              href="https://github.com/juni2003"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Modal with enhanced animations */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-card text-foreground p-8 rounded-lg max-w-2xl w-full relative shadow-xl transform transition-all duration-300 scale-100 animate-in slide-in-from-bottom-4">
              <button
                className="absolute top-4 right-4 text-white hover:bg-red-500 hover:text-black p-2 rounded-full transition duration-300 cursor-pointer transform hover:scale-110"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-foreground/70 mb-4">
                <strong className="text-primary">Description: </strong>
                {selectedProject.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer" // Added rel attribute
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 transform hover:scale-125"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" // Added rel attribute
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 transform hover:scale-125"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
