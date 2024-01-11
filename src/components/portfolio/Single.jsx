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
					<div className="projectBox">
						<div className="textContainer">
							<div className="textHeader">
								<div className="square">React</div>
								<h4>{item.title}</h4>
							</div>
							<p>{item.desc}</p>
							<button>See Demo</button>
						</div>
						<div className="imageContainer" ref={ref}>
							<div className="buttons">
								<button>
									{/* <SlSizeActual /> */}
									<SlSizeFullscreen size={24} />
								</button>
								<button>
									<FaArrowLeftLong size={24} />
								</button>
								<button>
									<FaArrowRightLong size={24} />
								</button>
							</div>
							<img src={item.img} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Single;
