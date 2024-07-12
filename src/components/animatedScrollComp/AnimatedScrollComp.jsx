import { motion } from "framer-motion";
import Scroll from "../../assets/images/scroll.png";

const AnimatedScrollComponent = ({ text }) => {
    return (
        <>
            <span>{text}</span>
            <motion.img
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
                src={Scroll}
                alt="Scroll"
                style={{ width: "50px" }}
                className="scroll-img"
            />
        </>
    );
};

export default AnimatedScrollComponent;
