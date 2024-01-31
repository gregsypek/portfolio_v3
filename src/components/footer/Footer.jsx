import { BsTwitterX } from "react-icons/bs";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import "./footer.scss";
function Footer() {
	return (
		<div className="footer">
			{/* <div className="iconsContainer"> */}
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
			{/* </div> */}
			<div className="textContainer">
				<h1>Reach out for more?</h1>
				<p>
					I am available on Twitter and Linkedin. <br />
					You can also check my CV below.
				</p>
				<div className="buttons">
					<a
						href="/cv/CV_GRZEGORZ_SYPEK_P_2024.pdf"
						download="CV_GRZEGORZ_SYPEK_P_2024.pdf"
						rel="noopener noreferrer"
					>
						<button className="pdf">
							download pdf <span></span>
						</button>
					</a>
					<a
						href="https://gregsypek.github.io/CV"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="html">
							open as html page <span></span>
						</button>
					</a>
				</div>
			</div>
			<p className="copyright">
				©{new Date().getFullYear()} Created by gregsypek
			</p>
		</div>
	);
}

export default Footer;
