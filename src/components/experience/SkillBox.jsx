import { useRef } from "react";

function SkillBox({ box }) {
	const rightContainerRef = useRef(null);
	return (
		<div className="workBox">
			<div className="workHeader">
				<div className="company">
					{" "}
					<div className="year">{box.year}</div>
					<p>{box.name}</p>
				</div>
				<div className="empty"></div>
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
								border: lang.border,
							}}
						>
							{lang.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillBox;
