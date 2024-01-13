import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Parallax from "./components/parallax/Parallax";

const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="About">
				<About />
			</section>
			<Portfolio />
			<section id="Experience">
				<Experience />
			</section>
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
};

export default App;
