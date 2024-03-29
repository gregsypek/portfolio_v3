import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Parallax from "./components/parallax/Parallax";

const App = () => {
	return (
		<div>
			<Cursor />
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
			<section id="Footer">
				<Footer />
			</section>
		</div>
	);
};

export default App;
