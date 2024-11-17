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
			clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
			backgroundColor: "rgb(255, 255, 255)",
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
			},
		},
		closed: {
			clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",

			opacity: 0, // Hide the element completely
			backgroundColor: "rgba(0, 0, 0, 0.01)",
			transition: {
				delay: 0.3,
				opacity: { duration: 0.3 }, // Ensure it fades out quickly
				type: "spring",
				stiffness: 100,
				damping: 20,
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
