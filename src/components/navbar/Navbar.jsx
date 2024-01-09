import "./navbar.scss";
import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
	return (
		<div className="navbar">
			{/* sidebar */}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					GRZEGORZ SYPEK
				</motion.span>
				<div className="social">
					<a href="#">
						<BsTwitterX size={24} />
					</a>
					<a href="#">
						<LuLinkedin size={24} />
					</a>
					<a href="#">
						<LuGithub size={24} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
