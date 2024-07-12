import { motion, useScroll } from "framer-motion";
import "./progressBar.css";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}></motion.div>;
};

export default ProgressBar;
