import ProjectsCard from "./ProjectsCard";

const projectList = [
  {
    title: "Car Selling Website",
    category: "MERN",
    tag: "Live",
    description:
      "A complete car buying and selling interface with a modern UI, responsive design, and catalog-driven marketplace flow.",
    demoUrl: "https://car-selling-website.vercel.app",
    repoUrl: "https://github.com/rahulpatel508882-cyber/car-selling-website",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    tag: "Showcase",
    description:
      "A personal portfolio built to highlight projects, skills, resume access, and contact information in a clean professional layout.",
    demoUrl: "https://rahulpatel508882-cyber.github.io",
    repoUrl: "https://github.com/rahulpatel508882-cyber",
    tags: ["React", "Tailwind", "UI/UX"],
  },
  {
    title: "Library Management System",
    category: "MERN",
    tag: "Demo",
    description:
      "A library-focused web application for managing books, users, categories, and portal-based browsing with a streamlined dashboard.",
    demoUrl: "https://library-management-demo.onrender.com",
    repoUrl: "https://github.com/rahulpatel508882-cyber",
    tags: ["Express", "MongoDB", "CRUD"],
  },
  {
    title: "SQL Practice Repository",
    category: "SQL",
    tag: "Queries",
    description:
      "A practical SQL learning project containing query exercises, table design samples, and beginner database practice examples.",
    demoUrl: "https://github.com/rahulpatel508882-cyber",
    repoUrl: "https://github.com/rahulpatel508882-cyber",
    tags: ["SQL", "Database", "Practice"],
  },
  {
    title: "Manual Test Case Suite",
    category: "Testing",
    tag: "QA",
    description:
      "A structured manual testing portfolio covering requirement validation, test scenarios, bug reporting, and edge-case checks.",
    demoUrl: "https://github.com/rahulpatel508882-cyber",
    repoUrl: "https://github.com/rahulpatel508882-cyber",
    tags: ["Test Cases", "Bug Reports", "Validation"],
  },
  {
    title: "Automation Script Starter",
    category: "Testing",
    tag: "Automation",
    description:
      "A beginner automation project using browser automation concepts to validate workflows, forms, and repeatable user journeys.",
    demoUrl: "https://github.com/rahulpatel508882-cyber",
    repoUrl: "https://github.com/rahulpatel508882-cyber",
    tags: ["Playwright", "Selenium", "QA"],
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section id="Projects" className="mt-8 rounded-4xl p-6 md:p-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">My work and practice</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-right">
          Selected MERN, and testing projects that reflect my progress in application development and quality assurance.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projectList.map((project) => (
          <ProjectsCard key={project.title} {...project} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
};

export default Projects;