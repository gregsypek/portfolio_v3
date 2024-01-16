import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";

function Single({ item }) {
	const ref = useRef();

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
						<span>2023</span>
						<span>React</span>
					</div>
					<div className="projectBox">
						<div className="textContainer">
							<div className="textHeader">
								{/* <div className="square">React</div> */}
								<h4>{item.title}</h4>
							</div>
							<p>{item.desc}</p>
							<button>See Demo</button>
						</div>
						<div className="imageContainer" ref={ref}>
							<div className="buttons">
								<button>
									{/* <SlSizeActual /> */}
									<SlSizeFullscreen size={28} />
								</button>
								<div className="vertical-line"></div>
								<button>
									<FaArrowLeftLong size={28} />
								</button>
								<div className="vertical-line"></div>
								<button className="active">
									<FaArrowRightLong size={28} />
								</button>
							</div>
							<div className="image">
								<img src={item.images[0]} alt="project screenshot" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Single;
