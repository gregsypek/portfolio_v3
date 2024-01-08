import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
	open: {
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

		transition: {
			type: "spring",
			stiffness: 20,
		},
	},
	closed: {
		clipPath: " polygon(0 0, 50px 0, 50px 50px, 0 50px)",
		y: "25px",
		x: "25px",
		// backgroundColor:"transparent",
		transition: {
			delay: 0.3,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};
// const variants = {
// 	open: {
// 		clipPath:"circle(1200px at 50px 50px)",
// 		transition:{
// 			type: "spring",
// 			stiffness:20,
// 		}
// 	},
// 	closed: {
// 		clipPath: "circle(30px at 50px 50px)",
// 		transition: {
// 			delay: 0.5,
// 			type: "spring",
// 			stiffness: 400,
// 			damping: 40,
// 		},
// 	},
// };
const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div className="sidebar" animate={open ? "open" : "closed"}>
			<motion.div className="bg border" variants={variants}>
				<Links />
			</motion.div>
			<ToggleButton setOpen={setOpen} />
		</motion.div>
	);
};

export default Sidebar;
