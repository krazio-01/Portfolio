import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './transition.css';

const EASE = [0.76, 0, 0.24, 1];
const PANEL_DURATION = 0.6;
const ENTER_DELAY = 0.3;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const formatLabel = (key) => (key === '/' ? 'Home' : capitalize(key.substring(1)));

const Transition = ({ children, keyName }) => {
    useEffect(() => {
        document.body.style.pointerEvents = 'none';

        const exitMs = PANEL_DURATION * 1000;
        const enterMs = (PANEL_DURATION + ENTER_DELAY) * 1000;

        const scrollTimer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, exitMs);

        const timer = setTimeout(() => {
            document.body.style.pointerEvents = 'auto';
        }, exitMs + enterMs);

        return () => {
            clearTimeout(scrollTimer);
            clearTimeout(timer);
            document.body.style.pointerEvents = 'auto';
        };
    }, [keyName]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="slide-in"
                key={`${keyName}-slide-in`}
                initial={{ height: '0vh' }}
                animate={{ height: '0vh', transition: { duration: 0 } }}
                exit={{ height: '100vh', transition: { duration: PANEL_DURATION, ease: EASE } }}
            />
            <motion.div
                className="slide-out"
                key={`${keyName}-slide-out`}
                initial={{ height: '100vh' }}
                animate={{ height: '0vh', transition: { duration: PANEL_DURATION, ease: EASE, delay: 0.1 } }}
                exit={{ height: '0vh', transition: { duration: 0 } }}
            />
            <motion.div
                className="pathname"
                key={`${keyName}-pathname`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: EASE, delay: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                {formatLabel(keyName)}
            </motion.div>
            <motion.div
                key={`${keyName}-content`}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: PANEL_DURATION, ease: EASE, delay: ENTER_DELAY },
                }}
                exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: -15,
                    transition: { duration: PANEL_DURATION, ease: EASE },
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Transition;
