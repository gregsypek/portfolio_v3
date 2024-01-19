import "./about.scss";
import about4 from "/about4.png";
import { motion } from "framer-motion";
// import { useWindowSize } from "react-use";
// import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const About = () => {
	// const transformText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	// const noTransform = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
	// const transformType =
	// 	// windowWidth < 900 ? { x: transformText } : { y: transformText };
	// 	windowWidth < 900 ? noTransform : { y: transformText };

	const lineVariants = {
		initial: {
			x: -500,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	};
	return (
		<>
			<motion.div
				className="about"
				variants={lineVariants}
				initial="initial"
				animate="animate"
			>
				<div className="about__box about__box--1">
					<h1 className="about__heading">About Me</h1>
				</div>
				<div className="about__box about__box--2">
					<img
						className="about__image"
						src={about4}
						alt="mauntain trail sign"
					/>
				</div>
				<div className="about__text about__text--1">
					<p>
						I am a frontend developer with five years of programming experience,
						specializing in React, React Native, and Vue.js. Lastly I have been
						working as application programmer, using React Native, React and
						Typescript on application for enginerrs, and as junior developer in
						Rzeszów on a big e-commerce app.
					</p>
					<motion.hr variants={lineVariants}></motion.hr>
				</div>

				<div className="about__text about__text--2">
					<p>
						I live in a small town of Mielec in Poland. I am a self-taught
						learner who is passionate about computers and coding. In my spare
						time I love listening to progressive rock, reading books and hiking
						in the mountains.
					</p>
					<motion.hr variants={lineVariants}></motion.hr>
				</div>
				<div className="about__text about__text--3">
					<span>
						Currently I am looking for a job as a web developer. I am confident
						that my skills and dedication make me an asset to any team. I am
						willing
					</span>
					<span> to cooperate </span>and continue my adventure with IT and
					develop further in this direction.
				</div>
				<button className="about__btn btn">
					<ScrollLink to="Contact" smooth={true} duration={500}>
						Contact
					</ScrollLink>
				</button>
			</motion.div>
			<div className="mountains"></div>
		</>
	);
};

export default About;
