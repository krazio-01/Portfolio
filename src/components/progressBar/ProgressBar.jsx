import './progressBar.css';
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        >

        </motion.div>
    )
}

export default ProgressBar
