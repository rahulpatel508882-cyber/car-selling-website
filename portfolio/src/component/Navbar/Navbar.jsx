import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#About" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Projects" },
  { label: "Resume", href: "#Resume" },
  { label: "Contact", href: "#Footer" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#Home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          Rahul<span className="text-cyan-400">Patel</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenu2Line size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;