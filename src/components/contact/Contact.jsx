import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

// // const publicKey = process.env.REACT_APP_PUBLIC_KEY;
// // const serviceId = process.env.REACT_APP_SERVICE_ID;
// // const templateId = process.env.REACT_APP_TEMPLATE_ID;
// const publicKey = import.meta.env.REACT_APP_PUBLIC_KEY;

// const serviceId = import.meta.env.REACT_APP_SERVICE_ID;

// const templateId = import.meta.env.REACT_APP_TEMPLATE_ID;

const variants = {
	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

const Contact = () => {
	const ref = useRef();
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const isInView = useInView(ref, { margin: "-100px" });

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				// serviceId,
				// templateId,
				// formRef.current,
				// publicKey
				"service_0k67hif",
				"template_m8tr4ow",
				formRef.current,
				"LKt2c2f674mnn8bG-"
			)
			.then(
				() => {
					setSuccess(true);
				},
				() => {
					setError(true);
				}
			);
	};

	return (
		<motion.div
			ref={ref}
			className="contact"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}>Let’s work together</motion.h1>
				<motion.div className="item" variants={variants}>
					{/* <h2>Mail</h2> */}
					<div className="itemDetails">
						<motion.div
							className="phoneSvg"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1 }}
						>
							<svg
								width="80px"
								height="80px"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs></defs>

								<g data-name="2. Health Message" id="_2._Health_Message">
									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M31.5,10.14,27.6,7.2a1,1,0,0,0-1.2,1.6L29.32,11,16.59,20.33a1,1,0,0,1-1.18,0L2.68,11,5.6,8.8A1,1,0,0,0,4.4,7.2L.5,10.14A1,1,0,0,0,0,11V29a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V11A1,1,0,0,0,31.5,10.14ZM30,29a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13l12.23,9a3,3,0,0,0,3.54,0L30,13Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M5,28a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l4-4a1,1,0,0,1,1.42,1.42l-4,4A1,1,0,0,1,5,28Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M27,28a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,1.42-1.42l4,4a1,1,0,0,1,0,1.42A1,1,0,0,1,27,28Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M16,16a8,8,0,1,1,8-8A8,8,0,0,1,16,16ZM16,2a6,6,0,1,0,6,6A6,6,0,0,0,16,2Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-2"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M19,7H17V5a1,1,0,0,0-2,0V7H13a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V9h2a1,1,0,0,0,0-2Z"
										// style={{ fill: "#77acf1" }}
									/>
								</g>
							</svg>
						</motion.div>
						<span>hello@react.dev</span>
					</div>
				</motion.div>
				<motion.div className="item" variants={variants}>
					{/* <h2>Address</h2> */}

					<div className="itemDetails">
						<motion.div
							className="phoneSvg"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1 }}
						>
							<svg
								width="80px"
								height="80px"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs></defs>

								<g data-name="7. Id Card" id="_7._Id_Card">
									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M29,9H24a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1V28a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h8a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H13a2,2,0,0,0-2,2V9H3a3,3,0,0,0-3,3V28a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V12A3,3,0,0,0,29,9ZM13,3h6v8H13Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M4,26a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1,5,5,0,0,0-2.207-4.145,4,4,0,1,0-5.586,0A5,5,0,0,0,4,26Zm3-7a2,2,0,1,1,2,2A2,2,0,0,1,7,19Zm2,4a3.006,3.006,0,0,1,2.829,2H6.171A3.006,3.006,0,0,1,9,23Z"
										// style={{ fill: "#04009a" }}
									/>

									<motion.path
										className="cls-2"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M25,25H19a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
										// style={{ fill: "#77acf1" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-2"
										d="M27,21H19a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
										// style={{ fill: "#77acf1" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-2"
										d="M27,17H19a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
										// style={{ fill: "#77acf1" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-2"
										d="M16.02,9a1,1,0,0,1-.01-2h.01a1,1,0,0,1,0,2Z"
										// style={{ fill: "#77acf1" }}
									/>
								</g>
							</svg>
						</motion.div>
						<span>Hello street New York</span>
					</div>
				</motion.div>
				<motion.div className="item" variants={variants}>
					{/* <h2>Phone</h2> */}

					<div className="itemDetails">
						<motion.div
							className="phoneSvg"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 1 }}
						>
							<svg
								width="80px"
								height="80px"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<defs></defs>

								<g data-name="1. Online Health" id="_1._Online_Health">
									<motion.path
										className="cls-1"
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										d="M18.21,32H7.79A4.8,4.8,0,0,1,3,27.21V4.79A4.8,4.8,0,0,1,7.79,0H18.21A4.8,4.8,0,0,1,23,4.79V5a1,1,0,0,1-2,0V4.79A2.79,2.79,0,0,0,18.21,2H7.79A2.79,2.79,0,0,0,5,4.79V27.21A2.79,2.79,0,0,0,7.79,30H18.21A2.79,2.79,0,0,0,21,27.21V27a1,1,0,0,1,2,0v.21A4.8,4.8,0,0,1,18.21,32Z"
										// style={{ fill: "#0c0c1d" }}
										// style={{ fill: "red" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-2"
										d="M13,28a2,2,0,1,1,2-2A2,2,0,0,1,13,28Zm0-2Z"
										// style={{ fill: "#0c0c1d" }}
										// style={{ fill: "#77acf1" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-1"
										d="M16,6H10a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
										// style={{ fill: "#8089e6" }}
									/>

									<motion.path
										strokeWidth={1}
										fill="none"
										initial={{ pathLength: 0 }}
										animate={isInView && { pathLength: 1 }}
										transition={{ duration: 3 }}
										className="cls-1"
										d="M22,24a8,8,0,0,1-5.29-2H14a1,1,0,0,1-.89-1.45l1.19-2.39A7.93,7.93,0,0,1,14,16a8,8,0,1,1,8,8Zm-6.38-4h1.49a.94.94,0,0,1,.69.29A6,6,0,1,0,16,16a6.1,6.1,0,0,0,.32,1.93,1,1,0,0,1-.05.77Z"
										// style={{ fill: "#8089e6" }}
										// style={{ fill: "red" }}
									/>
									{/* dot */}
									<path
										strokeWidth={1}
										className="cls-2"
										d="M24,15H23V14a1,1,0,0,0-2,0v1H20a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V17h1a1,1,0,0,0,0-2Z"
										style={{ fill: "#0c0c1d" }}
									/>
								</g>
							</svg>
						</motion.div>
						<span>+1 234 5678</span>
					</div>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 1 }}
				>
					<input type="text" required placeholder="Name" name="name" />
					<input type="email" required placeholder="Email" name="email" />
					<textarea rows={8} placeholder="Message" name="message" />
					<button>Submit</button>

					{error &&
						"I am sorry, but there was an error processing your request. Please try again later."}
					{success &&
						"Thank you for contacting me. Your email has been sent! Please allow some time for me to respond :)"}
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
