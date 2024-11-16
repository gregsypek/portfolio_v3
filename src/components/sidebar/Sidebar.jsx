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
			backgroundColor: "white",
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 40,
			},
		},
		closed: {
			clipPath: "polygon(0%, 0%, 50% 25%, 50% 50%, 25% 50%)",

			opacity: 0, // Hide the element completely
			backgroundColor: "transparent",
			transition: {
				delay: 0.3,
				opacity: { duration: 0.3 }, // Ensure it fades out quickly
				type: "spring",
				stiffness: 150,
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
