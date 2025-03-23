// src/components/Skills.jsx
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiSettings,
  FiUsers,
  FiGitBranch,
} from "react-icons/fi";

const Skills = () => {
  const technicalSkills = [
    // { name: "HTML5/CSS3", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 92 },
    { name: "API Integration", level: 82 },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayout size={24} />,
      items: [
        // "HTML5/CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <FiDatabase size={24} />,
      items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    },
    {
      title: "DevOps & Tools",
      icon: <FiSettings size={24} />,
      items: ["Git & GitHub", "VS Code", "Webpack", "npm/yarn"],
    },
    {
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      items: ["JavaScript", "TypeScript", "Java", "SQL"],
    },
    {
      title: "Soft Skills",
      icon: <FiUsers size={24} />,
      items: [
        "Communication",
        "Problem-solving",
        "Teamwork",
        "Time Management",
      ],
    },
    {
      title: "Version Control",
      icon: <FiGitBranch size={24} />,
      items: ["Git", "GitHub", "GitLab", "Branching Strategies"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-[#f0f9ff] p-9">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block">
          My Skills
        </h2>
        <p className="text-xl font-medium text-gray-600 mb-2">
          Here are my technical and non-technical skills that I've developed
          over the years
        </p>

        {/* Skill Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technical Proficiency
          </h3>
          <div className="max-w-3xl mx-auto grid gap-4">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-[#075985]">
                    {skill.name}
                  </span>
                  <span className="text-[#0284c7]">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#bae6fd] rounded-full h-2.5">
                  <div
                    className="bg-[#0284c7] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4 text-[#0284c7]">
                {category.icon}
                <h3 className="ml-2 text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#38bdf8] rounded-full mr-2"></span>
                    <span className="text-[#0369a1]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
