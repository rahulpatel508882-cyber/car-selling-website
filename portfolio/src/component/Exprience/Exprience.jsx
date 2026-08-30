import {
  FaBootstrap,
  FaBug,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaTools,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { VscVm, VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#264DE4" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: FaReact, color: "#38BDF8" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Java", icon: FaJava, color: "#5382A1" },
      { name: "MERN Stack", icon: FaReact, color: "#22C55E" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle SQL", icon: FaDatabase, color: "#F80000" },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Manual Testing", icon: FaBug, color: "#FFB703" },
      { name: "Automation Testing", icon: FaRobot, color: "#22C55E" },
      { name: "Java Automation", icon: FaJava, color: "#5382A1" },
    ],
  },
  {
    title: "Tools & AI",
    items: [
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "EditPlus", icon: FaTools, color: "#38BDF8" },
      { name: "Sublime", icon: FaTools, color: "#FF9800" },
      { name: "Oracle", icon: FaDatabase, color: "#F80000" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git & GitHub", icon: FaGithub, color: "#F1502F" },
      { name: "AI Chatbot", icon: RiRobot2Line, color: "#8B5CF6" },
      { name: "Testing Tools", icon: VscVm, color: "#34D399" },
    ],
  },
];

const timeline = [
  { phase: "SQL", detail: "Building queries, data modeling, and database fundamentals." },
  { phase: "GitHub", detail: "Version control, project tracking, and collaboration workflow." },
  { phase: "Testing", detail: "Manual validation, defect tracking, and automation basics." },
  { phase: "MERN", detail: "Creating full-stack applications with MongoDB, Express, React, and Node." },
];

const Exprience = ({ darkMode }) => {
  const shell = darkMode
    ? "border border-slate-800 bg-slate-900/70 text-slate-100"
    : "border border-slate-200 bg-white/90 text-slate-900";

  return (
    <section id="Skills" className={`mt-8 rounded-4xl p-6 md:p-10 ${shell}`}>
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tools and strengths</h2>
      </div>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400" />
              <h3 className="text-xl font-semibold text-cyan-300">{group.title} Skills</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {group.items.map(({ name, icon: Icon, color }) => (
                <div
                  key={`${group.title}-${name}`}
                  className="group rounded-3xl border border-slate-700 bg-slate-950/40 p-5 shadow-[0_18px_40px_rgba(14,116,144,0.10)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-slate-900 hover:shadow-[0_28px_60px_rgba(34,211,238,0.14)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 transition group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                    <Icon size={28} color={color} />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <FaGitAlt className="text-slate-500" size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold">Learning journey</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-cyan-500 via-emerald-500 to-violet-500 md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((step, index) => (
              <div key={step.phase} className="relative flex items-center md:justify-between">
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                  <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-emerald-500 text-sm font-bold text-slate-950">
                        {index + 1}
                      </span>
                      <span className="text-lg font-semibold text-cyan-300">{step.phase}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-400">{step.detail}</p>
                  </div>
                </div>
                <span className="absolute left-1.5 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-slate-950 bg-cyan-400 md:left-1/2 md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;