import { useEffect, useState } from "react";
import "./experience.scss";
import { experience } from "../../data/experience";
import SkillBox from "./SkillBox";
import { useWindowSize } from "react-use";

function Experience() {
	const { width: windowWidth } = useWindowSize();

	const skillColors = [
		{ background: "#675C83", color: "#22183f", border: "#8089e6" },
		{ background: "#272145", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#5E3F60", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#BD838B", color: "#22183f", border: "#8089e6" },
		{ background: "#593766", color: "black", border: "#8089e6" },
	];

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * skillColors.length);
		return skillColors[randomIndex];
	};

	// const getRandomColumn = () => {
	// 	const randomNumber = Math.random();
	// 	return randomNumber < 0.33
	// 		? 1
	// 		: randomNumber >= 0.33 && randomNumber < 0.66
	// 		? 2
	// 		: 3;
	// };
	const getRandomColumn = (maxColumn) => {
		const randomNumber = Math.random();
		const columns = Array.from({ length: maxColumn }, (_, index) => index + 1);

		const randomIndex = Math.floor(randomNumber * columns.length);
		return columns[randomIndex];
	};
	const [skillBoxes, setSkillBoxes] = useState([]);

	useEffect(() => {
		const newSkillBoxes = experience.map((work, index) => {
			const { name, desc, year, title, languages, border } = work;
			console.log("🚀 ~ newSkillBoxes ~ border:", border);

			const languageColors = languages.map(() => getRandomColor());

			return {
				id: index,
				languages: languages.map((lang, langIndex) => ({
					name: lang,
					color: languageColors[langIndex].color,
					backgroundColor: languageColors[langIndex].background,
					column: windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
					row: langIndex + 1,
					border: lang.border,
				})),
				name,
				desc,
				year,
				title,
			};
		});
		console.log("🚀 ~ newSkillBoxes ~ newSkillBoxes:", newSkillBoxes);
		setSkillBoxes(newSkillBoxes);
	}, [windowWidth]);

	return (
		<div className="experience">
			<div className="headerBox">
				<h1>Skills & Experiences</h1>
				{/* <img src={Line} alt="line" /> */}
			</div>
			{skillBoxes.map((box) => {
				return <SkillBox box={box} key={box.id} />;
			})}
		</div>
	);
}

export default Experience;
