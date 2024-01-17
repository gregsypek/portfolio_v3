import { useEffect, useState } from "react";
import "./experience.scss";
import { experience } from "../../data/experience";
import SkillBox from "./SkillBox";
import Line from "../../../public/line.svg";
import { AiOutlineReload } from "react-icons/ai";

function Experience() {
	const skillColors = [
		{ background: "#675C83", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#272145", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#10112c", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#343d9a", color: "#F9ECDC", border: "#8089e6" },
		{ background: "#593766", color: "#F9ECDC", border: "#8089e6" },
		// { background: "#141543", color: "#8089e6", border: "#8089e6" },
		// { background: "#16173c", color: "#8089e6", border: "#8089e6" },
		// { background: "#10112c", color: "#8089e6", border: "#8089e6" },
		// { background: "#0c0d23", color: "#8089e6", border: "#8089e6" },
		// { background: "#10112E", color: "#8089e6", border: "#8089e6" },
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
				{/* <img src={Line} alt="line" /> */}
			</div>
			{skillBoxes.map((box) => {
				return <SkillBox box={box} key={box.id} />;
			})}
		</div>
	);
}

export default Experience;
