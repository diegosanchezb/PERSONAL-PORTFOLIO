import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-lime-700 to-lime-500 bg-clip-text text-transparent leading-right">
            Hi, I'm Diego Armando
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Third year student of the Bachelor's Degree in Computer Science, and
            JR frontend developer. Lover of technology and design, I am always
            looking for new opportunities to improve my skills. Currently, I am
            open to listen to any kind of proposal that is positive that is
            positive for my career.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-lime-800 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="border border-lime-600/50 text-lime-700 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
