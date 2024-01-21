import { useRef } from "react";

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
					{" "}
					<div className="year">{box.year}</div>
					<p>{box.name}</p>
					<span>
						<hr color="#92888C" />
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
							<div
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
								}}
								// onClick={() => onPress(lang.skillId, lang.experienceId)}
								onClick={handleSkillBoxClick}
							>
								{lang.name}
								<span
									style={{
										borderTop: "3px solid #18000d",
										width: "60%",
										borderTopLeftRadius: 5,
										borderTopRightRadius: 5,
									}}
								></span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default SkillBox;
