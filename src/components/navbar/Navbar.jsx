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
				<div className="left">
					<div className="empty" tabIndex={0}></div>
					<motion.span
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						GRZEGORZ SYPEK
					</motion.span>
				</div>
				<div className="social">
					<a href="https://twitter.com/gregsypek">
						<BsTwitterX size={24} />
					</a>
					<a href="https://www.linkedin.com/in/grzegorz-sypek-47472a194/">
						<LuLinkedin size={24} />
					</a>
					<a href="https://github.com/gregsypek">
						<LuGithub size={24} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
