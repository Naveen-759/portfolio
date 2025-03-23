// src/components/About.jsx
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white p-9">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="text-lg text-[#334155] mb-4">
              Hello! I'm Naveen, a passionate full-stack developer with
              expertise in the MERN stack, Java, SQL, and Angular 19. I thrive
              on solving real-world problems through technology and have a
              strong drive to build innovative solutions that make an impact.
            </p>
            <p className="text-lg text-[#334155] mb-4">
              My journey in web development began when I discovered my passion
              for combining creativity with logical problem-solving. I'm
              constantly learning and staying up-to-date with the latest
              technologies and best practices in the industry.
            </p>
            <p className="text-lg text-[#334155] mb-4">
              Over time, I've worked on several projects, including:
              <ul>
                <li>
                  <b>Farmer's Assistant</b> - A MERN stack application that
                  assists farmers in crop selection, fertilizer recommendations,
                  pesticide management, tractor rentals, nursery management, and
                  real-time agricultural market price tracking.
                </li>
                <li>
                  <b>Expense Tracker</b> - Developed both React.js (frontend)
                  and MERN stack (full-stack) versions to help users manage
                  their finances effectively.
                </li>
                <li>
                  <b>Gemini App Clone</b> - Created a replica of Google's Gemini
                  AI-powered app using React and the Gemini API.
                </li>
              </ul>
            </p>
            <p className="text-lg text-[#334155] mb-6">
              I have hands-on experience integrating APIs, handling real-time
              data, and designing responsive and visually appealing UI
              components using Tailwind CSS. I also enjoy experimenting with
              glassmorphism, classic animations, and cohesive UI/UX designs to
              enhance user experiences.
            </p>
            <p className="text-lg text-[#334155] mb-6">
              I'm continuously exploring new technologies and frameworks to
              refine my skills and stay ahead in the ever-evolving tech
              industry. Looking forward to collaborating on exciting projects!
            </p>
            <a
              href="https://drive.google.com/file/d/1Pb4NLzEamw46P57gvne6RRuX05AYPbuX/view?usp=sharing"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition inline-flex items-center"
            >
              <FiDownload className="mr-2" /> Download Resume
            </a>
          </div>
          <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#0f172a]">
              Personal Info
            </h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-semibold w-24">Name:</span>
                <span className="text-[#334155]">Naveen Kumar A M</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Email:</span>
                <span className="text-[#334155]">naveenku759@gmail.com</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Location:</span>
                <span className="text-[#334155]">Bengaluru, India</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Availability:</span>
                <span className="text-green-600 font-medium">
                  Open to opportunities
                </span>
              </li>
            </ul>
            <h3 className="text-xl font-bold mt-6 mb-4 text-[#0f172a]">
              Education
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold">
                Bachelor of Engineering in Computer Science Engineering
              </h4>
              <p className="text-[#334155]">
                Visvesvaraya Technological University, 2021 - 2025
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Relevant Certifications</h4>
              <p className="text-[#334155]">Web Development, React JS, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
