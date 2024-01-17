import { useRef } from "react";
import { AiOutlineReload } from "react-icons/ai";

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
				{/* <div className="empty"></div> */}
				<button className="empty" role="button">
					<AiOutlineReload size={26} />
				</button>
			</div>
			<div className="workBody">
				<div className="left">{box.desc}</div>
				<div className="right" ref={rightContainerRef}>
					{box.languages.map((lang) => (
						<div
							key={lang.name}
							className="button59"
							style={{
								backgroundColor: lang.backgroundColor,
								color: lang.color,
								gridColumn: lang.column,
								gridRow: lang.row,
								// border: lang.border,
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
