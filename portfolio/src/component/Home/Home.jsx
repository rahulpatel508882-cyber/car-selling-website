import img from "../../assets/img.avif";
import { FaArrowRight } from "react-icons/fa6";

const Home = ({ darkMode }) => {
  const shell = darkMode
    ? "border border-slate-800 bg-slate-900/60 text-slate-100 shadow-2xl shadow-slate-950/30"
    : "border border-slate-200 bg-white/80 text-slate-900 shadow-xl shadow-slate-200/70";

  return (
    <section
      id="Home"
      className={`grid items-center gap-10 rounded-4xl border p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] ${shell}`}
    >
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Full Stack Developer
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Hi, I&apos;m <span className="text-cyan-400">Rahul Patel</span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            I build responsive MERN applications, strengthen my Testing
            skills, and enjoy turning ideas into polished, user-focused products.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="#Projects"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            View Projects
            <FaArrowRight size={14} />
          </a>
          <a
            href="#Footer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Contact Me
          </a>
        </div>
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
            <p className="text-2xl font-bold text-cyan-400">1+</p>
            <p className="text-sm text-slate-400">Years learning</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
            <p className="text-2xl font-bold text-emerald-400">4</p>
            <p className="text-sm text-slate-400">Projects</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4">
            <p className="text-2xl font-bold text-violet-400">4</p>
            <p className="text-sm text-slate-400">Core focus areas</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-4xl bg-linear-to-br from-cyan-500/20 via-emerald-500/15 to-transparent blur-2xl" />
        <img
          src={img}
          alt="Rahul Patel"
          className="h-105 w-full rounded-4xl object-cover shadow-2xl shadow-cyan-900/30"
        />
        <div className="absolute bottom-5 left-5 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-sm">
          MERN • SQL • Testing
        </div>
      </div>
    </section>
  );
};

export default Home;