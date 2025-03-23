// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white py-8 px-9">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Naveen Kumar A M</h2>
            <p className="text-[#cbd5e1]">Frontend Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/Naveen-759/"
              className="bg-[#1e293b] p-2 rounded-full text-white hover:bg-[#0284c7] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-kumar-102406229/"
              className="bg-[#1e293b] p-2 rounded-full text-white hover:bg-[#0284c7] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Naveen_Kumar_A_M/"
              className="bg-[#1e293b] p-2 rounded-full text-white hover:bg-[#0284c7] transition-colors duration-300"
              aria-label="Twitter"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode Logo"
                className="w-10 h-8"
              />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="inline-flex items-center text-[#cbd5e1]">
              Made with <FiHeart className="text-red-500 mx-1" /> {currentYear}
            </p>
          </div>
        </div>

        <div className="border-t border-[#334155] mt-6 pt-6 text-center">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a
                  href="#home"
                  className="text-[#cbd5e1] hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#cbd5e1] hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#cbd5e1] hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#cbd5e1] hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#cbd5e1] hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-[#94a3b8] text-sm">
            &copy; {currentYear} Naveen Kumar A M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
