import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
	return (
		<div>
			<section id="Homepage">
				<Navbar />
				<Hero />
			</section>
			<section id="About">
				{/* <Parallax type="services" /> */}
				<About />
			</section>
			<section id="Projects">
				<Parallax type="portfolio" />{" "}
			</section>
			<section>Portfolio1 </section>
			<section>POrtfolio2 </section>
			<section id="Experience"> Experience</section>
			<section id="Contact"> Contact</section>
		</div>
	);
};

export default App;
