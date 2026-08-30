import Aboutimg from "../../assets/animated-coder_1060575-1212.avif";
import { FaArrowRight } from "react-icons/fa6";

const About = ({ darkMode }) => {
  const shell = darkMode
    ? "border border-slate-800 bg-slate-900/70 text-slate-100"
    : "border border-slate-200 bg-white/90 text-slate-900";

  const interests = [
    "SQL learning",
    "Testing concepts",
    "GitHub project management",
    "MERN stack exploration",
  ];

  return (
    <section id="About" className={`mt-8 rounded-4xl p-6 md:p-10 ${shell}`}>
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">My background</h2>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src={Aboutimg}
          alt="Rahul Patel"
          className="h-full w-full rounded-3xl border border-slate-700 object-cover shadow-2xl shadow-cyan-950/20"
        />

        <div className="space-y-6">
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            I am Rahul Patel, an Information Technology graduate (2025) with a
            strong interest in full‑stack web development. I have built
            practical projects in SQL, software testing, GitHub collaboration,
            and the MERN stack, combining my engineering background with
            hands‑on coding experience. My focus is on creating clean, scalable
            applications and continuously learning modern tools to deliver
            impactful solutions.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Learning path",
                body: "I am improving my understanding of backend logic, databases, and app architecture through project-based learning.",
              },
              {
                title: "Core interests",
                body: "My current focus is SQL learning, testing concepts, MERN stack explorationand using GitHub as a structured workflow for version control and project management.",
              },
              {
                title: "Career direction",
                body: "I am preparing to build technical skills in software development and testing while continuing my studies and practical learning.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-950/30 p-4"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                  <FaArrowRight size={12} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;