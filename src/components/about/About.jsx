import "./about.scss";
import about4 from "/about4.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";

function About() {
	const ref = useRef();
	const { width: windowWidth } = useWindowSize();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], //animation, target, animation, -  animation start when target is on the top  and  animation is end wten top of the target reaches start
	});
	const transformText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const transformType =
		// windowWidth < 900 ? { x: transformText } : { y: transformText };
		windowWidth < 900 ? null : { y: transformText };

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
				ref={ref}
				variants={lineVariants}
				initial="initial"
				// animate="animate"
				whileInView="animate"
			>
				<motion.div className="about__box about__box--1" style={transformType}>
					<h1 className="about__heading">About Me</h1>
				</motion.div>
				<motion.div className="about__box about__box--2">
					<motion.img
						className="about__image"
						src={about4}
						alt="mauntain trail sign"
					/>
				</motion.div>
				<motion.p className="about__text about__text--1">
					I am a frontend developer with five years of programming experience,
					specializing in React, React Native, and Vue.js. Lastly I have been
					working as application programmer, using React Native, React and
					Typescript on application for enginerrs, and as junior developer in
					Rzeszów on a big e-commerce app.
					<motion.hr variants={lineVariants}></motion.hr>
				</motion.p>

				<motion.p className="about__text about__text--2">
					I live in a small town of Mielec in Poland. I am a self-taught learner
					who is passionate about computers and coding. In my spare time I love
					listening to progressive rock, reading books and hiking in the
					mountains.
					<motion.hr variants={lineVariants}></motion.hr>
				</motion.p>
				<motion.p className="about__text about__text--3">
					Currently I am looking for a job as a web developer. I am confident
					that my skills and dedication make me an asset to any team. I am
					willing
					<span> to cooperate </span>and continue my adventure with IT and
					develop further in this direction.
					{/* I am willing <span>to cooperate </span>and continue my adventure with
					IT and develop further in this direction. */}
				</motion.p>
				<motion.button className="about__btn btn">
					<ScrollLink to="Contact" smooth={true} duration={500}>
						Contact
					</ScrollLink>
				</motion.button>
			</motion.div>
			<motion.div className="mountains"></motion.div>
		</>
	);
}

export default About;
