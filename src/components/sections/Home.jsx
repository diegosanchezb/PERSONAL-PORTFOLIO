import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-700 to-lime-500 bg-clip-text text-transparent leading-right">
            {t("home-page.title")}
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {t("home-page.intro")}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-lime-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              {t("home-page.button-projects")}
            </a>
            <a
              href="#contact"
              className="border border-lime-600/50 text-lime-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              {t("home-page.button-contact")}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
