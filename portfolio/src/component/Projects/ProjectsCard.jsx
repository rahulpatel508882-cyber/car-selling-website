const ProjectsCard = ({
  title,
  category,
  tag,
  description,
  demoUrl,
  repoUrl,
  tags,
  darkMode,
}) => {
  const cardClass = darkMode
    ? "border border-slate-800 bg-slate-900/70 text-slate-100"
    : "border border-slate-200 bg-white/90 text-slate-900";

  return (
    <article className={`flex h-full flex-col rounded-[1.75rem] border p-5 shadow-lg shadow-slate-950/10 ${cardClass}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {category}
        </span>
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          {tag}
        </span>
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Live Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full border border-cyan-500/40 bg-transparent px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
        >
          Repo
        </a>
      </div>
    </article>
  );
};

export default ProjectsCard;