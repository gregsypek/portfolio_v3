import "./hero.scss";
import { motion } from "framer-motion";

const skills = ["React ", "Node ", "Vue ", "Javascript"];

const textVariants = {
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
const sliderVariants = {
	initial: {
		x: "150%",
	},
	animate: {
		x: "-220%",

		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			delay: 2,
			// repeatDelay: 2,
			// loop: Infinity,
			duration: 30,
		},
	},
};

const Hero = () => {
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
						I design and create web pages and projects with attention to clarity
						and details.
					</motion.h2>

					<motion.div variants={textVariants} className="buttons">
						<motion.button variants={textVariants}>
							See the Latest Works
						</motion.button>
						<motion.button variants={textVariants}>Contact Me</motion.button>
					</motion.div>
				</motion.div>
			</div>
			<div></div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				{skills?.map((skill) => (
					<strong key={skill}>{skill}</strong>
				))}
			</motion.div>
			<div className="imageContainer">
				<img src="/hero.png" alt="me" />
			</div>
		</div>
	);
};

export default Hero;
