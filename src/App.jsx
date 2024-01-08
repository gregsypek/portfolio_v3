import "./app.scss"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
  <div>
    <section id="Homepage"><Navbar /></section>
    <section id="About Me">Parallax</section>
    <section id="Projects">Services </section>
    <section>Portfolio1 </section>
    <section>POrtfolio2 </section>
    <section id="Experience"> Experience</section>
    <section id="Contact"> Contact</section>
  </div>)

};

export default App;