import "./about.scss";
import about4 from "/about4.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";
import { useRef } from "react";

function About() {
	const ref = useRef();
	const { width: windowWidth } = useWindowSize();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], //animation, target, animation, -  animation start when target is on the top  and  animation is end wten top of the target reaches start
	});
	const transformText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const transformType =
		windowWidth < 900 ? { x: transformText } : { y: transformText };

	return (
		<div className="about" ref={ref}>
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
				<hr />
			</motion.p>

			<motion.p className="about__text about__text--2">
				I live in a small town of Mielec in Poland. I am a self-taught learner
				who is passionate about computers and coding. In my spare time I love
				listening to progressive rock, reading books and hiking in the
				mountains.
				<hr />
			</motion.p>
			<motion.p className="about__text about__text--3">
				I am willing <span>to cooperate </span>and continue my adventure with IT
				and develop further in this direction.
			</motion.p>
			<motion.button className="about__btn btn">Contact</motion.button>
			<motion.div className="mountains"></motion.div>
		</div>
	);
}

export default About;
