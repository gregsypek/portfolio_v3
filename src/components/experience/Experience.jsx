import { useEffect, useRef, useState } from "react";
import "./experience.scss";
import { experience } from "../../data/experience";
import SkillBox from "./SkillBox";

function Experience() {
	const skillColors = [
		{ background: "#8089e6", color: "#000000", border: "#8089e6" },
		{ background: "#8089e6", color: "#000000", border: "#8089e6" },
		{ background: "#10112E", color: "#8089e6", border: "#8089e6" },
		{ background: "#10112E", color: "#8089e6", border: "#8089e6" },
		{ background: "#8089e6", color: "#000000", border: "#8089e6" },
		// { background: "#BDBDBD", color: "#000000", border: "#000000" },
		// { background: "#ffe099", color: "#000000", border: "#000000" },
		// { background: "#10112E", color: "#ffffff", border: "#ffffff" },
		// { background: "#10112E", color: "#ffffff", border: "#ffffff" },
		// { background: "#f3958b", color: "#000000", border: "#000000" },
	];

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * skillColors.length);
		return skillColors[randomIndex];
	};

	const getRandomColumn = () => {
		const randomNumber = Math.random();
		return randomNumber < 0.33
			? 1
			: randomNumber >= 0.33 && randomNumber < 0.66
			? 2
			: 3;
	};

	const [skillBoxes, setSkillBoxes] = useState([]);

	useEffect(() => {
		const newSkillBoxes = experience.map((work, index) => {
			const { name, desc, year, title, languages, border } = work;

			const languageColors = languages.map(() => getRandomColor());

			return {
				id: index,
				languages: languages.map((lang, langIndex) => ({
					name: lang,
					color: languageColors[langIndex].color,
					backgroundColor: languageColors[langIndex].background,
					column: getRandomColumn(),
					row: langIndex + 1,
					border,
				})),
				name,
				desc,
				year,
				title,
			};
		});
		console.log("🚀 ~ newSkillBoxes ~ newSkillBoxes:", newSkillBoxes);
		setSkillBoxes(newSkillBoxes);
	}, []);

	return (
		<div className="experience">
			<div className="headerBox">
				<h1>Skills & Experiences</h1>
			</div>
			{skillBoxes.map((box) => {
				return <SkillBox box={box} key={box.id} />;
			})}
		</div>
	);
}

export default Experience;
