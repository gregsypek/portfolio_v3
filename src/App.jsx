import "./app.scss";
import About from "./components/about/About";
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
				{/* <Parallax type="services" /> */}
				<About />
			</section>
			{/* <section id="Projects"> */}
			{/* <Parallax type="portfolio" />{" "} */}
			{/* <Services /> */}
			{/* <section id="Projects"> */}
			<Portfolio />
			{/* </section> */}
			{/* </section> */}
			<section id="Experience">
				<Experience />
			</section>
			<section id="Contact"> Contact</section>
		</div>
	);
};

export default App;
