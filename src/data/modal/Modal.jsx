import { useState, useEffect } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

const modalStyle = {
	content: {
		position: "absolute",
		zIndex: "233",
		top: "2%",
		left: "30%",
		right: "30%",
		height: "auto",
		overflow: "auto",
		bottom: "2% ",
	},
	overlay: {
		background: "rgba(0, 0, 0, 0.8)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		zIndex: "9999",
		height: "100vh",
	},
};

const MyModal = ({ image, onClose, link, title }) => {
	const [modalIsOpen, setModalIsOpen] = useState(true);

	useEffect(() => {
		if (modalIsOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [modalIsOpen]);

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => {
				setModalIsOpen(false);
				onClose();
			}}
			style={modalStyle}
			contentLabel="Obraz Modal"
		>
			<div>
				<img
					src={image}
					alt="Obraz Modal"
					style={{ width: "100%", height: "auto", maxHeight: "100%" }}
				/>
				<a href={link} target="_blank" rel="noreferrer">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							gap: "20px",

							alignContent: "center",
						}}
					>
						<p style={{ color: "black", fontSize: "18px" }}>{title}</p>
						<button
							style={{
								padding: "0.8em 1.2em",
								display: "inline-block",
								fontWeight: "normal",
								fontSize: "18px",
								marginTop: "20px",
								textAlign: "center",
								textDecoration: "none",
								cursor: "pointer",
								border: "1px solid black",
								borderRadius: "10px",
								backgroundColor: "#b7aed9",
								color: "black",
							}}
						>
							See Demo
						</button>
					</div>
				</a>
				<button
					style={{
						position: "fixed",
						top: "25px",
						right: "25px",
						background: "transparent",
						border: "none",
						color: "#fff",
						cursor: "pointer",
						fontSize: "18px",
						justifySelf: "center",
					}}
					onClick={() => {
						setModalIsOpen(false);
						onClose();
					}}
				>
					<IoMdClose size={34} />
				</button>
			</div>
		</Modal>
	);
};

export default MyModal;
