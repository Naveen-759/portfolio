// src/components/Hero.jsx
import Profile from "../assets/images/profile.avif";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#f0f9ff] to-white p-9"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-[#0284c7]">Naveen Kumar A M</span>
            </h1>
            <p className="text-xl text-[#334155] mb-8">
              Frontend Developer specializing in building exceptional digital
              experiences
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Contact Me
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Naveen-759/"
                className="text-[#475569] hover:text-[#0284c7] transition-colors duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-kumar-102406229/"
                className="text-[#475569] hover:text-[#0284c7] transition-colors duration-300"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Naveen_Kumar_A_M/"
                className="text-[#475569] hover:text-[#0284c7] transition-colors duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode Logo"
                  className="w-10 h-8"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-[#e0f2fe] rounded-full overflow-hidden border-8 border-white shadow-lg">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-fill"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300.png?text=Your+Image";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
