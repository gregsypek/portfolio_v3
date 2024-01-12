import { useEffect, useRef, useState } from "react";
import "./experience.scss";
import { experience } from "../../data/experience";

function Experience() {
	const skillColors = [
		{ background: "#BDBDBD", color: "#000000", border: "#000000" },
		{ background: "#ffe099", color: "#000000", border: "#000000" },
		{ background: "#10112E", color: "#ffffff", border: "#ffffff" },
		{ background: "#ffffde", color: "#000000", border: "#000000" },
		{ background: "#f18275", color: "#000000", border: "#000000" },
	];

	const getRandomColor = () => {
		const randomIndex = Math.floor(Math.random() * skillColors.length);
		return skillColors[randomIndex];
	};

	const getRandomColumn = () => {
		return Math.random() < 0.5 ? 1 : 2;
	};

	const rightContainerRef = useRef(null);
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
				return (
					<div className="workBox" key={box.id}>
						<div className="workHeader">
							<div className="year">{box.year}</div>
							<p>{box.name}</p>
						</div>
						<div className="workBody">
							<div className="left">{box.desc}</div>
							<div className="right" ref={rightContainerRef}>
								{box.languages.map((lang) => (
									<div
										key={lang.name}
										style={{
											backgroundColor: lang.backgroundColor,
											color: lang.color,
											gridColumn: lang.column,
											gridRow: lang.row,
											outline: lang.border,
										}}
									>
										{lang.name}
									</div>
								))}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Experience;
