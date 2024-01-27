import "./hero.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const textVariants = {
	initial: {
		// x: -500,
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

const skills = ["React ", "Vue ", "Node "];

const Hero = () => {
	const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSkillIndex((prevIndex) =>
				prevIndex === skills.length - 1 ? 0 : prevIndex + 1
			);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h1 variants={textVariants}>
						Web Developer & <br /> Content Creator
					</motion.h1>
					<motion.h2 variants={textVariants}>
						Hi my name is Greg Sypek, I design and create web pages and projects
						with attention to clarity and details.
					</motion.h2>

					<motion.div variants={textVariants} className="buttons">
						<motion.button variants={textVariants}>
							<ScrollLink to="Projects" smooth={true} duration={300}>
								See the Latest Works
							</ScrollLink>
						</motion.button>
						<motion.button variants={textVariants}>
							<ScrollLink to="Contact" smooth={true} duration={500}>
								Contact Me
							</ScrollLink>
						</motion.button>
					</motion.div>
				</motion.div>

				<div></div>
				<motion.div
					className="slidingTextContainer"
					// variants={sliderVariants}
					// initial="initial"
					// animate="animate"
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={{
								opacity: index === currentSkillIndex ? 1 : 0,
								transition: { duration: 1.5, delay: 1.5 },
							}}
							style={{
								display: "inline-block",
								transition: "opacity 1.5s ease-in-out",
							}}
						>
							<strong
								key={index}
								style={{
									display: index === currentSkillIndex ? "block" : "none",
								}}
							>
								{skill}
							</strong>
						</motion.div>
					))}
				</motion.div>
				<div className="imageContainer">
					<img src="/hero.png" alt="me" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
