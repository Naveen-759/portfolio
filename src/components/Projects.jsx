// src/components/Projects.jsx
import { useState } from "react";
import { FiExternalLink, FiGithub, FiChevronRight } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "web", "mobile", "ui/ux"];

  const projects = [
    {
      id: 1,
      title: "Farmer's Assistant",
      description:
        "A MERN stack application that assists farmers in crop selection, fertilizer recommendations, pesticide management, tractor rentals, nursery management, and real-time agricultural market price tracking",
      image: "/src/assets/images/farmer-assistant.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      demoLink: "#",
      codeLink: "https://github.com/Naveen-759/agri-credit",
      category: "web",
    },
    {
      id: 2,
      title: "Blogify(Gemini API Integrated)",
      description:
        " Blogify is a dynamic and user-friendly website designed to empower individuals to share their thoughts, insights, and experiences with the world. Built using the powerful combination of React and Node.js, Blogify offers a seamless and interactive blogging platform for both creators and readers. With the integration of the Gemini API, Blogify enhances the user experience by providing the auto spelling correcting system.",
      image: "/src/assets/images/blogify1.png",
      technologies: ["Ejs", "Node.js"],
      demoLink: "https://youtube-blog-1.onrender.com/",
      codeLink: "https://github.com/Naveen-759/YOUTUBE-BLOG",
      category: "web",
    },
    {
      id: 3,
      title: "Expensee Tracker",
      description:
        " A MERN stack expense tracker application that allows users to manage their finances by adding income and tracking expenses. The app features a user-friendly interface with intuitive navigation, enabling seamless financial tracking. It provides dynamic updates for expense summaries and ensures efficient management of income and expenditure through robust backend functionality.",
      image: "/src/assets/images/expense-tracker.png",
      technologies: ["React", "Tailwind CSS", "Vite"],
      demoLink: "https://expensetracker-ruddy.vercel.app/",
      codeLink: "https://github.com/Naveen-759/expense",
      category: "web",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white p-9">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
          My Projects
        </h2>
        <p className="text-xl font-medium text-gray-600 mb-2">
          Here are some of my recent projects that showcase my skills and
          experience
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium capitalize ${
                  activeCategory === category
                    ? "bg-[#0284c7] text-white"
                    : "bg-white text-[#334155] hover:bg-[#f8fafc]"
                } ${category === "all" ? "rounded-l-md" : ""} ${
                  category === "ui/ux" ? "rounded-r-md" : ""
                } border border-[#0284c7]`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-[#f1f5f9] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400.png?text=${project.title.replace(
                      " ",
                      "+"
                    )}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#334155] mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-[#f0f9ff] text-[#0369a1] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center text-[#0284c7] hover:text-[#075985] font-medium"
                  >
                    <FiExternalLink className="mr-1" /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="inline-flex items-center text-[#0284c7] hover:text-[#075985] font-medium"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center text-[#0284c7] hover:text-[#075985] font-medium"
                  >
                    Details <FiChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
