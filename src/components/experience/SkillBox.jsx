import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillsVariants = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	animate: {
		y: 0,
		scale: 1,

		opacity: 1,
		transition: {
			duration: 0.6,
			staggerChildren: 0.2,
		},
	},
};

function SkillBox({ box, onClick }) {
	const handleSkillBoxClick = () => {
		// Dodaj tutaj dodatkową logikę lub przekazanie informacji związanej z kliknięciem
		onClick(box);
	};
	const rightContainerRef = useRef(null);
	return (
		<div className="workBox">
			<div className="workHeader">
				<div className="company">
					<div className="year">{box.year}</div>
					<p>{box.name}</p>
					<span>
						{/* Languages */}
						{/* <hr color="#92888C" /> */}
					</span>
				</div>
			</div>
			<div className="workBody">
				<div className="left">{box.desc}</div>
				<div className="right" ref={rightContainerRef}>
					{box.languages.map((lang) => {
						// console.log("🚀 ~ {SkillBox ~ lang:", lang);
						const { background, color, border } = lang.colors;

						return (
							<motion.div
								variants={skillsVariants}
								initial="initial"
								// animate="animate"
								// animate={isInView && "animate"}
								whileInView="animate"
								key={lang.name}
								className="button60"
								// data-shadow={`${lang.color}`}
								// className={`button60(${lang.border})`}
								style={{
									backgroundColor: background,
									color: color,
									gridColumn: lang.column,
									gridRow: lang.row,
									display: "flex",
									flexDirection: "column",
									gap: 5,
									transition: "all 0.6s ease-in-out",
								}}
								// onClick={() => onPress(lang.skillId, lang.experienceId)}
								onClick={handleSkillBoxClick}
							>
								{lang.name}
								{/* <motion.span
									variants={skillsVariants}
									style={{
										borderTop: "3px solid #18000d",
										width: "60%",
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,
									}}
								></motion.span> */}
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SkillBox;
