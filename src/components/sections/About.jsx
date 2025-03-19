import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwindcss",
    "NextUI",
    "Next.js",
    "Node.js",
  ];
  const backendSkills = [
    "PostgreSQL",
    "Supabase",
    "Github",
    "React Router",
    "Zod",
    "Zustand",
    "EmailJS",
  ];

  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-700 bg-clip-text text-transparent to-lime-500 text-center">
            {t("about-me.title")}
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{t("about-me.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-lime-600/10 text-lime-600 py-1 px-3 rounded-full text-sm hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                🏫{t("about-me.education-title")}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>{t("about-me.education")}</strong>
                </li>
                <li>{t("about-me.coursework")}</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼{t("about-me.work-title")}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {t("about-me.work-position")}
                  </h4>
                  <p>{t("about-me.work")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
