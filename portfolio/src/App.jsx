import { useState } from "react";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Exprience from "./component/Exprience/Exprience";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Chatbot from "./component/Chatbot/Chatbot";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-100 text-slate-900"
      }
    >
      <div className="bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_30%)]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <Home darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Exprience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </main>
        <Chatbot darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;