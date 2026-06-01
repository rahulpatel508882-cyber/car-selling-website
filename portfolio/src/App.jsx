import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Exprience from "./component/Exprience/Exprience";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Exprience/>
      <Projects/>
      <Footer/>
    </div>
  );
}
export default App;