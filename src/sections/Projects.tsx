import icraImage from "@/assets/images/icra2026.png";
import oceansImage from "@/assets/images/oceans2025.png";
import nercImage from "@/assets/images/nerc2024.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "ICRA",
    year: "2026 (Under Review)",
    title:
      "Spectral Whitening and Confidence Fusion for Robust Sonar Scan Matching",
    results: [
      {
        title:
          "Developed enhanced FS2D pipeline with multi-band spectral whitening",
      },
      {
        title:
          "Improved pose estimation stability in low-visibility environments",
      },
      {
        title:
          "Reduced drift and failure modes in real & simulated sonar mapping",
      },
    ],
    link: "/projects/icra-2026",
    image: icraImage, // replace with your image
  },
  {
    company: "OCEANS",
    year: "2025",
    title: "Sim-to-Real Sonar Object Detection and Tracking",
    results: [
      {
        title:
          "Built multi-modal sonar dataset spanning simulated & real domains",
      },
      {
        title: "Evaluated YOLOv8 and SiamRPN++ for underwater object tracking",
      },
      {
        title:
          "Analyzed modality gaps and transferability across sonar sensors",
      },
    ],
    link: "/projects/oceans-2025",
    image: oceansImage, // replace with your image
  },
  {
    company: "NERC Poster",
    year: "2024",
    title: "Underwater Image Enhancement Using the HoloOcean Simulator",
    results: [
      {
        title:
          "Constructed controlled underwater imaging environments in simulation",
      },
      {
        title:
          "Benchmarked enhancement models under turbidity & lighting shifts",
      },
      {
        title:
          "Improved visual clarity to support downstream underwater perception",
      },
    ],
    link: "/projects/nerc-2024",
    image: nercImage, // replace with your image
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 45}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Project</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
