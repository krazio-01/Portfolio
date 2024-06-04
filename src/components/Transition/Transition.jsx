import { motion, AnimatePresence } from "framer-motion";
import './transition.css';

const Transition = ({ children, keyName }) => {
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="layout1"
                key={Math.random()}
                animate={{ height: "0vh" }}
                exit={{ height: "140vh" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.div
                className="pathname"
                key={Math.random()}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {keyName === "/" ? "Home" : capitalizeFirstLetter(keyName.substring(1))}
            </motion.div>
            <motion.div
                className="layout2"
                key={Math.random()}
                initial={{ height: "140vh" }}
                animate={{ height: "0vh", transition: { delay: 0.5 } }}
            >
            </motion.div>
            {children}
        </AnimatePresence>
    );
};

export default Transition;
