import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/sanchez-diego/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-800 hover:text-lime-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) transition"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://www.instagram.com/diesanchezb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-800 hover:text-lime-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) transition"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="https://wa.me/542284522717"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-800 hover:text-lime-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) transition"
          >
            <FaWhatsapp size={26} />
          </a>
          <a
            href="mailto:sanchezbrisadiego@gmail.com"
            rel="noopener noreferrer"
            className="text-lime-800 hover:text-lime-600 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4) transition"
          >
            <FaEnvelope size={26} />
          </a>
        </div>
        <p className="text-lime-600 text-m">
          © 2025 Diego Armando Sánchez Brisa. All rights reserved.
        </p>
      </div>
    </section>
  );
};
