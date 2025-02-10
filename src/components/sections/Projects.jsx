import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-700 bg-clip-text text-transparent to-lime-500 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Website for my personal portfolio
              </h3>
              <p className="text-gray-400 mb-4">
                A personal portfolio website showcasing my work as a Frontend
                Developer. Designed with a clean and modern UI, it highlights my
                projects, skills, and experience. Built with a focus on
                responsiveness and performance to ensure a smooth user
                experience across all devices. It also reflects my passion for
                creating intuitive and visually appealing web applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "Tailwindcss", "EmailJS"].map(
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
                  href="https://github.com/diegosanchezb/PERSONAL-PORTFOLIO"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Web for eCommerce</h3>
              <p className="text-gray-400 mb-4">
                A modern and responsive e-commerce website for a burger
                restaurant, designed to provide a seamless ordering experience.
                Features include an interactive menu, product customization, and
                a simple checkout process. Built with a focus on usability and
                performance to try and improve the customer experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "React Router", "Tailwindcss"].map(
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
                  href="https://github.com/diegosanchezb/MANILA-BURGERS"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CRM for marine port</h3>
              <p className="text-gray-400 mb-4">
                A custom CRM designed for the Port of Mar del Plata, one of the
                largest ports in Argentina. The system facilitates the
                management of ship arrivals and departures, documenting all
                relevant details, such as the number of people onboard and their
                roles, as well as any incidents or events that occurred during
                their stay.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "JavaScript",
                  "React",
                  "Tailwindcss",
                  "NextUI",
                  "PostgreSQL",
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
                  View project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Various projects</h3>
              <p className="text-gray-400 mb-4">
                A collection of projects built while following a course, aimed
                at reinforcing my frontend development skills. I continuously
                update and refine these projects to stay up to date with modern
                technologies and best practices, ensuring constant learning and
                improvement. These projects allow me to experiment with new
                concepts and explore creative solutions. Each project challenges
                me to think critically and improve my technical expertise.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "Tailwindcss"].map((tech, key) => (
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
                  href="https://github.com/diegosanchezb/PROJECTS-REACT"
                  className="text-lime-400 hover:text-lime-300 transition-colors my-4"
                >
                  View project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
