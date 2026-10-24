import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  GraduationCap,
  MapPin,
  X,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const journeyItems = [
  {
    id: 1,
    type: "education",
    period: "Sep 2022 — May 2026",
    dateLabel: "Sep 2022",
    role: "Bachelor of Science in Computer Science",
    company: "Bahria University, Islamabad Campus",
    summary:
      "Built a strong foundation in computer science, software engineering, artificial intelligence, and full-stack development.",
    details:
      "Completed a Bachelor of Science in Computer Science while developing practical experience in full-stack development, machine learning, artificial intelligence, databases, software engineering, and system design. This academic foundation supported my transition into professional AI and full-stack engineering roles.",
    location: "Islamabad, Pakistan",
    achievement: "CGPA: 3.28",
    technologies: [
      "Computer Science",
      "Software Engineering",
      "Artificial Intelligence",
      "Databases",
    ],
  },
  {
    id: 2,
    type: "experience",
    period: "Jun 2025 — Aug 2025",
    dateLabel: "Jun 2025",
    role: "Artificial Intelligence Intern",
    company: "SoftBox Technologies",
    summary:
      "Worked on multimodal medical AI systems using ETL pipelines, BioBERT, PyTorch, RAG, and vector indexing.",
    details:
      "Engineered automated ETL data pipelines and integrated domain-specific language models, including BioBERT and PyTorch-based components, to process multimodal visual and textual data for Medical Visual Question Answering. Also worked on production RAG pipelines and vector indexing workflows to improve retrieval accuracy and multi-step reasoning.",
    location: "Remote",
    achievement: "Medical AI and RAG Engineering",
    technologies: [
      "Python",
      "PyTorch",
      "BioBERT",
      "RAG",
      "Vector Databases",
      "ETL Pipelines",
    ],
  },
  {
    id: 3,
    type: "experience",
    period: "Jul 2025 — Mar 2026",
    dateLabel: "Jul 2025",
    role: "Application QA & Full-Stack Technical Consultant",
    company: "Upwork — International Clients",
    summary:
      "Tested and improved six mobile applications across functional, UI/UX, workflow, and stability requirements.",
    details:
      "Collaborated directly with international clients and developers across two long-term contracts spanning nine months. Performed daily longitudinal testing, edge-case debugging, workflow verification, UI/UX testing, and stability testing across six mobile applications. Authored diagnostic reports and feature improvement recommendations, earning 5.0 and 4.0 client ratings.",
    location: "Remote",
    achievement: "5.0 and 4.0 Client Ratings",
    technologies: [
      "Application QA",
      "UI/UX Testing",
      "Regression Testing",
      "Debugging",
      "Technical Documentation",
    ],
  },
  {
    id: 4,
    type: "experience",
    period: "Aug 2025 — Nov 2025",
    dateLabel: "Aug 2025",
    role: "Machine Learning Fellow",
    company: "Buildables",
    summary:
      "Built an Agentic AI Smart Farming Advisor using RAG, vector databases, APIs, and intelligent semantic routing.",
    details:
      "Completed an intensive three-month engineering fellowship focused on Agentic AI workflows, LLM orchestration, MCP integrations, and backend APIs. Developed a multi-tool Smart Farming Advisor that achieved 99.19% accuracy using RAG pipelines, vector databases, REST APIs, and automated data processing. Also engineered an intelligent LLM semantic router that achieved 100% automated intent classification.",
    location: "Remote",
    achievement: "99.19% Model Accuracy",
    technologies: [
      "Agentic AI",
      "RAG",
      "LLM Orchestration",
      "MCP",
      "Vector Databases",
      "REST APIs",
    ],
  },
  {
    id: 5,
    type: "experience",
    period: "Sep 2026 — Present",
    dateLabel: "Sep 2026",
    role: "Associate AI & Full-Stack Solutions Engineer",
    company: "AKSIT Global (Private) Limited",
    summary:
      "Leading technical pre-sales, architecture scoping, and AI/full-stack solution design for international clients.",
    details:
      "Work directly with the CEO and executive leadership to establish the company’s international technical presence, agency architecture, and engineering portfolio on Upwork. Lead technical pre-sales, system architecture scoping, and client requirement discovery for MERN, Next.js, FastAPI, RAG, and Agentic AI projects. Engineer technical proposals, project roadmaps, and system architecture designs for international client bids.",
    location: "Remote",
    achievement: "Current Role",
    technologies: [
      "MERN",
      "Next.js",
      "FastAPI",
      "RAG Systems",
      "Agentic AI",
      "System Architecture",
    ],
    current: true,
  },
];

const getItemIcon = (type) => {
  return type === "education" ? GraduationCap : BriefcaseBusiness;
};

export const JourneySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [containerRef, containerVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [timelineRef, timelineVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <section id="journey" className="relative px-4 py-24">
      <div
        ref={containerRef}
        className={`relative mx-auto my-8 max-w-6xl rounded-lg bg-black/70 px-5 py-8 text-foreground shadow-lg transition-all duration-1000 md:px-8 ${
          containerVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div
            ref={headerRef}
            className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-1000 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4 text-primary shadow-[0_0_25px_rgba(234,88,12,0.2)]">
                <Building2 size={32} />
              </div>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              My Professional Story
            </p>

            <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
              From Student to{" "}
              <span className="text-primary">Solutions Engineer</span>
            </h2>

            <p className="mx-auto max-w-2xl text-white/80">
              A visual journey through my academic foundation, AI experience,
              client-facing work, and current role building intelligent
              full-stack solutions.
            </p>
          </div>

          <div
            ref={timelineRef}
            className={`relative transition-all duration-1000 ${
              timelineVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main timeline line */}
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {journeyItems.map((item, index) => {
                const ItemIcon = getItemIcon(item.type);
                const isRightSide = index % 2 !== 0;

                return (
                  <div
                    key={item.id}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isRightSide ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-[0_0_20px_rgba(234,88,12,0.7)] md:left-1/2">
                      <ItemIcon size={17} />
                    </div>

                    {/* Timeline card */}
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className={`group ml-12 w-full rounded-2xl border border-white/10 bg-card/90 p-6 text-left shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] md:ml-0 md:w-[43%] ${
                        item.current
                          ? "border-primary/60 md:w-[48%]"
                          : index === 0 || index === 4
                            ? "md:w-[48%]"
                            : "md:w-[40%]"
                      }`}
                      style={{
                        transitionDelay: `${index * 120}ms`,
                      }}
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <CalendarDays size={14} />
                          {item.period}
                        </span>

                        {item.current && (
                          <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mb-3 flex items-start gap-3">
                        <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary transition-transform duration-300 group-hover:rotate-6">
                          <ItemIcon size={20} />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white md:text-xl">
                            {item.role}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-primary">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-6 text-white/75">
                        {item.summary}
                      </p>

                      <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <span className="text-xs text-white/50">
                          {item.dateLabel}
                        </span>

                        <span className="text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                          Click for details →
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm italic text-white/60">
              Every stage added a new layer to the way I build technology.
            </p>
          </div>
        </div>
      </div>

      {/* Details modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-primary/30 bg-card p-6 text-left shadow-[0_0_50px_rgba(234,88,12,0.2)] md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition-colors hover:bg-red-500 hover:text-white"
              aria-label="Close journey details"
            >
              <X size={22} />
            </button>

            <div className="mb-6 flex items-start gap-4 pr-8">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                {selectedItem.type === "education" ? (
                  <GraduationCap size={28} />
                ) : (
                  <BriefcaseBusiness size={28} />
                )}
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">
                  {selectedItem.period}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {selectedItem.role}
                </h3>

                <p className="mt-1 font-medium text-white/70">
                  {selectedItem.company}
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <CalendarDays size={17} />
                  <span className="text-sm font-semibold">Timeline</span>
                </div>
                <p className="text-sm text-white/75">{selectedItem.period}</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <MapPin size={17} />
                  <span className="text-sm font-semibold">Location</span>
                </div>
                <p className="text-sm text-white/75">{selectedItem.location}</p>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Key Highlight
              </p>
              <p className="text-lg font-semibold text-white">
                {selectedItem.achievement}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-bold text-white">
                What I Worked On
              </h4>

              <p className="leading-7 text-white/75">{selectedItem.details}</p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-white">
                Skills & Technologies
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedItem.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
