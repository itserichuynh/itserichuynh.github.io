import breadImage from "@/assets/images/jalapeno_cheddar.png";
import cinnamonRollsImage from "@/assets/images/cinnamon_rolls.png";
import hummusImage from "@/assets/images/hummus.png";
import kimchiImage from "@/assets/images/hummus.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "",
    year: 'Baked and "Served"',
    title: "Jalapeño Cheddar Bread Loaf",
    results: [
      {
        title:
          "Developed a same-day jalapeño cheddar loaf (results were immediately consumed)",
      },
    ],
    link: "/projects/jalapeno-cheddar",
    // link: undefined,
    image: breadImage, // replace with your bread photo import
  },
  {
    company: "Unpublished Work",
    year: "Proofing",
    title: "Cinnamon Rolls",
    results: [
      {
        title:
          "Refining a cinnamon roll recipe with generous amount of frosting",
      },
    ],
    link: undefined,
    image: cinnamonRollsImage, // replace with your bread photo import
  },
  {
    company: "Unpublished Work",
    year: "Dialing In",
    title: "Hummus",
    results: [
      {
        title: "Designing a hummus recipe with strong opinions",
      },
    ],
    link: undefined,
    image: hummusImage, // replace with your bread photo import
  },
  {
    company: "Unpublished Work",
    year: "Fermenting",
    title: "Kimchi",
    results: [
      {
        title:
          "Actively fermenting a kimchi recipe with unpredictable outcomes",
      },
    ],
    link: undefined,
    image: kimchiImage, // import when ready
  },
];

export const UnpublishedProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Recipes
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          No deadlines, mostly snacks.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              id={`project${projectIndex}`}
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
                        className="flex gap-2 text-sm md:text-base text-white/65"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link ? (
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Recipe</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="bg-white/10 text-white/50 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-not-allowed border border-white/10"
                      title="Recipe coming soon"
                    >
                      <span>Still Working on Perfecting</span>
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 lg:absolute lg:max-w-[480px] lg:h-auto"
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
