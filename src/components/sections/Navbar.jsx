// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   const { t, i18n } = useTranslation("global");
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <a href="#home" className="font-mono text-xl text-blue font-bold">
//             diego<span className="text-lime-600">.tech</span>
//           </a>

//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden "
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               {t("navbar.home")}
//             </a>
//             <a
//               href="#about"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               {t("navbar.about")}
//             </a>
//             <a
//               href="#projects"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               {t("navbar.projects")}
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               {t("navbar.contact")}
//             </a>
//             <div className="flex items-center space-x-2 ml-auto">
//               <button
//                 className="border-2 border-lime-600 text-gray-300 px-1 py-1 cursor-pointer hover:text-white transition-colors"
//                 onClick={() => i18next.changeLanguage("es")}
//               >
//                 ES
//               </button>
//               <button
//                 className="border-2 border-lime-600 text-gray-300 px-1 py-1 cursor-pointer hover:text-white transition-colors"
//                 onClick={() => i18next.changeLanguage("en")}
//               >
//                 EN
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation("global");
  const [language, setLanguage] = useState(i18next.language);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl text-blue font-bold">
            diego<span className="text-lime-600">.tech</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.projects")}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.contact")}
            </a>
            <div className="flex items-center space-x-2 ml-auto">
              <button
                className=" text-gray-300 px-1 py-1 cursor-pointer hover:text-white transition-colors"
                onClick={() => changeLanguage(language === "en" ? "es" : "en")}
              >
                {language === "en" ? "ES" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
