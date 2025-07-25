import { ArrowDown } from "lucide-react"



export const HeroSection = () => {


    return (
        <section 

         id="hero"
         className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-transparent"
         
        >
            <div className="relative bg-black/70 text-white text-center px-8 py-6 rounded-lg shadow-lg mx-auto max-w-4xl my-8 z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Junaid</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Satti</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                       Final-year Computer Science student specializing in full-stack development, React-based frontend and Python-based backend systems, and AI-powered applications.
                        Passionate about building scalable web solutions and intelligent software that solve real-world problems.
                    </p>
                    <div className="py-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>

            </div>
        </section>

    )
}