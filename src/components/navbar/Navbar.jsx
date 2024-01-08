import "./navbar.scss";
import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

const Navbar = () => {
	return (
		<div className="navbar">
			{/* sidebar */}
			<div className="wrapper">
				<span>GREG SYPEK</span>
				<div className="social">
					<a href="#">
						<BsTwitterX size={24}/>
					</a>
					<a href="#">
						<LuLinkedin size={24}/>
					</a>
					<a href="#">
						<LuGithub size={24}/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
