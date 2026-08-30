import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaDownload, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const sectionClass = darkMode
    ? "border border-slate-800 bg-slate-900/80 text-slate-100"
    : "border border-slate-200 bg-white/90 text-slate-900";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending the message.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer id="Footer" className={`mt-8 rounded-4xl p-6 md:p-10 ${sectionClass}`}>
      <section id="Resume" className="mb-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Resume
            </p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">Download my latest resume</h3>
          </div>

          <a
            href="https://flowcv.com/resume-builder"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <FaDownload size={14} />
            Download Resume
          </a>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Let&apos;s connect</h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-400">
            I&apos;m open to interesting projects, learning collaborations, and opportunities where I can apply my MERN, SQL, and testing skills.
          </p>

          <div className="mt-6 space-y-3 text-sm md:text-base">
            <a
              href="https://github.com/rahulpatel508882-cyber"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-3 transition hover:border-cyan-400/60"
            >
              <FaGithub size={18} className="text-cyan-400" />
              <span>rahulpatel508882-cyber</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-patel-721512307"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-3 transition hover:border-cyan-400/60"
            >
              <CiLinkedin size={18} className="text-cyan-400" />
              <span>rahul-patel-721512307</span>
            </a>
            <a
              href="mailto:rahulpatel508882@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-3 transition hover:border-cyan-400/60"
            >
              <MdOutlineEmail size={18} className="text-cyan-400" />
              <span>rahulpatel508882@gmail.com</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-700 bg-slate-950/30 p-5 shadow-[0_25px_60px_rgba(14,116,144,0.18)] transform-gpu transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(16,185,129,0.14)]">
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                placeholder="Tell me about your project or opportunity"
              />
            </div>
          </div>

          {status.message && (
            <p
              className={`mt-4 text-sm ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;