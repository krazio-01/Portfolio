import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './transition.css';

const easeCurve = [0.76, 0, 0.24, 1];

const Transition = ({ children, keyName }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const exitDelay = isMobile ? 0.7 : 0.05;

    useEffect(() => {
        document.body.style.pointerEvents = 'none';

        const exitDuration = (0.6 + exitDelay) * 1000;
        const enterDuration = (0.6 + 0.3) * 1000;
        const totalTransitionTime = exitDuration + enterDuration;

        const timer = setTimeout(() => {
            document.body.style.pointerEvents = 'auto';
        }, totalTransitionTime);

        return () => {
            clearTimeout(timer);
            document.body.style.pointerEvents = 'auto';
        };
    }, [keyName, exitDelay]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="slide-in"
                key={`${keyName}-slide-in`}
                initial={{ height: '0vh' }}
                animate={{ height: '0vh', transition: { duration: 0 } }}
                exit={{ height: '100vh', transition: { duration: 0.6, ease: easeCurve, delay: exitDelay } }}
            />

            <motion.div
                className="slide-out"
                key={`${keyName}-slide-out`}
                initial={{ height: '100vh' }}
                animate={{ height: '0vh', transition: { duration: 0.6, ease: easeCurve, delay: 0.1 } }}
                exit={{ height: '0vh', transition: { duration: 0 } }}
            />

            <motion.div
                className="pathname"
                key={`${keyName}-pathname`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: easeCurve, delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                {keyName === '/' ? 'Home' : capitalizeFirstLetter(keyName.substring(1))}
            </motion.div>

            <motion.div
                key={`${keyName}-content`}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: easeCurve, delay: 0.3 } }}
                exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: -15,
                    transition: { duration: 0.6, ease: easeCurve, delay: exitDelay },
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
