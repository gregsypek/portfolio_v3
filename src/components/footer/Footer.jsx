import { BsTwitterX } from "react-icons/bs";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import "./footer.scss";
function Footer() {
	return (
		<div className="footer">
			<div className="textContainer">
				<h1>Reach out for more?</h1>
				<p>
					I am available on twitter and linkedin. <br />
					You can also check my CV below.
				</p>
				<div className="buttons">
					<button className="pdf">
						download pdf <span></span>
					</button>
					<button className="html">
						open as html page <span></span>
					</button>
				</div>
			</div>
			<div className="iconsContainer">
				<div className="social">
					<a href="#">
						<BsTwitterX size={34} />
					</a>
					<a href="#">
						<LuLinkedin size={34} />
					</a>
					<a href="#">
						<LuGithub size={34} />
					</a>
				</div>
				<p>©{new Date().getFullYear()} Created by gregsypek</p>
			</div>
		</div>
	);
}

export default Footer;
