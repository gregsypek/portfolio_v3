import { useEffect, useState } from "react";
import "./experience.scss";
import { experience } from "../../data/experience";

import SkillBox from "./SkillBox";
import { useWindowSize } from "react-use";

function Experience() {
	const { width: windowWidth } = useWindowSize();
	const [skillBoxes, setSkillBoxes] = useState([]);
	const skillColors = [
		{ background: "#675C83", color: "#22183f", border: "#8089e6" },
		{ background: "#272145", color: "#D2D2D2", border: "#8089e6" },
		{ background: "#5E3F60", color: "#D2D2D2", border: "#8089e6" },
		{ background: "#BD838B", color: "#22183f", border: "#8089e6" },
		{ background: "#593766", color: "black", border: "#8089e6" },
	];

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * skillColors.length);
		return skillColors[randomIndex];
	};

	const getRandomColumn = (maxColumn) => {
		const randomNumber = Math.random();
		const columns = Array.from({ length: maxColumn }, (_, index) => index + 1);

		const randomIndex = Math.floor(randomNumber * columns.length);
		return columns[randomIndex];
	};

	const colorSet = (skills) => {
		return skills.map(() => getRandomColor());
	};

	const skillSet = (skills) => {
		const languageColors = colorSet(skills);

		const test = skills.map((name, langIndex) => {
			return {
				skillId: langIndex,
				name,
				colors: languageColors[langIndex],
				// backgroundColor: languageColors[langIndex].background,
				column: windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
				row: langIndex + 1,
				// border: lang.border,
			};
		});
		return test;
	};

	const newBoxSkill = (work) => {
		// console.log("🚀 ~ setBoxSkill ~ work:", work);
		const { name, desc, year, title, languages, id } = work;

		const boxSkill = {
			id,
			languages: skillSet(languages),
			name,
			desc,
			year,
			title,
		};

		return boxSkill;
	};

	useEffect(() => {
		const newSkillBoxes = [];
		experience.map((work) => {
			newSkillBoxes.push(newBoxSkill(work, work.id));
		});
		if (newSkillBoxes.length) {
			setSkillBoxes(newSkillBoxes);
		}
	}, []);

	const handleSkillBoxClick = (clickedBox) => {
		const languageColors = colorSet(clickedBox.languages);

		const updatedSkillBoxes = skillBoxes.map((box) => {
			if (box.id === clickedBox.id) {
				return {
					...clickedBox,
					languages: clickedBox.languages.map((l, index) => ({
						...l,
						colors: languageColors[index],
						column:
							windowWidth > 1000 ? getRandomColumn(3) : getRandomColumn(2),
						row: index + 1,
					})),
				};
			} else {
				return box;
			}
		});

		setSkillBoxes(updatedSkillBoxes);
	};

	return (
		<div className="experience">
			<div className="headerBox">
				{windowWidth < 1000 ? (
					<h1>Experiences</h1>
				) : (
					<h1>Experiences & Skills</h1>
				)}
				{/* <h1>Experiences{windowWidth < 800 && <br />} & Skills</h1> */}
			</div>
			{skillBoxes.map((box) => {
				return (
					<SkillBox
						box={box}
						key={box.id}
						onClick={() => handleSkillBoxClick(box)}
					/>
				);
			})}
		</div>
	);
}

export default Experience;
