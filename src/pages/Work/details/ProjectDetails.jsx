import "./projectDetails.css";
import { useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaExternalLinkAlt, FaNodeJs, FaReact, FaStripe, FaJs, FaCss3Alt, FaEye, FaArrowRight } from "react-icons/fa";
import { SiMongodb, SiPug, SiExpress, SiSocketdotio, SiCloudinary } from "react-icons/si";
import { projects } from "../work-items";
import images from "./imgs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const iconMap = {
    "Node.js": FaNodeJs,
    React: FaReact,
    Stripe: FaStripe,
    JavaScript: FaJs,
    CSS: FaCss3Alt,
    MongoDB: SiMongodb,
    Pug: SiPug,
    "Express.js": SiExpress,
    "Socket.io": SiSocketdotio,
    Cloudinary: SiCloudinary,
};

const generateAnimationProps = (inView) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.7 },
});

const ProjectDetails = ({ }) => {
    const { projectName } = useParams();
    const project = useMemo(() => projects.find((proj) => proj.title === projectName), [projectName]);
    const currentIndex = projects.findIndex((proj) => proj.title === projectName);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    const separateLetters = useMemo(() => projectName.split(""), [projectName]);

    const descHeadRef = useRef();
    const overviewRef = useRef();
    const techRef = useRef();

    const isDescHeadInView = useInView(descHeadRef, { margin: "-50px", once: true });
    const isOverviewInView = useInView(overviewRef, { margin: "-50px", once: true });
    const isTechInView = useInView(techRef, { margin: "-50px", once: true });

    return (
        <div className="project-details">
            <div className="project-header">
                <ul>
                    {separateLetters.map((letter, index) => (
                        <motion.li
                            initial={{ y: index % 2 === 0 ? -10 : 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: (index + 5) * 0.08,
                                type: "spring",
                                stiffness: 400,
                            }}
                            key={index}
                        >
                            <span style={{ whiteSpace: 'pre' }}>{letter === " " ? '\u00A0' : letter}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="project-imgs"
            >
                <Swiper
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 2,
                    }}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect={"fade"}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                >
                    {images[projectName]?.map((image, index) => (
                        <SwiperSlide key={index} className="project-img">
                            <img src={image} alt={projectName} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <div className="project-description">
                <motion.div
                    ref={descHeadRef}
                    {...generateAnimationProps(isDescHeadInView)}
                    className="project-desc-head"
                >
                    <h1>Discription</h1>
                    <p>{project.tagline}</p>
                </motion.div>

                <motion.div
                    ref={overviewRef}
                    {...generateAnimationProps(isOverviewInView)}
                    className="project-overview"
                >
                    <h2>Overview</h2>
                    <p>{project.description}</p>
                </motion.div>

                <motion.div
                    ref={techRef}
                    {...generateAnimationProps(isTechInView)}
                    className="project-tech"
                >
                    <h2>Technologies</h2>
                    <ul>
                        {project.technologies.map((tech, index) => {
                            const IconComponent = iconMap[tech];
                            return (
                                <li key={index}>
                                    <span>
                                        <IconComponent />
                                        {tech}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>

                <div className="project-details-link">
                    <div className="project-links">
                        {project.viewLink ? (
                            <a href={project.viewLink} target="_blank">
                                <FaEye />
                                <span>Live Demo</span>
                            </a>
                        ) : (
                            <div className="disabled-link">
                                <FaEye />
                                <span>Live Demo</span>
                            </div>
                        )}
                        {project.codeLink ? (
                            <a href={project.codeLink} target="_blank">
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
                    <Link to={`/work/${nextProject.title}`}>
                        <FaArrowRight />
                        <span>Next Project</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
