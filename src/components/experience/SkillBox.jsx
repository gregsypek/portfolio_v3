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
					<span>
						<hr color="#92888C" />
					</span>
				</div>
			</div>
			<div className="workBody">
				<div className="left">{box.desc}</div>
				<div className="right" ref={rightContainerRef}>
					{box.languages.map((lang) => (
						<div
							key={lang.name}
							className="button60"
							// data-shadow={`${lang.color}`}
							// className={`button60(${lang.border})`}
							style={{
								backgroundColor: lang.backgroundColor,
								color: lang.color,
								gridColumn: lang.column,
								gridRow: lang.row,
								display: "flex",
								flexDirection: "column",
								gap: 5,
							}}
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
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillBox;
