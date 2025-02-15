import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-700 bg-clip-text text-transparent to-lime-500 text-center">
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.title-project-1")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.description-project-1")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "JavaScript",
                  "React",
                  "Tailwindcss",
                  "EmailJS",
                  "Github",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="blank"
                  href="https://github.com/diegosanchezb/PERSONAL-PORTFOLIO"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  {t("projects.button-view-project")}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.title-project-2")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.description-project-2")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "JavaScript",
                  "React",
                  "React Router",
                  "Tailwindcss",
                  "Github",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="blank"
                  href="https://github.com/diegosanchezb/MANILA-BURGERS"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  {t("projects.button-view-project")}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.title-project-3")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.description-project-3")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "JavaScript",
                  "React",
                  "Tailwindcss",
                  "NextUI",
                  "PostgreSQL",
                  "Github",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  {t("projects.button-view-project")}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {t("projects.title-project-4")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.description-project-4")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "Tailwindcss", "Github"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="blank"
                  href="https://github.com/diegosanchezb/PROJECTS-REACT"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  {t("projects.button-view-project")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
