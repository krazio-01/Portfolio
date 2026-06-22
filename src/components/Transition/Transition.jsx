import { motion, AnimatePresence } from 'framer-motion';
import './transition.css';

const easeCurve = [0.76, 0, 0.24, 1];

const Transition = ({ children, keyName }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="slide-in-accent"
                key={`${keyName}-slide-in-accent`}
                initial={{ height: '0vh' }}
                animate={{ height: '0vh', transition: { duration: 0 } }}
                exit={{ height: '100vh', transition: { duration: 0.6, ease: easeCurve } }}
            />

            <motion.div
                className="slide-in"
                key={`${keyName}-slide-in`}
                initial={{ height: '0vh' }}
                animate={{ height: '0vh', transition: { duration: 0 } }}
                exit={{ height: '100vh', transition: { duration: 0.6, ease: easeCurve, delay: 0.05 } }}
            />

            <motion.div
                className="slide-out"
                key={`${keyName}-slide-out`}
                initial={{ height: '100vh' }}
                animate={{ height: '0vh', transition: { duration: 0.6, ease: easeCurve, delay: 0.1 } }}
                exit={{ height: '0vh', transition: { duration: 0 } }}
            />

            <motion.div
                className="slide-out-accent"
                key={`${keyName}-slide-out-accent`}
                initial={{ height: '100vh' }}
                animate={{ height: '0vh', transition: { duration: 0.6, ease: easeCurve, delay: 0.15 } }}
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
                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: easeCurve, delay: 0.2 } }}
                exit={{ opacity: 0, scale: 0.94, y: -15, transition: { duration: 0.6, ease: easeCurve } }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
