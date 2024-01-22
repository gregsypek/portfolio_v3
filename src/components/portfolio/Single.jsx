// import { useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
import MyModal from "../../data/modal/Modal";
function Single({ item }) {
	const ref = useRef();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNext = useCallback(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
	}, [item.images.length]);

	const handlePrev = useCallback(() => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
		);
	}, [item.images.length]);

	const isSingleImage = item.images.length <= 1;

	// const { scrollYProgress } = useScroll({
	// 	target: ref,
	// });

	// const y = useTransform(scrollYProgress, [0, 1], [-5, 30]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "ArrowLeft") {
				handlePrev();
			} else if (event.key === "ArrowRight") {
				handleNext();
			}
		},
		[handleNext, handlePrev]
	);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		// Funkcja do zamknięcia modala i zresetowania stanu
		setIsModalOpen(false);
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<section>
			<div className="container">
				{/* <div className="empty"></div> */}
				<div className="wrapper">
					<div className="languages">
						{item.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
					<div className="projectBox">
						<div className="textContainer">
							<div className="textHeader">
								{/* <div className="square">React</div> */}
								<div className="title">
									<h4>{item.title}</h4>
									<a href={`${item.github}`} target="_blank" rel="noreferrer">
										<span>
											<LuGithub size={24} color="#625781" />
										</span>
									</a>
								</div>
							</div>
							<p>{item.desc}</p>
							<a href={`${item.live}`} target="_blank" rel="noreferrer">
								<button>See Demo</button>
							</a>
						</div>
						<div className="imageContainer" ref={ref}>
							<div className="buttons">
								{item.fullView && (
									<>
										<button className="fullScreen" onClick={handleOpenModal}>
											<SlSizeFullscreen size={28} />
										</button>
										<div className="vertical-line"></div>{" "}
									</>
								)}
								<button onClick={handlePrev} disabled={isSingleImage}>
									<FaArrowLeftLong size={28} />
								</button>
								<div className="vertical-line"></div>
								<button
									className="active"
									onClick={handleNext}
									disabled={isSingleImage}
								>
									<FaArrowRightLong size={28} />
								</button>
							</div>
							<div className="image">
								<img
									src={item.images[currentImageIndex]}
									alt="project screenshot"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{isModalOpen && (
				<MyModal
					image={item?.fullView}
					link={item?.live}
					desc={item?.title}
					onClose={handleCloseModal}
				/>
			)}
		</section>
	);
}

export default Single;
