import { Award, ExternalLink, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    id: 1,
    title: "Build with AI Agentic Applications with LlamaIndex and MCP",
    issuer: "Certificate of Completion",
    file: "/Certifications/CertificateOfCompletion_Build with AI Agentic Applications with LlamaIndex and MCP.pdf",
  },
  {
    id: 2,
    title: "Introduction to AI Orchestration with LangChain and LlamaIndex",
    issuer: "Certificate of Completion",
    file: "/Certifications/CertificateOfCompletion_Introduction to AI Orchestration with LangChain and LlamaIndex.pdf",
  },
  {
    id: 3,
    title: "Deep Learning Certificate",
    issuer: "Coursera",
    file: "/Certifications/Coursera DL Certificate.pdf",
  },
  {
    id: 4,
    title: "Python Certificate",
    issuer: "Coursera",
    file: "/Certifications/Coursera Pyhton Cetificate.pdf",
  },
];

export const CertificationsSection = () => {
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div
        ref={containerRef}
        className={`relative bg-black/70 text-foreground text-center px-8 py-6 rounded-lg shadow-lg mx-auto max-w-6xl my-8 transition-all duration-1000 ${
          containerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div
            ref={headerRef}
            className={`transition-all duration-1000 delay-200 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
              My <span className="text-primary">Certifications</span>
            </h2>

            <p className="text-center text-white mb-12 max-w-2xl mx-auto">
              A collection of certifications and courses that support my
              journey in AI, machine learning, and software development.
            </p>
          </div>

          <div
            ref={cardsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {certifications.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`group bg-card rounded-xl p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  cardsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: cardsVisible
                    ? `${index * 150 + 500}ms`
                    : "0ms",
                }}
              >
                <div className="flex justify-center mb-5">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <Award size={34} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {certificate.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6">
                  {certificate.issuer}
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={17} />
                    View
                  </a>

                  <a
                    href={certificate.file}
                    download
                    className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors duration-300"
                  >
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
