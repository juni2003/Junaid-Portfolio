import { ThemeToggle } from "@/components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import { LightBackground } from "@/components/LightBackground";
import {Navbar} from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { JourneySection } from "@/components/JourneySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
     <div className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden">


        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Backgrounds */}
        <StarBackground/>
        <LightBackground />


        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}

        <main>
            <HeroSection />
            <AboutSection />
            <JourneySection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer/>
     </div>
    );
};
