import { motion, useSpring, useTransform } from 'framer-motion';
import './progressBar.css';

const ProgressBar = ({ progress }) => {
    const eased = useTransform(progress, [0, 0.97], [0, 1]);
    const opacity = useTransform(progress, [0, 0.05], [0, 1]);

    const scaleX = useSpring(eased, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div className="progress-track" style={{ opacity }}>
            <motion.div className="progress-fill" style={{ scaleX }} />
        </motion.div>
    );
};

export default ProgressBar;
