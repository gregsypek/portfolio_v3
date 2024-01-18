import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
function Single({ item }) {
	console.log("🚀 ~ Single ~ item:", item);
	const ref = useRef();

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const handleNext = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
	};
	const handlePrev = () => {
		setCurrentImageIndex(
			(prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
		);
	};

	const isSingleImage = item.images.length <= 1;

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-5, 30]);

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
								{/* <SlSizeActual /> */}
								{/* <button>
									<SlSizeFullscreen size={28} />
								</button> */}
								{/* <div className="vertical-line"></div> */}
								<button onClick={handlePrev} disabled={isSingleImage}>
									<FaArrowLeftLong size={28} />
								</button>
								{/* <div className="vertical-line"></div> */}
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
		</section>
	);
}

export default Single;
