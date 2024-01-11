import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, useTransform } from "framer-motion";

const items = [
	{
		id: 1,
		title: "React Commerce",
		img: "./projects/mjurkowska1.png",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.oris modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.oris modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	},
	{
		id: 2,
		title: "Next.js Blog",
		img: "./projects/mjurkowska2.png",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	},
	{
		id: 3,
		title: "Vanilla JS App",
		img: "./projects/mjurkowska3.png",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.oris modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	},
	{
		id: 4,
		title: "Music App",
		img: "./projects/mjurkowska4.png",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-5, 30]);

	return (
		<section>
			<div className="container">
				{/* <div className="empty"></div> */}
				<div className="wrapper">
					<div className="projectBox">
						<div className="textContainer">
							<div className="textHeader">
								<div className="square">React</div>
								<h4>{item.title}</h4>
							</div>
							<p>{item.desc}</p>
							<button>See Demo</button>
						</div>
						<div className="imageContainer" ref={ref}>
							<div className="buttons">
								<button>X</button>
								<button> V-</button>
								<button>P</button>
							</div>
							<img src={item.img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

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

	return (
		<div className="portfolio" id="Projects">
			<div className="sectionInfo">
				<hr />
				<p>
					{/* Select project from filter list
					<br /> and check it out! */}{" "}
				</p>
			</div>
			<div className="grid">
				<div className="projectsHeader" ref={ref}>
					<div className="headerBox">
						<h1>
							My Websites <br /> & Apps
						</h1>
					</div>
					<div className="projectsFilter">
						<div className="active">All</div>
						<div>React</div>
						<div>React</div>
						<div>React</div>
						<div>2023</div>
						<div>2022</div>
					</div>
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
