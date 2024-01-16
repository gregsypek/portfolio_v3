import { useRef } from "react";
import "./portfolio.scss";

import { items } from "../../data/items";
import Single from "./Single";

const Portfolio = () => {
	const ref = useRef();

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
						<svg
							width="555"
							height="4"
							viewBox="0 0 555 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 2H314"
								stroke="#FCECDD"
								strokeWidth="2"
								strokeLinecap="round"
							/>
							<path
								d="M358 2H554"
								stroke="#FCECDD"
								strokeWidth="3"
								strokeLinecap="round"
							/>
							<path
								d="M326 2H344"
								stroke="#655A84"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>
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
