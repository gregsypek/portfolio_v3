import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
// import { useWindowSize } from "react-use";

const Sidebar = () => {
	// const { width } = useWindowSize();
	const [open, setOpen] = useState(false);

	const [width, setWidth] = useState(window.innerWidth);

	const updateWidth = useCallback(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", updateWidth);

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, [width, updateWidth]);
	const variants = {
		open: {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			background: "white",
			transition: {
				type: "spring",
				stiffness: 20,
			},
		},
		closed: {
			clipPath: " polygon(0 0, 50px 0, 50px 50px, 0 50px)",
			y: "25px",
			x: width < 738 ? "5px" : "25px",
			// x: "25px",
			border: 0,
			background: "transparent", //how to do this or anoher way?
			// backgroundColor:"transparent",
			transition: {
				delay: 0.3,
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
	};

	return (
		<motion.div className="sidebar" animate={open ? "open" : "closed"}>
			<motion.div className="bg border" variants={variants}>
				<Links setOpen={setOpen} />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
