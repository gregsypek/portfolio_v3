import { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
// import Line from "../../../public/line.svg";
import { items } from "../../data/items";
import Single from "./Single";
import { useWindowSize } from "react-use";

const Portfolio = () => {
	const lastItemRef = useRef(null);
	const [isHeaderSticky, setIsHeaderSticky] = useState(true);
	const [lastItemRendered, setLastItemRendered] = useState(false);
	// Ustaw wartość początkową zgodnie z Twoimi potrzebami
	const ref = useRef();
	const { width: windowWidth } = useWindowSize();

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		([entry]) => {
	// 			if (entry.isIntersecting) {
	// 				setIsHeaderSticky(false);
	// 			} else setIsHeaderSticky(true);
	// 		},
	// 		{ threshold: 1 }
	// 	);

	// 	if (lastItemRef.current) {
	// 		observer.observe(lastItemRef.current);
	// 	}

	// 	return () => {
	// 		if (lastItemRef.current) {
	// 			observer.unobserve(lastItemRef.current);
	// 		}
	// 	};
	// }, []);

	return (
		<div className="portfolio" id="Projects">
			<div className="grid">
				<div className="projectsHeader sticky" ref={ref}>
					{/* <div
					className={`projectsHeader ${isHeaderSticky ? "sticky" : "absolute"}`}
					style={{
						position: isHeaderSticky ? "sticky" : "absolute",
						top: isHeaderSticky ? "0" : `${items.length - 1}00vh`,
					}}
					ref={ref}
				> */}
					<div className="headerBox">
						{windowWidth < 1000 ? (
							<h1>My Projects</h1>
						) : (
							<h1>My Websites & Apps</h1>
						)}
					</div>
				</div>
				<div className="image-box">
					{items.map((item, index) => (
						<div key={item.id}>
							<Single item={item} />
							{index === items.length - 1 && <div ref={lastItemRef}></div>}
						</div>
					))}
				</div>
				<div className="progress">
					<div className="progressBar"></div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
