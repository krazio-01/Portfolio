import { motion } from 'framer-motion';
import './progressBar.css';

const ProgressBar = ({ progress }) => {
    return <motion.div className="progress-bar" style={{ scaleX: progress }}></motion.div>;
};

export default ProgressBar;
