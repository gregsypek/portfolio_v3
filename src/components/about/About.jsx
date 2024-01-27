import { useRef } from "react";
import "./about.scss";
import about4 from "/about4.png";
import { motion, useInView } from "framer-motion";
// import { useWindowSize } from "react-use";
// import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

const textVariants = {
	initial: {
		x: -200,
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
const lineVariants = {
	initial: {
		x: -300,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.5,
			staggerChildren: 0.2,
		},
	},
};
const About = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "50px" });

	return (
		<>
			<motion.div
				ref={ref}
				className="about"
				variants={textVariants}
				initial="initial"
				// animate="animate"
				whileInView="animate"
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
				<motion.div
					className="about__text about__text--1"
					variants={lineVariants}
					initial="initial"
					whileInView="animate"
					// animate="animate"
				>
					<motion.p variants={textVariants}>
						I am a frontend developer with five years of programming experience,
						specializing in React, React Native, and Vue.js. Lastly I have been
						working as application programmer, using React Native, React and
						Typescript on application for enginerrs, and as junior developer in
						Rzeszów on a big e-commerce app.
					</motion.p>
					<motion.hr variants={lineVariants}></motion.hr>
				</motion.div>

				<div className="about__text about__text--2">
					<motion.p variants={textVariants}>
						I live in a small town of Mielec in Poland. I am a self-taught
						learner who is passionate about computers and coding. In my spare
						time I love listening to progressive rock, reading books and hiking
						in the mountains.
					</motion.p>
					<motion.hr variants={lineVariants}></motion.hr>
				</div>
				<motion.div
					className="about__text about__text--3"
					variants={textVariants}
				>
					<motion.span>
						Currently I am looking for a job as a web developer. I am confident
						that my skills and dedication make me an asset to any team. I am
						willing{" "}
						<motion.span variants={textVariants}> to cooperate </motion.span>and
						continue my adventure with IT and develop further in this direction.
					</motion.span>
				</motion.div>
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
