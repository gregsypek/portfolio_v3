import { motion } from "framer-motion";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = ({ setOpen }) => {
	const items = ["Homepage", "About", "Projects", "Experience", "Contact"];
	return (
		<motion.div className="links" variants={variants}>
			{items.map((item) => (
				<motion.a
					href={`#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setOpen((prev) => !prev)}
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	);

	// 	<>
	// 	{open && (
	// 		<motion.div
	// 			className="overlay"
	// 			initial={{ opacity: 0 }}
	// 			animate={{ opacity: 0.5 }}
	// 			exit={{ opacity: 0 }}
	// 		/>
	// 	)}
	// 	<motion.div className="sidebar" animate={open ? "open" : "closed"}>
	// 		<motion.div className="bg border" variants={variants}>
	// 			<Links />
	// 		</motion.div>
	// 		<ToggleButton setOpen={setOpen} />
	// 	</motion.div>
	// </>
};

export default Links;
