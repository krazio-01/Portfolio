import { useRef } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";

const Card = ({
    index,
    title,
    tagline,
    description,
    src,
    viewLink,
    codeLink,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="cardContainer">
            <div className="card-count">
                <span>{index + 1}</span>
            </div>
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${index * 20}px)`,
                }}
                className="card"
            >
                <h2>{title}</h2>
                <div className="body">
                    <div className="description">
                        <p>{tagline}</p>
                        <div className="desc-links">
                            <Link
                                to={{
                                    pathname: `/work/${title}`,
                                    state: {
                                        title,
                                        tagline,
                                        description,
                                        src,
                                        viewLink,
                                        codeLink,
                                    },
                                }}
                            >
                                <FaInfo />
                                <span>Project Info</span>
                            </Link>
                            {viewLink ? (
                                <a href={viewLink} target="_blank">
                                    <FaEye />
                                    <span>Live Demo</span>
                                </a>
                            ) : (
                                <div className="disabled-link">
                                    <FaEye />
                                    <span>Live Demo</span>
                                </div>
                            )}
                            {codeLink ? (
                                <a href={codeLink} target="_blank">
                                    <FaExternalLinkAlt />
                                    <span>Source Code</span>
                                </a>
                            ) : (
                                <div className="disabled-link">
                                    <FaExternalLinkAlt />
                                    <span>Source Code</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="imageContainer">
                        <motion.div className="inner" style={{ scale: imageScale }}>
                            <img src={src} alt="image" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
