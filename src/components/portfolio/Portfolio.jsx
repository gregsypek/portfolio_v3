import { useRef } from "react";
import "./portfolio.scss";
// import Line from "../../../public/line.svg";
import { items } from "../../data/items";
import Single from "./Single";
// import { useWindowSize } from "react-use";
const Portfolio = () => {
	const ref = useRef();
	// const { width: windowWidth } = useWindowSize();
	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// 	offset: ["end end", "start start"],
	// });

	// const scaleX = useSpring(scrollYProgress, {
	// 	stiffness: 100,
	// 	damping: 30,
	// });

	// const skills = [
	// 	"JavaScript",
	// 	"React",
	// 	"Node",
	// 	"Php",
	// 	"Wordpress",
	// 	"Redux",
	// 	"Vue",
	// 	"Next",
	// 	"2023",
	// 	"2022",
	// 	"2021",
	// ];

	return (
		<div className="portfolio" id="Projects">
			{/* <div className="sectionInfo">
				<hr />
				<p>
					Select project from filter list
					<br /> and check it out!
				</p>
			</div> */}
			<div className="grid">
				<div className="projectsHeader" ref={ref}>
					<div className="headerBox">
						<h1>My Websites & Apps</h1>
						{/* {windowWidth > 1200 && <img src={Line} alt="line" />} */}
					</div>
					{/* <div className="projectsFilter">
						<div className="active">All</div>
						{skills.map((skill) => (
							<div key={skill}>{skill}</div>
						))}
					</div> */}
					{/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
				</div>
				<div className="image-box">
					{items.map((item) => (
						<Single item={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
